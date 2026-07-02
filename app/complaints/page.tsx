import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site-config";
import LegalPage from "@/views/legal-page";

export const metadata: Metadata = createMetadata({
  title: "Complaints Procedure",
  description:
    "How to lodge a complaint with Multi Risk Brokers and how we handle it fairly.",
  path: "/complaints",
});

// NOTE: This is a sensible template aligned to FSP / TCF principles. Please have
// your compliance officer confirm the final wording and escalation details.
export default function Page() {
  return (
    <LegalPage
      title="Complaints Procedure"
      intro={`As an approved Financial Services Provider (${siteConfig.fsp}), Multi Risk Brokers is committed to Treating Customers Fairly. If you are unhappy with any aspect of our service, we want to hear from you and put it right.`}
      sections={[
        {
          heading: "How to lodge a complaint",
          body: [
            "Please contact us by phone on " +
              siteConfig.phoneDisplay +
              " or by email at " +
              siteConfig.email +
              ", setting out the details of your complaint.",
            "You may also write to us at " + siteConfig.address + ".",
          ],
        },
        {
          heading: "How we handle your complaint",
          body: [
            "We will acknowledge your complaint promptly, investigate it fairly, and keep you informed of progress until it is resolved.",
            "Every complaint is handled with the same care and dedication we bring to every client relationship.",
          ],
        },
        {
          heading: "Escalation",
          body: [
            "If we are unable to resolve your complaint to your satisfaction, you have the right to refer the matter to the relevant Ombudsman for Short-Term Insurance. We will provide the applicable contact details on request.",
          ],
        },
      ]}
    />
  );
}
