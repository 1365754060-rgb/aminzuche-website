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

const googleTokenUrl = "https://oauth2.googleapis.com/token";
const googleSheetsScope = "https://www.googleapis.com/auth/spreadsheets";

async function buildGoogleApiError(response: Response, fallback: string) {
  const body = await response.text();
  const detail = body ? `${response.status} ${body}` : `${response.status}`;

  return new Error(`${fallback}: ${detail}`);
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
    throw await buildGoogleApiError(response, "GOOGLE_TOKEN_REQUEST_FAILED");
  }

  const token = (await response.json()) as { access_token?: string };

  if (!token.access_token) {
    throw new Error("GOOGLE_TOKEN_MISSING");
  }

  return token.access_token;
}

export async function appendLeadToGoogleSheet(lead: LeadPayload) {
  const { spreadsheetId, sheetName } = assertGoogleSheetsConfig();
  const accessToken = await getGoogleAccessToken();
  const range = encodeURIComponent(`${sheetName}!A:J`);
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
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
          lead.request
        ]
      ]
    })
  });

  if (!response.ok) {
    throw await buildGoogleApiError(response, "GOOGLE_SHEETS_APPEND_FAILED");
  }
}
