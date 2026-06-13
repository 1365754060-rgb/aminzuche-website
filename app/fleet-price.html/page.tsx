import type { Metadata } from "next";
import {
  CTASection,
  FAQBlock,
  FeatureGrid,
  JsonLd,
  PageShell,
  SectionHeading
} from "@/components/AminLayout";
import { faqSchema, fleetPrices, priceFaqs } from "@/lib/aminContent";

export const metadata: Metadata = {
  title: "雅加达租车价格_印尼包车车型报价_埃尔法威尔法日租 - 阿敏租车",
  description:
    "阿敏租车正式报价：5座欧萌达880元/天，7座Fortuner/帕杰罗1200元/天，埃尔法1650元/天，威尔法1850元/天。含停车费、高速费、燃油费、司机费。",
  alternates: {
    canonical: "/fleet-price.html"
  }
};

const billingRules = [
  {
    title: "服务时间与时长",
    body:
      "服务时间 6:00–23:00 之间，每天10小时；超过晚上23点用车，即使不满10小时也按加班计。"
  },
  {
    title: "里程与超额",
    body: "每天含120公里（以仪表盘为准）。超时按每小时收日租金的10%；超公里每公里10元。"
  },
  {
    title: "取消政策",
    body:
      "48小时前取消免费；24小时内取消收50%违约金；车辆已出发但因不可抗力未接到客户，收50%定金、余款不收。"
  },
  {
    title: "车内卫生",
    body: "车内吸烟或呕吐等严重影响车辆使用的情况，收取100元清洁费。"
  }
];

export default function FleetPricePage() {
  return (
    <PageShell active="/fleet-price.html">
      <JsonLd data={faqSchema(priceFaqs)} />
      <section className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            车型与价格
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            以下为正式报价（人民币）。一口价含停车费、高速费、燃油费、司机费，无任何隐形加价。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="overflow-x-auto rounded-md border border-ink/10">
          <table className="w-full min-w-[720px] border-collapse bg-white text-sm">
            <thead className="bg-sand/70 text-left text-ink">
              <tr>
                {["车型", "座位", "适用场景", "日租全包价"].map((head) => (
                  <th key={head} className="border-b border-ink/10 p-4 font-semibold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fleetPrices.map((row) => (
                <tr key={row[0]} className="border-b border-ink/8 last:border-0">
                  {row.map((cell, index) => (
                    <td
                      key={cell}
                      className={`p-4 ${index === 3 ? "font-semibold text-[#9f1d1d]" : "text-ink/70"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 overflow-x-auto rounded-md border border-ink/10">
          <table className="w-full min-w-[640px] border-collapse bg-white text-sm">
            <tbody>
              {[
                ["中文司机", "＋¥500 / 天", "负责日常沟通和路线交流"],
                ["中文司机兼导游", "＋¥800 / 天", "景点讲解、全程陪同、行程定制"]
              ].map((row) => (
                <tr key={row[0]} className="border-b border-ink/8 last:border-0">
                  <td className="p-4 font-semibold text-ink">{row[0]}</td>
                  <td className="p-4 font-semibold text-[#9f1d1d]">{row[1]}</td>
                  <td className="p-4 text-ink/62">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-sand/70 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading tag="计费规则" title="规则透明，先小人后君子" />
          <FeatureGrid items={billingRules} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading tag="常见问题" title="关于价格与规则" />
        <FAQBlock faqs={priceFaqs} />
      </section>

      <section className="bg-sand/70 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading tag="定制行程" title="考察之余，也能安排得明明白白" />
          <p className="max-w-3xl text-base leading-8 text-ink/65">
            除商务用车外，我们也提供游玩行程定制：千岛出海、万隆看火山与牛奶湖、茂物野生动物园、唐格朗射击体验等。适合考察团的答谢日安排，或带家人朋友的周末出行。配中文司机兼导游，行程、门票、路线一站式安排。
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
