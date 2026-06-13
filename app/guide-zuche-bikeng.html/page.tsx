import type { Metadata } from "next";
import { GuideArticlePage } from "@/components/GuideArticlePage";
import { guideArticles } from "@/lib/aminContent";

const article = guideArticles.find(
  (item) => item.slug === "guide-zuche-bikeng.html"
)!;

export const metadata: Metadata = {
  title: "中国人在印尼租车避坑指南：6年驻外人的大实话 - 阿敏租车",
  description:
    "在印尼租车最常见的6个坑：隐形加价、自驾风险、机场黑车、郊区叫不到车、司机不懂商务、没有凭证。来印尼前必读。",
  alternates: {
    canonical: "/guide-zuche-bikeng.html"
  }
};

export default function Page() {
  return <GuideArticlePage article={article} />;
}
