import { LeadPayload } from "@/lib/googleSheets";

const resendEmailUrl = "https://api.resend.com/emails";

function getLeadNotificationConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.LEAD_NOTIFY_TO?.trim();
  const from = process.env.LEAD_NOTIFY_FROM?.trim();

  if (!apiKey || !to || !from) {
    return undefined;
  }

  return { apiKey, to, from };
}

function formatValue(value: string) {
  return value || "-";
}

function buildLeadEmailText(lead: LeadPayload) {
  return [
    `提交时间：${formatValue(lead.submittedAt)}`,
    `公司名称：${formatValue(lead.companyName)}`,
    `联系人姓名：${formatValue(lead.contactName)}`,
    `联系方式：${formatValue(lead.contact)}`,
    `微信/WhatsApp：${formatValue(lead.social)}`,
    `到访日期：${formatValue(lead.visitDate)}`,
    `考察人数：${formatValue(lead.peopleCount)}`,
    `用车城市：${formatValue(lead.city)}`,
    `项目类型：${formatValue(lead.projectType)}`,
    `行程需求：${formatValue(lead.request)}`
  ].join("\n");
}

async function logResendError(response: Response) {
  const body = await response.text();

  console.error("Lead notification email failed", {
    status: response.status,
    statusText: response.statusText,
    responseBody: body
  });
}

export async function sendLeadNotificationEmail(lead: LeadPayload) {
  const config = getLeadNotificationConfig();

  if (!config) {
    console.info("Lead notification email skipped: Resend is not configured");
    return;
  }

  const subject = `【Amin Zuche新询盘】${formatValue(
    lead.companyName
  )} - ${formatValue(lead.projectType)}`;
  const response = await fetch(resendEmailUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: config.from,
      to: config.to,
      subject,
      text: buildLeadEmailText(lead)
    })
  });

  if (!response.ok) {
    await logResendError(response);
  }
}
