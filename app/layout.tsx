import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aminzuche.com"),
  title: "印尼租车｜雅加达｜巴厘岛｜中文司机｜Amin Zuche",
  description:
    "Amin Zuche 为中国游客、商务考察、驻外人员提供印尼包车、机场接送、雅加达租车、巴厘岛包车和中文司机商务用车服务。",
  openGraph: {
    title: "印尼租车｜雅加达｜巴厘岛｜中文司机",
    description:
      "面向中国游客、商务考察和驻外人员的印尼包车、机场接送与商务用车服务。",
    type: "website",
    locale: "zh_CN",
    siteName: "Amin Zuche",
    images: [
      {
        url: "/hero-car-service.png",
        width: 1200,
        height: 750,
        alt: "印尼高端商务租车服务"
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
      <body>{children}</body>
    </html>
  );
}
