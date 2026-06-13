import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  FaqItem,
  guideArticles,
  navItems,
  routeStops
} from "@/lib/aminContent";
import { siteName, wechatId, whatsappNumber, whatsappUrl } from "@/lib/site";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteHeader({ active }: { active?: string }) {
  return (
    <>
      <div className="bg-[#7f1d1d] text-xs text-white/88">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>🇮🇩 雅加达中资租车 · 中文服务</span>
          <span>
            微信 <strong>{wechatId}</strong> ｜ WhatsApp{" "}
            <a className="underline underline-offset-4" href={whatsappUrl}>
              {whatsappNumber}
            </a>
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/96 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="font-semibold leading-tight text-ink">
            阿敏租车
            <small className="block text-[11px] font-medium tracking-[0.22em] text-ink/48">
              AMIN CAR · JAKARTA
            </small>
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium text-ink/66 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active === item.href
                    ? "text-[#9f1d1d]"
                    : "transition hover:text-[#9f1d1d]"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact.html"
            className="rounded-md bg-[#9f1d1d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#7f1d1d]"
          >
            立即咨询
          </Link>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="font-semibold">
              阿敏租车
              <small className="block text-[11px] font-medium tracking-[0.22em] text-white/45">
                AMIN CAR · JAKARTA
              </small>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/62">
              由驻印尼6年的中国创始团队运营，专注服务来印尼商务考察、出差、工作的中国客户。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gold">服务</h4>
            <div className="mt-4 grid gap-2 text-sm text-white/62">
              <Link href="/business-charter.html">商务考察包车</Link>
              <Link href="/airport-transfer.html">机场接送</Link>
              <Link href="/fleet-price.html">车型与价格</Link>
              <Link href="/guide.html">印尼考察攻略</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gold">联系</h4>
            <div className="mt-4 grid gap-2 text-sm text-white/62">
              <span>微信：{wechatId}</span>
              <a href={whatsappUrl}>WhatsApp：{whatsappNumber}</a>
              <Link href="/contact.html">服务区域：雅加达 · 卡拉旺 · 芝卡朗 · 万隆</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs leading-6 text-white/38">
          © 2026 {siteName} · 雅加达中文商务用车
          <br />
          本站价格为参考市场价，以实际报价为准
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  active,
  children
}: {
  active?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white text-ink">
      <SiteHeader active={active} />
      {children}
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

export function RouteLine() {
  return (
    <div className="border-y border-white/10 bg-ink/80 py-6 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.28em] text-gold">
          我 们 最 熟 的 路 线
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routeStops.map((stop) => (
            <div key={stop.title} className="flex items-start gap-3">
              <span
                className={`mt-1 h-3 w-3 rounded-full ${
                  stop.hot ? "bg-[#dc2626]" : "bg-gold"
                }`}
              />
              <span>
                <b className="block text-sm">{stop.title}</b>
                <span className="text-xs text-white/50">{stop.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionHeading({
  tag,
  title
}: {
  tag: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <span className="text-xs font-bold tracking-[0.24em] text-[#9f1d1d]">
        {tag}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink">
        {title}
      </h2>
    </div>
  );
}

export function FeatureGrid({
  items
}: {
  items: Array<{ title: string; body: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-md border border-ink/10 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-ink/62">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQBlock({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink/10 rounded-md border border-ink/10 bg-white">
      {faqs.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="cursor-pointer list-none text-base font-semibold text-ink">
            {item.question}
            <span className="float-right text-gold transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-ink/64">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="bg-[#9f1d1d] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal">
            发送行程，10分钟内回复报价
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/72">
            告诉我们日期、人数和大致行程，剩下的交给阿敏团队。
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-[#7f1d1d]"
          >
            WhatsApp 咨询
          </a>
          <Link
            href="/contact.html"
            className="rounded-md border border-white px-5 py-3 text-center text-sm font-semibold text-white"
          >
            微信：{wechatId}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  active,
  title,
  desc,
  withRouteLine
}: {
  active: string;
  title: string;
  desc: string;
  withRouteLine?: boolean;
}) {
  return (
    <PageShell active={active}>
      <div className="mx-auto max-w-6xl px-5 py-4 text-sm text-ink/48 sm:px-8">
        <Link href="/">首页</Link> <span>›</span> {title}
      </div>
      <section className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            {desc}
          </p>
        </div>
      </section>
      {withRouteLine ? <RouteLine /> : null}
    </PageShell>
  );
}

export function ContactCTAForm() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading tag="询盘表单" title="提交考察用车需求" />
          <p className="text-base leading-7 text-ink/65">
            请填写公司、人数、城市、项目类型和行程需求。提交后会自动生成 WhatsApp 咨询消息，方便快速确认路线和车型。
          </p>
        </div>
        <LeadForm whatsappUrl={whatsappUrl} />
      </div>
    </section>
  );
}

export function GuideCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {guideArticles.slice(0, 3).map((article) => (
        <Link
          key={article.slug}
          href={`/${article.slug}`}
          className="rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#9f1d1d]/40 hover:shadow-business"
        >
          <h3 className="text-lg font-semibold leading-7 text-ink">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink/62">
            {article.description}
          </p>
          <span className="mt-5 inline-block text-sm font-semibold text-[#9f1d1d]">
            阅读 →
          </span>
        </Link>
      ))}
    </div>
  );
}

export function FleetImage() {
  return (
    <figure className="mt-8">
      <Image
        src="/fleet.jpg"
        alt="阿敏租车雅加达商务车队实拍"
        width={1200}
        height={760}
        className="h-auto w-full rounded-md border border-ink/10"
      />
      <figcaption className="mt-2 text-center text-xs text-ink/48">
        车队实拍 · 丰田 Alphard 商务接待序列
      </figcaption>
    </figure>
  );
}
