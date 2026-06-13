import { NextResponse } from "next/server";
import {
  LeadPayload,
  appendLeadToGoogleSheet
} from "@/lib/googleSheets";

export const runtime = "nodejs";

type LeadRequestBody = Partial<Omit<LeadPayload, "submittedAt">>;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(body: LeadRequestBody) {
  const lead = {
    companyName: clean(body.companyName),
    contactName: clean(body.contactName),
    contact: clean(body.contact),
    social: clean(body.social),
    visitDate: clean(body.visitDate),
    peopleCount: clean(body.peopleCount),
    city: clean(body.city),
    projectType: clean(body.projectType),
    request: clean(body.request)
  };

  if (!lead.contactName) {
    return { error: "请填写联系人姓名。", lead };
  }

  if (!lead.contact && !lead.social) {
    return { error: "请至少填写联系方式或微信/WhatsApp。", lead };
  }

  if (!lead.visitDate) {
    return { error: "请选择到访日期。", lead };
  }

  if (!lead.peopleCount) {
    return { error: "请填写考察人数。", lead };
  }

  if (!lead.city) {
    return { error: "请填写用车城市。", lead };
  }

  if (!lead.projectType) {
    return { error: "请选择项目类型。", lead };
  }

  return { lead };
}

export async function POST(request: Request) {
  let body: LeadRequestBody;

  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json(
      { error: "提交内容格式不正确。" },
      { status: 400 }
    );
  }

  const { error, lead } = validateLead(body);

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  try {
    await appendLeadToGoogleSheet({
      submittedAt: new Date().toISOString(),
      ...lead
    });
  } catch (saveError) {
    console.error("Failed to save lead", saveError);

    return NextResponse.json(
      {
        error: "系统暂时无法提交，请通过微信或 WhatsApp 联系我们"
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
