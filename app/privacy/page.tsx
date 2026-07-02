import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site-config";
import LegalPage from "@/views/legal-page";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Multi Risk Brokers collects, uses and protects your personal information in line with POPIA.",
  path: "/privacy",
});

// NOTE: This is a sensible template. Please have your compliance officer confirm
// the final wording before launch.
export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`Multi Risk Brokers (${siteConfig.fsp}) respects your privacy and is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA).`}
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you request a quote, we collect the details you provide — such as your name, contact number, email address and the type of cover you are interested in.",
            "We only collect information that is necessary to provide you with insurance advice and a quotation.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "Your information is used solely to contact you about your quote request, to arrange and service insurance cover, and to comply with our regulatory obligations as a Financial Services Provider.",
            "We do not sell your personal information, and we do not share it with third parties except the insurers and underwriters necessary to arrange your cover.",
          ],
        },
        {
          heading: "Keeping your information secure",
          body: [
            "We take reasonable measures to protect your personal information against loss, unauthorised access and misuse.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information at any time by contacting us at " +
              siteConfig.email +
              " or " +
              siteConfig.phoneDisplay +
              ".",
          ],
        },
      ]}
    />
  );
}
