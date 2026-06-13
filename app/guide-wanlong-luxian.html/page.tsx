import type { Metadata } from "next";
import { GuideArticlePage } from "@/components/GuideArticlePage";
import { guideArticles } from "@/lib/aminContent";

const article = guideArticles.find(
  (item) => item.slug === "guide-wanlong-luxian.html"
)!;

export const metadata: Metadata = {
  title: "印尼制造业考察怎么走？雅加达-卡拉旺-万隆经典路线全解 - 阿敏租车",
  description:
    "印尼制造业考察经典路线详解：雅加达政商资源、卡拉旺/芝卡朗工业园区、万隆轻工腹地，行程节奏与用车方案。",
  alternates: {
    canonical: "/guide-wanlong-luxian.html"
  }
};

export default function Page() {
  return <GuideArticlePage article={article} />;
}
