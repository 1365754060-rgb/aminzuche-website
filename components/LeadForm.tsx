"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  whatsappUrl: string;
};

export function LeadForm({ whatsappUrl }: LeadFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const summary = [
      `姓名：${data.get("name") || ""}`,
      `联系方式：${data.get("contact") || ""}`,
      `日期：${data.get("date") || ""}`,
      `城市：${data.get("city") || ""}`,
      `需求：${data.get("request") || ""}`
    ].join("\n");

    if (whatsappUrl.startsWith("http")) {
      const separator = whatsappUrl.includes("?") ? "&" : "?";
      window.open(
        `${whatsappUrl}${separator}text=${encodeURIComponent(summary)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStatus("已打开 WhatsApp，请在发送前确认内容。");
      return;
    }

    setStatus("已记录在页面中。请配置 NEXT_PUBLIC_WHATSAPP_URL 后启用直接发送。");
  }

  return (
    <form
      id="lead-form"
      className="rounded-md bg-ink p-5 text-white shadow-business sm:p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold tracking-normal">提交用车需求</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/72">
          姓名
          <input
            className="form-field"
            name="name"
            placeholder="请输入姓名"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          联系方式
          <input
            className="form-field"
            name="contact"
            placeholder="WhatsApp / 微信 / 邮箱"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          日期
          <input className="form-field" name="date" type="date" />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          城市
          <input className="form-field" name="city" placeholder="雅加达 / 巴厘岛" />
        </label>
        <label className="grid gap-2 text-sm text-white/72 sm:col-span-2">
          需求
          <textarea
            className="form-field min-h-32 resize-y"
            name="request"
            placeholder="请填写人数、行程、车型偏好和用车时长"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:bg-[#d5b56d]"
      >
        提交按钮
      </button>
      {status ? (
        <p className="mt-4 rounded-md border border-white/12 bg-white/8 p-3 text-sm leading-6 text-white/72">
          {status}
        </p>
      ) : null}
    </form>
  );
}
