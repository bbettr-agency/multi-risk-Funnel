import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ThankYouPage from "@/views/thank-you-page";

export const metadata: Metadata = createMetadata({
  title: "Thank You",
  description:
    "Thank you for requesting a quote from Multi Risk Brokers. A consultant will review your request and contact you shortly.",
  path: "/thank-you",
  noindex: true,
});

export default function Page() {
  return <ThankYouPage />;
}
