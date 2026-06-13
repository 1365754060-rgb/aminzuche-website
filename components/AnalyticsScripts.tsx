import Script from "next/script";
import { baiduTongjiId } from "@/lib/site";

export function AnalyticsScripts() {
  if (!baiduTongjiId) {
    return null;
  }

  return (
    <Script
      id="baidu-tongji"
      src={`https://hm.baidu.com/hm.js?${baiduTongjiId}`}
      strategy="afterInteractive"
    />
  );
}
