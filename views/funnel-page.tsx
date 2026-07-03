import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import StickyCtaBar from "@/components/funnel/sticky-cta-bar";
import FloatingContact from "@/components/funnel/floating-contact";
import FunnelHero from "@/components/sections/funnel-hero";
import InsurerPartners from "@/components/sections/insurer-partners";
import CredibilityBand from "@/components/sections/credibility-band";
import WhyMultiRisk from "@/components/sections/why-multirisk";
import Solutions from "@/components/sections/solutions";
import ClaimsPromise from "@/components/sections/claims-promise";
import Reviews from "@/components/sections/reviews";
import HowItWorks from "@/components/sections/how-it-works";
import FunnelFaq from "@/components/sections/funnel-faq";
import FinalCta from "@/components/sections/final-cta";

export default function FunnelPage() {
  return (
    <>
      <MinimalHeader />
      <main>
        <FunnelHero />
        <InsurerPartners />
        <CredibilityBand />
        <WhyMultiRisk />
        <Solutions />
        <ClaimsPromise />
        <Reviews />
        <HowItWorks />
        <FunnelFaq />
        <FinalCta />
      </main>
      <MinimalFooter />
      <StickyCtaBar />
      <FloatingContact />
    </>
  );
}
