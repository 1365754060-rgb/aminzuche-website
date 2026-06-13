"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  whatsappUrl: string;
};

const projectTypes = [
  "工业园考察",
  "矿山考察",
  "工厂参访",
  "机场接送",
  "商务接待",
  "长期用车",
  "其他"
];

const requiredFields = [
  { key: "companyName", label: "公司名称" },
  { key: "contactName", label: "联系人姓名" },
  { key: "contact", label: "联系方式" },
  { key: "social", label: "微信/WhatsApp" },
  { key: "visitDate", label: "到访日期" },
  { key: "peopleCount", label: "考察人数" },
  { key: "city", label: "用车城市" },
  { key: "projectType", label: "项目类型" },
  { key: "request", label: "行程需求描述" }
];

function getValue(data: FormData, key: string) {
  return String(data.get(key) || "").trim();
}

export function LeadForm({ whatsappUrl }: LeadFormProps) {
  const [status, setStatus] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const missingField = requiredFields.find(
      (field) => getValue(data, field.key).length === 0
    );

    if (missingField) {
      const element = form.elements.namedItem(missingField.key);

      if (element instanceof HTMLElement) {
        element.focus();
      }

      setStatus({
        type: "error",
        message: `请填写${missingField.label}后再提交。`
      });
      return;
    }

    const summary = [
      "您好，我想咨询印尼商务考察/包车用车服务，以下是我的需求：",
      "",
      `公司名称：${getValue(data, "companyName")}`,
      `联系人姓名：${getValue(data, "contactName")}`,
      `联系方式：${getValue(data, "contact")}`,
      `微信/WhatsApp：${getValue(data, "social")}`,
      `到访日期：${getValue(data, "visitDate")}`,
      `考察人数：${getValue(data, "peopleCount")}`,
      `用车城市：${getValue(data, "city")}`,
      `项目类型：${getValue(data, "projectType")}`,
      `行程需求描述：${getValue(data, "request")}`
    ].join("\n");

    if (whatsappUrl.startsWith("http")) {
      const separator = whatsappUrl.includes("?") ? "&" : "?";
      window.open(
        `${whatsappUrl}${separator}text=${encodeURIComponent(summary)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStatus({
        type: "success",
        message: "已打开 WhatsApp，请在发送前确认需求内容。"
      });
      return;
    }

    setStatus({
      type: "error",
      message: "WhatsApp 链接暂未配置，请直接通过页面联系方式咨询。"
    });
  }

  return (
    <form
      id="lead-form"
      className="rounded-md bg-ink p-5 text-white shadow-business sm:p-8"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold tracking-normal">提交考察用车需求</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/72">
          公司名称
          <input
            className="form-field"
            name="companyName"
            placeholder="如：某某制造有限公司"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          联系人姓名
          <input
            className="form-field"
            name="contactName"
            placeholder="请输入联系人姓名"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          联系方式
          <input
            className="form-field"
            name="contact"
            placeholder="手机号 / 邮箱"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          微信/WhatsApp
          <input
            className="form-field"
            name="social"
            placeholder="微信号 / WhatsApp 号码"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          到访日期
          <input className="form-field" name="visitDate" required type="date" />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          考察人数
          <input
            className="form-field"
            inputMode="numeric"
            min="1"
            name="peopleCount"
            placeholder="如：4"
            required
            type="number"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          用车城市
          <input
            className="form-field"
            name="city"
            placeholder="雅加达 / 卡拉旺 / 芝卡朗 / 万隆"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          项目类型
          <select className="form-field" defaultValue="" name="projectType" required>
            <option value="" disabled>
              请选择项目类型
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm text-white/72 sm:col-span-2">
          行程需求描述
          <textarea
            className="form-field min-h-32 resize-y"
            name="request"
            placeholder="请填写到访城市、工业园/矿区/工厂点位、机场接送、车型偏好、用车天数等"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:bg-[#d5b56d]"
      >
        提交考察用车需求
      </button>
      {status ? (
        <p
          aria-live="polite"
          className={`mt-4 rounded-md border p-3 text-sm leading-6 ${
            status.type === "error"
              ? "border-red-300/40 bg-red-500/10 text-red-100"
              : "border-white/12 bg-white/8 text-white/72"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
