import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import FunnelPage from "@/views/funnel-page";

export const metadata: Metadata = createMetadata({ path: "/insurance" });

export default function Home() {
  return <FunnelPage />;
}
