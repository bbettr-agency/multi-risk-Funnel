"use client";

import { motion } from "framer-motion";

import { claimsPromise } from "@/config/funnel-config";
import SectionContainer from "@/components/layout/section-container";
import Icon from "@/components/ui/icon";

export default function ClaimsPromise() {
  return (
    <SectionContainer className="bg-brand-ink text-white">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-72 w-72 rounded-full bg-brand-accent/10 blur-[130px]" />

      <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        {/* Left — message */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            {claimsPromise.eyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
            {claimsPromise.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
            {claimsPromise.body}
          </p>
          <p className="mt-4 max-w-xl font-display text-lg font-semibold leading-7 text-brand-accent">
            {claimsPromise.emphasis}
          </p>
        </motion.div>

        {/* Right — the three promises */}
        <div className="grid gap-4">
          {claimsPromise.points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                <Icon name={point.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
