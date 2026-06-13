import type { Metadata } from "next";
import Link from "next/link";
import {
  CTASection,
  ContactCTAForm,
  FAQBlock,
  FeatureGrid,
  FleetImage,
  GuideCards,
  JsonLd,
  PageShell,
  RouteLine,
  SectionHeading
} from "@/components/AminLayout";
import {
  faqSchema,
  homeFaqs,
  localBusinessSchema
} from "@/lib/aminContent";
import { siteName, siteUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "雅加达租车_印尼商务考察包车_机场接送 - 阿敏租车（中资中文服务）",
  description:
    "阿敏租车是雅加达中文用车团队，创始团队驻印尼6年。提供印尼商务考察包车、机场接送、定制游玩行程，中文司机服务，全包价无隐形消费。微信Amin-car。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "雅加达租车_印尼商务考察包车_机场接送",
    description:
      "雅加达中资租车团队，提供商务考察包车、机场接送、长期月租和中文司机服务。",
    url: siteUrl,
    siteName,
    type: "website"
  }
};

const serviceCards = [
  {
    icon: "🚐",
    title: "商务考察包车",
    body:
      "考察团全程用车，含中文司机与行程规划建议。卡拉旺、芝卡朗、万隆等工业园区路线熟门熟路。",
    href: "/business-charter.html"
  },
  {
    icon: "✈️",
    title: "机场接送",
    body:
      "苏加诺-哈达机场举牌接机，落地微信直联司机，无需当地电话卡，24小时服务。",
    href: "/airport-transfer.html"
  },
  {
    icon: "🏝️",
    title: "定制游玩行程",
    body:
      "千岛出海、万隆火山牛奶湖、茂物野生动物园、唐格朗射击体验，中文司机兼导游一站式安排。",
    href: "/fleet-price.html"
  }
];

const whyItems = [
  {
    title: "中国团队，沟通零障碍",
    body:
      "创始团队为驻印尼6年的中国人，深耕本地商务接待。全程中文对接，按中国商务习惯服务，出了问题找得到人。"
  },
  {
    title: "全包价，无隐形消费",
    body: "报价即含司机、油费、过路费、停车费。一口价，结账时不会多出任何名目。"
  },
  {
    title: "商务级司机标准",
    body:
      "提前15分钟到位、熟悉工业园区与政商楼宇落客点、车上常备饮用水，懂商务场景的分寸。"
  },
  {
    title: "对公凭证齐全",
    body:
      "行程单、服务合同、结算凭证一应俱全，支持人民币与对公转账，企业报销无忧。"
  }
];

export default function Home() {
  return (
    <PageShell active="/">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="mx-auto grid min-h-[660px] max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <span className="text-xs font-bold tracking-[0.24em] text-gold">
              中资团队 · 驻印尼6年
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              中国企业来印尼考察
              <br />
              <em className="not-italic text-gold">第一程</em>交给阿敏
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              印尼商务考察包车、机场接送、工业园考察用车服务。团队驻印尼6年，服务中国企业考察团、投资团、工厂参访团，熟悉雅加达商务用车、印尼考察包车、中国企业印尼考察、卡拉旺工业园考察、芝卡朗工业园考察、万隆等核心商务路线。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="rounded-md bg-[#dc2626] px-6 py-4 text-center text-sm font-semibold text-white shadow-business transition hover:bg-[#b91c1c]"
              >
                WhatsApp 立即咨询
              </a>
              <Link
                href="/fleet-price.html"
                className="rounded-md border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white"
              >
                查看车型价格
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-white/72">
              {["全包价无隐形消费", "中文司机", "对公凭证齐全", "接待数十个考察团"].map(
                (item) => (
                  <span key={item} className="rounded-md bg-white/8 px-3 py-2">
                    ✓ {item}
                  </span>
                )
              )}
            </div>
          </div>

          <aside className="rounded-md border border-white/10 bg-white/8 p-5 shadow-business backdrop-blur">
            <h2 className="text-lg font-semibold text-gold">📋 考察团行程单 · 示例</h2>
            <div className="mt-5 divide-y divide-white/10 text-sm text-white/72">
              {[
                ["D1 机场接机 → 市区酒店", "7座 Fortuner"],
                ["D2 投资部 · 商协会拜访", "市区全天"],
                ["D3 卡拉旺园区考察", "06:30 出发"],
                ["D4 雅加达 → 万隆", "跨城包车"],
                ["D5 补充会议 → 送机", "提前3.5h"]
              ].map(([left, right]) => (
                <div key={left} className="flex justify-between gap-4 py-3">
                  <span>{left}</span>
                  <span className="text-white/45">{right}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-white/52">
              按雅加达堵车规律倒排行程，是我们最常被夸的服务。
            </p>
          </aside>
        </div>
        <RouteLine />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading tag="核心服务" title="三件事，做到雅加达中文用车里最稳" />
        <div className="grid gap-4 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="rounded-md border border-ink/10 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                <Link href={card.href}>{card.title}</Link>
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink/62">{card.body}</p>
              <Link
                href={card.href}
                className="mt-5 inline-block text-sm font-semibold text-[#9f1d1d]"
              >
                了解详情 →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/70 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading tag="为什么选阿敏" title="在印尼，靠谱比便宜重要" />
          <FeatureGrid items={whyItems} />
          <FleetImage />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading tag="常见问题" title="来印尼用车，你大概想问这些" />
        <FAQBlock faqs={homeFaqs} />
      </section>

      <section className="bg-sand/70 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading tag="考察攻略" title="驻印尼6年的一线经验，先看再来" />
          <GuideCards />
        </div>
      </section>

      <CTASection />
      <ContactCTAForm />
    </PageShell>
  );
}
