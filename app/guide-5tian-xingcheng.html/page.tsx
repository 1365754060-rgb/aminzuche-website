import type { Metadata } from "next";
import { GuideArticlePage } from "@/components/GuideArticlePage";
import { guideArticles } from "@/lib/aminContent";

const article = guideArticles.find(
  (item) => item.slug === "guide-5tian-xingcheng.html"
)!;

export const metadata: Metadata = {
  title: "中国企业印尼考察5天标准行程模板（含交通安排） - 阿敏租车",
  description:
    "被数十个考察团验证过的印尼考察5天行程：政商拜访、工业园区、同行交流怎么排，交通预算多少。",
  alternates: {
    canonical: "/guide-5tian-xingcheng.html"
  }
};

export default function Page() {
  return <GuideArticlePage article={article} />;
}
