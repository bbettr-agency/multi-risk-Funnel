"use client";

import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroContent, finalCta } from "@/config/funnel-config";
import FormPanel from "@/components/funnel/form-panel";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white md:py-28 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-ink to-brand-charcoal" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-brand-accent/10 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            {finalCta.eyebrow}
          </div>

          <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
            {finalCta.title}
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/70 md:text-lg">
            {finalCta.description}
          </p>

          <ul className="mt-7 grid max-w-md gap-3 sm:grid-cols-2">
            {heroContent.trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-6 text-white/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={siteConfig.phoneLink}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-accent/60 hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-brand-accent" />
              Prefer to talk? {siteConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="scroll-mt-24"
        >
          <FormPanel
            instanceId="final"
            heading="Start your free quote"
            subheading="One short form. Tailored cover. No obligation."
          />
        </motion.div>
      </div>
    </section>
  );
}
