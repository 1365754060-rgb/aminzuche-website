import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTAForm, PageShell } from "@/components/AminLayout";
import { wechatId, whatsappNumber, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "联系阿敏租车_微信Amin-car_WhatsApp预订 - 阿敏租车",
  description:
    "联系阿敏租车：微信Amin-car（推荐，10分钟内回复），WhatsApp +62 813-1120-6651。发送日期、人数、行程即可获取报价。",
  alternates: {
    canonical: "/contact.html"
  }
};

export default function ContactPage() {
  return (
    <PageShell active="/contact.html">
      <section className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            联系我们
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            发送日期、人数、大致行程，10分钟内回复报价方案。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-md border border-ink/10 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">💬</div>
            <h2 className="mt-4 text-2xl font-semibold text-ink">微信（推荐）</h2>
            <p className="mt-3 text-3xl font-semibold text-[#9f1d1d]">{wechatId}</p>
            <Image
              src="/wechat-qr.jpg"
              alt="阿敏租车微信二维码"
              width={560}
              height={560}
              className="mx-auto mt-5 h-auto w-full max-w-[280px] rounded-md border border-ink/10"
            />
            <p className="mt-4 text-sm leading-6 text-ink/62">
              添加时备注「用车」，工作时间10分钟内回复。手机用户长按识别添加。
            </p>
          </article>
          <article className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
            <div className="text-3xl">📱</div>
            <h2 className="mt-4 text-2xl font-semibold text-ink">WhatsApp</h2>
            <p className="mt-3 text-3xl font-semibold text-[#9f1d1d]">
              {whatsappNumber}
            </p>
            <p className="mt-5 text-sm leading-6 text-ink/62">
              点击下方按钮直接发起对话，24小时接收预订。
            </p>
            <a
              className="mt-6 inline-flex rounded-md bg-[#9f1d1d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1d1d]"
              href={whatsappUrl}
            >
              打开 WhatsApp 对话
            </a>
          </article>
        </div>
        <div className="mt-10 rounded-md bg-sand/70 p-6">
          <h2 className="text-2xl font-semibold text-ink">预订时请提供</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink/66">
            <li>日期与天数（如：7月12日-16日，共5天）</li>
            <li>人数与行李情况</li>
            <li>大致行程（市区拜访 / 工业园区 / 跨城 / 仅接送机）</li>
            <li>是否需要凭证、合同等企业报销材料</li>
          </ul>
        </div>
      </section>
      <ContactCTAForm />
    </PageShell>
  );
}
