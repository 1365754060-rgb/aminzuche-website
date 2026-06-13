import type { Metadata } from "next";
import {
  CTASection,
  FAQBlock,
  FeatureGrid,
  JsonLd,
  PageShell,
  RouteLine,
  SectionHeading
} from "@/components/AminLayout";
import { businessFaqs, faqSchema } from "@/lib/aminContent";

export const metadata: Metadata = {
  title: "印尼商务考察包车_雅加达考察团用车_工业园区考察 - 阿敏租车",
  description:
    "阿敏租车专注中国企业印尼商务考察用车：中文司机、行程规划、卡拉旺/芝卡朗/万隆工业园区路线、政商拜访接送，全包价。",
  alternates: {
    canonical: "/business-charter.html"
  }
};

const serviceItems = [
  {
    title: "考察团全程用车（1-14天）",
    body:
      "按团组规模配置Fortuner、帕杰罗、埃尔法、威尔法，多人团组可双车编队；可加配中文司机或中文司机兼导游。"
  },
  {
    title: "行程规划建议",
    body:
      "按雅加达堵车规律倒排行程：早高峰7-10点、晚高峰4-8点，同区域拜访排同一天。"
  },
  {
    title: "工业园区路线",
    body:
      "卡拉旺KIIC、芝卡朗GIIC、德尔塔玛斯、万隆方向常年往返，园区门禁与落客流程熟悉。"
  },
  {
    title: "政商拜访接送",
    body:
      "投资部（BKPM/Kementerian Investasi）、各商协会、中国商会等机构楼宇落客点了然于心。"
  }
];

export default function BusinessCharterPage() {
  return (
    <PageShell active="/business-charter.html">
      <JsonLd data={faqSchema(businessFaqs)} />
      <section className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            印尼商务考察包车
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            中国企业来印尼考察，时间是最贵的成本。一辆车、一个中文司机、一套行程方案，全程无忧。
          </p>
        </div>
      </section>
      <RouteLine />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading tag="服务内容" title="从落地到送机，全程接管" />
        <FeatureGrid items={serviceItems} />
      </section>

      <section className="bg-sand/70 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading tag="经典问题" title="考察团最常问的四件事" />
          <FAQBlock faqs={businessFaqs} />
          <p className="mt-5 text-sm leading-6 text-ink/58">
            报价说明：全包价 ＝ 车辆 ＋ 司机 ＋ 油费 ＋ 过路费 ＋ 停车费，无任何隐形加价。
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
