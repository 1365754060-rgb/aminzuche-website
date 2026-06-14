import { createSign } from "node:crypto";

export type LeadPayload = {
  submittedAt: string;
  companyName: string;
  contactName: string;
  contact: string;
  social: string;
  visitDate: string;
  peopleCount: string;
  city: string;
  projectType: string;
  request: string;
};

const leadSheetHeaders = [
  "提交时间",
  "公司名称",
  "联系人姓名",
  "联系方式",
  "微信/WhatsApp",
  "到访日期",
  "考察人数",
  "用车城市",
  "项目类型",
  "行程需求",
  "跟进状态",
  "负责人",
  "备注"
];
const defaultFollowUpStatus = "未联系";
const defaultOwner = "阿敏";
const googleTokenUrl = "https://oauth2.googleapis.com/token";
const googleSheetsScope = "https://www.googleapis.com/auth/spreadsheets";

type GoogleApiErrorBody = {
  error?: {
    code?: number;
    message?: string;
    status?: string;
    errors?: unknown;
  };
};

class GoogleApiError extends Error {
  errors?: unknown;
  response?: {
    data: unknown;
  };
  status?: number;

  constructor(message: string, response: Response, data: unknown) {
    super(message);
    this.name = "GoogleApiError";
    this.status = response.status;
    this.response = { data };
    this.errors =
      typeof data === "object" && data !== null && "error" in data
        ? (data as GoogleApiErrorBody).error?.errors
        : undefined;
  }
}

function parseGoogleApiBody(body: string) {
  try {
    return JSON.parse(body) as GoogleApiErrorBody;
  } catch {
    return body;
  }
}

async function buildGoogleApiError(response: Response) {
  const body = await response.text();
  const data = body ? parseGoogleApiBody(body) : {};
  const message =
    typeof data === "object" && data !== null && "error" in data
      ? (data as GoogleApiErrorBody).error?.message || response.statusText
      : response.statusText || body || `Google API HTTP ${response.status}`;

  return new GoogleApiError(message, response, data);
}

function getGoogleErrorDetails(error: unknown) {
  if (error instanceof GoogleApiError) {
    return {
      message: error.message,
      responseData: error.response?.data,
      errors: error.errors,
      stack: error.stack
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      responseData: undefined,
      errors: undefined,
      stack: error.stack
    };
  }

  return {
    message: String(error),
    responseData: undefined,
    errors: undefined,
    stack: undefined
  };
}

function logGoogleSheetsError(
  error: unknown,
  context: {
    spreadsheetId?: string;
    sheetName?: string;
    range?: string;
  }
) {
  const details = getGoogleErrorDetails(error);

  console.error("Google Sheets integration error", {
    message: details.message,
    responseData: details.responseData,
    errors: details.errors,
    stack: details.stack,
    spreadsheetId: context.spreadsheetId,
    sheetName: context.sheetName,
    range: context.range
  });
}

function base64Url(input: string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function getPrivateKey() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.trim();

  if (!privateKey) {
    return undefined;
  }

  if (privateKey.startsWith("{")) {
    try {
      const serviceAccount = JSON.parse(privateKey) as { private_key?: string };
      return serviceAccount.private_key?.replace(/\\n/g, "\n");
    } catch {
      return privateKey;
    }
  }

  return privateKey
    .replace(/^["']|["']$/g, "")
    .replace(/\\n/g, "\n");
}

function assertGoogleSheetsConfig() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = getPrivateKey();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_LEADS_SHEET_NAME || "Leads";

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");
  }

  return { clientEmail, privateKey, spreadsheetId, sheetName };
}

async function getGoogleAccessToken() {
  const { clientEmail, privateKey } = assertGoogleSheetsConfig();
  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: "RS256",
    typ: "JWT"
  };
  const claim = {
    iss: clientEmail,
    scope: googleSheetsScope,
    aud: googleTokenUrl,
    exp: now + 3600,
    iat: now
  };
  const unsignedToken = `${base64Url(JSON.stringify(header))}.${base64Url(
    JSON.stringify(claim)
  )}`;
  const signature = createSign("RSA-SHA256")
    .update(unsignedToken)
    .sign(privateKey, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const assertion = `${unsignedToken}.${signature}`;
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion
  });
  const response = await fetch(googleTokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });

  if (!response.ok) {
    throw await buildGoogleApiError(response);
  }

  const token = (await response.json()) as { access_token?: string };

  if (!token.access_token) {
    throw new Error("GOOGLE_TOKEN_MISSING");
  }

  return token.access_token;
}

async function updateGoogleSheetValues(params: {
  accessToken: string;
  spreadsheetId: string;
  range: string;
  values: string[][];
}) {
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${params.spreadsheetId}/values/${encodeURIComponent(
    params.range
  )}?valueInputOption=USER_ENTERED`;
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      values: params.values
    })
  });

  if (!response.ok) {
    throw await buildGoogleApiError(response);
  }
}

async function getGoogleSheetValues(params: {
  accessToken: string;
  spreadsheetId: string;
  range: string;
}) {
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${params.spreadsheetId}/values/${encodeURIComponent(
    params.range
  )}`;
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${params.accessToken}`
    }
  });

  if (!response.ok) {
    throw await buildGoogleApiError(response);
  }

  const data = (await response.json()) as { values?: string[][] };
  return data.values || [];
}

async function ensureLeadSheetHeaders(params: {
  accessToken: string;
  spreadsheetId: string;
  range: string;
}) {
  const values = await getGoogleSheetValues(params);
  const currentHeaders = values[0] || [];
  const needsUpdate = leadSheetHeaders.some(
    (header, index) => currentHeaders[index] !== header
  );

  if (!needsUpdate) {
    return;
  }

  await updateGoogleSheetValues({
    ...params,
    values: [leadSheetHeaders]
  });
}

export async function appendLeadToGoogleSheet(lead: LeadPayload) {
  let spreadsheetId: string | undefined;
  let sheetName: string | undefined;
  let range: string | undefined;

  try {
    const config = assertGoogleSheetsConfig();
    spreadsheetId = config.spreadsheetId;
    sheetName = config.sheetName;
    const accessToken = await getGoogleAccessToken();
    range = `${sheetName}!A1:M1`;
    await ensureLeadSheetHeaders({
      accessToken,
      spreadsheetId,
      range
    });

    range = `${sheetName}!A:M`;
    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
      range
    )}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        values: [
          [
            lead.submittedAt,
            lead.companyName,
            lead.contactName,
            lead.contact,
            lead.social,
            lead.visitDate,
            lead.peopleCount,
            lead.city,
            lead.projectType,
            lead.request,
            defaultFollowUpStatus,
            defaultOwner,
            ""
          ]
        ]
      })
    });

    if (!response.ok) {
      throw await buildGoogleApiError(response);
    }
  } catch (error) {
    logGoogleSheetsError(error, {
      spreadsheetId,
      sheetName,
      range
    });
    throw error;
  }
}
