import type { Metadata } from "next";
import { GuideArticlePage } from "@/components/GuideArticlePage";
import { guideArticles } from "@/lib/aminContent";

const article = guideArticles.find(
  (item) => item.slug === "guide-kaocha-jiaotong.html"
)!;

export const metadata: Metadata = {
  title: "2026中国企业印尼商务考察攻略：交通用车全解析 - 阿敏租车",
  description:
    "驻印尼6年的一线经验亲述：印尼商务考察能不能自己打车、包车一天多少钱、司机怎么选、行程怎么排最高效。",
  alternates: {
    canonical: "/guide-kaocha-jiaotong.html"
  }
};

export default function Page() {
  return <GuideArticlePage article={article} />;
}
