import { Suspense } from "react";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { baiduTongjiId, gaMeasurementId } from "@/lib/site";

export function AnalyticsScripts() {
  if (!baiduTongjiId && !gaMeasurementId) {
    return null;
  }

  return (
    <>
      {gaMeasurementId ? (
        <Suspense fallback={null}>
          <GoogleAnalytics measurementId={gaMeasurementId} />
        </Suspense>
      ) : null}
      {baiduTongjiId ? (
        <Script
          id="baidu-tongji"
          src={`https://hm.baidu.com/hm.js?${baiduTongjiId}`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
