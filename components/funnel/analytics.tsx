"use client";

import Script from "next/script";
import { useEffect } from "react";
import { conversionConfig } from "@/config/seo-config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Loads the Google gtag base once (sitewide). No-op until gtagId is set. */
export function GoogleAdsBase() {
  const { gtagId } = conversionConfig;
  if (!gtagId) return null;

  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}');
        `}
      </Script>
    </>
  );
}

/** Fires the Google Ads conversion on the thank-you page. No-op until configured. */
export function ConversionEvent() {
  const { gtagId, conversionLabel } = conversionConfig;

  useEffect(() => {
    if (!gtagId || !conversionLabel) return;
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "conversion", {
      send_to: `${gtagId}/${conversionLabel}`,
    });
  }, [gtagId, conversionLabel]);

  return null;
}
