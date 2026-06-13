import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import {
  googleSiteVerification,
  siteName,
  siteUrl
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "雅加达租车_印尼商务考察包车_机场接送 - 阿敏租车",
  description:
    "阿敏租车是雅加达中文用车团队，创始团队驻印尼6年。提供印尼商务考察包车、机场接送、定制游玩行程，中文司机服务，全包价无隐形消费。",
  verification: {
    google: googleSiteVerification
  },
  openGraph: {
    title: "雅加达租车_印尼商务考察包车_机场接送",
    description:
      "雅加达中资租车团队，提供商务考察包车、机场接送、长期月租和中文司机服务。",
    type: "website",
    locale: "zh_CN",
    siteName,
    url: siteUrl,
    images: [
      {
        url: "/hero-car-service.png",
        width: 1200,
        height: 750,
        alt: "阿敏租车雅加达商务用车服务"
      }
    ]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
