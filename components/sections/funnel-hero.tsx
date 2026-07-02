"use client";

import { motion } from "framer-motion";
import { Check, Phone, Star } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroContent } from "@/config/funnel-config";
import FormPanel from "@/components/funnel/form-panel";

export default function FunnelHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-ink text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-charcoal to-brand-ink" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 78%)",
        }}
      />

      <div className="pointer-events-none absolute -top-32 right-1/3 h-[480px] w-[480px] rounded-full bg-brand-primary/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-brand-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-32">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-accent backdrop-blur">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(201,162,75,0.9)]" />
            {heroContent.eyebrow}
          </div>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {heroContent.headline}{" "}
            <span className="bg-gradient-to-r from-brand-accent to-brand-accentDark bg-clip-text text-transparent">
              {heroContent.headlineAccent}
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
            {heroContent.subheadline}
          </p>

          {/* Trust points */}
          <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
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

          {/* Call button + rating */}
          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href={siteConfig.phoneLink}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-accent px-7 py-4 text-base font-bold text-brand-ink shadow-accent transition-all duration-300 hover:bg-white"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phoneDisplay}
            </a>
            <div className="flex items-center gap-2.5 text-sm text-white/65">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>
              <span className="font-medium text-white/80">
                {heroContent.ratingLabel}
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          id="quote-form"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="scroll-mt-24"
        >
          <FormPanel instanceId="hero" />
        </motion.div>
      </div>
    </section>
  );
}
