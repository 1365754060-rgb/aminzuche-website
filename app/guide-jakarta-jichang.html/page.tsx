import type { Metadata } from "next";
import { GuideArticlePage } from "@/components/GuideArticlePage";
import { guideArticles } from "@/lib/aminContent";

const article = guideArticles.find(
  (item) => item.slug === "guide-jakarta-jichang.html"
)!;

export const metadata: Metadata = {
  title: "雅加达机场到市区怎么走？驻印尼6年老司机告诉你 - 阿敏租车",
  description:
    "雅加达苏加诺-哈达机场到市区的全部方式对比：机场快线、Grab、蓝鸟出租车、中文包车接机，价格与避坑提醒。",
  alternates: {
    canonical: "/guide-jakarta-jichang.html"
  }
};

export default function Page() {
  return <GuideArticlePage article={article} />;
}
