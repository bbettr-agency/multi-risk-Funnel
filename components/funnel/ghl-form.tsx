"use client";

import Script from "next/script";
import { formConfig } from "@/config/form-config";

/**
 * GoHighLevel inline form embed — fallback used only when
 * form-config `mode === "embed"`. The native <QuoteForm> is the default.
 */
export default function GhlForm({ instanceId }: { instanceId: string }) {
  const { embed } = formConfig;
  const domId = `inline-${embed.formId}-${instanceId}`;

  return (
    <>
      <iframe
        src={embed.src}
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
        data-form-id={embed.formId}
      />
      <Script id="ghl-form-embed" src={embed.script} strategy="afterInteractive" />
    </>
  );
}
