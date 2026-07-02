"use client";

import { motion } from "framer-motion";

import { howItWorks } from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";

export default function HowItWorks() {
  return (
    <SectionContainer className="bg-white text-brand-ink">
      <SectionHeading
        tone="light"
        align="center"
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        description={howItWorks.description}
      />

      <div className="relative grid gap-6 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 right-0 top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-brand-primary/25 to-transparent md:block" />

        {howItWorks.steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-60px" }}
            className="relative text-center md:text-left"
          >
            <div className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-brand-primary font-display text-2xl font-bold text-white shadow-glow md:mx-0">
              {step.number}
            </div>
            <h3 className="mt-6 font-display text-lg font-bold text-brand-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-brand-ink/65">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="#quote-form"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
        >
          {siteConfig.cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </SectionContainer>
  );
}
