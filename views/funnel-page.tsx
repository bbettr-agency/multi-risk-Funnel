import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import FunnelHero from "@/components/sections/funnel-hero";
import WhyChoose from "@/components/sections/why-choose";
import Solutions from "@/components/sections/solutions";
import HowItWorks from "@/components/sections/how-it-works";
import GoogleReviews from "@/components/sections/google-reviews";
import FunnelFaq from "@/components/sections/funnel-faq";
import FinalCta from "@/components/sections/final-cta";

export default function FunnelPage() {
  return (
    <>
      <MinimalHeader />
      <main>
        <FunnelHero />
        <WhyChoose />
        <Solutions />
        <HowItWorks />
        <GoogleReviews />
        <FunnelFaq />
        <FinalCta />
      </main>
      <MinimalFooter />
    </>
  );
}
