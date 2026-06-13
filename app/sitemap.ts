import type { MetadataRoute } from "next";
import { guideArticles } from "@/lib/aminContent";
import { articles } from "@/lib/articles";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const legacyRoutes = [
    "/",
    "/business-charter.html",
    "/airport-transfer.html",
    "/fleet-price.html",
    "/guide.html",
    "/about.html",
    "/contact.html",
    ...guideArticles.map((article) => `/${article.slug}`)
  ];

  return [
    ...legacyRoutes.map((route) => ({
      url: route === "/" ? siteUrl : `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: route.includes("guide") ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.85
    })),
    {
      url: `${siteUrl}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
