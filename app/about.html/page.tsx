import type { Metadata } from "next";
import {
  CTASection,
  FeatureGrid,
  FleetImage,
  PageShell,
  SectionHeading
} from "@/components/AminLayout";

export const metadata: Metadata = {
  title: "关于阿敏租车_雅加达中资中文租车团队 - 阿敏租车",
  description:
    "阿敏租车由驻印尼6年的中国创始团队运营，专注服务中国企业在印尼商务考察、机场接送、长期用车和中文司机需求。",
  alternates: {
    canonical: "/about.html"
  }
};

export default function AboutPage() {
  return (
    <PageShell active="/about.html">
      <section className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            关于我们
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            阿敏租车由驻印尼6年的中国创始团队运营，专注服务来印尼商务考察、出差和长期驻外的中国客户。
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading tag="我们的三条原则" title="靠谱、透明、懂商务" />
        <FeatureGrid
          items={[
            {
              title: "靠谱",
              body:
                "司机提前到位，车辆提前确认，行程提前规划。商务考察最怕不确定，我们把不确定尽量前置解决。"
            },
            {
              title: "透明",
              body:
                "全包价含司机、油费、停车费、高速费，价格规则先说清楚，不用低价吸引再临时加价。"
            },
            {
              title: "懂商务",
              body:
                "熟悉中国企业来印尼考察节奏，了解园区、政商拜访、机场接送和报销凭证需求。"
            },
            {
              title: "服务区域",
              body:
                "核心覆盖雅加达、卡拉旺、芝卡朗、德尔塔玛斯、万隆，也可根据行程安排周边跨城用车。"
            }
          ]}
        />
        <FleetImage />
      </section>
      <CTASection />
    </PageShell>
  );
}
