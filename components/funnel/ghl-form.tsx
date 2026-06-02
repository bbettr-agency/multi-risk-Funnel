"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site-config";

/**
 * GoHighLevel inline form embed (provided by Bbettr).
 *
 * The same form can appear more than once on the page (hero + final CTA), so
 * each instance gets a unique DOM id while sharing the same data-form-id. The
 * GHL form_embed.js script is loaded once (keyed by its fixed id) and handles
 * auto-height resizing and the post-submit redirect to /thank-you (configured
 * inside GoHighLevel itself).
 */
export default function GhlForm({ instanceId }: { instanceId: string }) {
  const domId = `inline-${siteConfig.formId}-${instanceId}`;

  return (
    <>
      <iframe
        src={siteConfig.formSrc}
        id={domId}
        title="Request an insurance quote — Multi Risk Brokers"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "560px",
          border: "none",
          borderRadius: "16px",
          display: "block",
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us funnel"
        data-height="492"
        data-layout-iframe-id={domId}
        data-form-id={siteConfig.formId}
      />
      <Script
        id="ghl-form-embed"
        src={siteConfig.formScript}
        strategy="afterInteractive"
      />
    </>
  );
}
