import type { Metadata } from "next";
import {
  CTASection,
  FAQBlock,
  FeatureGrid,
  JsonLd,
  PageShell,
  SectionHeading
} from "@/components/AminLayout";
import { airportFaqs, faqSchema } from "@/lib/aminContent";

export const metadata: Metadata = {
  title: "雅加达机场接送_苏加诺哈达机场到市区_中文接机 - 阿敏租车",
  description:
    "雅加达苏加诺-哈达机场（CGK）中文举牌接机：落地微信直联司机，无需当地电话卡，24小时服务，全包价。阿敏租车。",
  alternates: {
    canonical: "/airport-transfer.html"
  }
};

const processItems = [
  {
    title: "① 发送航班号",
    body: "提前将航班号发至微信 Amin-car 或 WhatsApp，收到确认单。"
  },
  {
    title: "② 落地开机",
    body: "微信直接收到司机实时位置和车牌号，全程不需要当地电话卡。"
  },
  {
    title: "③ 出口举牌接机",
    body: "司机在到达口举牌等候，协助提取行李。航班延误，免费顺延等待。"
  },
  {
    title: "④ 直达目的地",
    body: "酒店、会议地点或直接开始拜访行程，车上可与中文协调员对接当天安排。"
  }
];

export default function AirportTransferPage() {
  return (
    <PageShell active="/airport-transfer.html">
      <JsonLd data={faqSchema(airportFaqs)} />
      <section className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            雅加达机场接送 · 中文举牌接机
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            苏加诺-哈达机场（CGK）距市区30公里，堵车时2小时起步。落地第一程，交给我们。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading tag="服务流程" title="四步，落地即上车" />
        <FeatureGrid items={processItems} />
      </section>

      <section className="bg-sand/70 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading tag="价格与须知" title="接送机常见问题" />
          <FAQBlock faqs={airportFaqs} />
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
