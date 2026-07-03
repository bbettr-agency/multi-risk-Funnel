import Script from "next/script";
import { analyticsConfig } from "@/config/seo-config";

/**
 * Google Tag Manager, loaded once site-wide from the root layout.
 * - <GtmScript /> injects the GTM loader (goes in <head>).
 * - <GtmNoScript /> is the no-JavaScript fallback (goes right after <body>).
 * Both no-op when analyticsConfig.gtmId is empty, so GTM can be toggled off
 * from config without touching the layout.
 */

export function GtmScript() {
  const id = analyticsConfig.gtmId;
  if (!id) return null;

  return (
    <Script id="gtm-loader" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

export function GtmNoScript() {
  const id = analyticsConfig.gtmId;
  if (!id) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
