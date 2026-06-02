"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { solutions } from "@/config/funnel-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";

export default function Solutions() {
  return (
    <SectionContainer className="bg-brand-ink text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand-primary/20 blur-[120px]" />

      <SectionHeading
        tone="dark"
        align="center"
        eyebrow="Insurance Solutions"
        title={
          <>
            Cover for everything
            <br className="hidden sm:block" /> that matters to you.
          </>
        }
        description="Whatever you need to protect, there's a tailored solution — and a single quick form to get yours."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((item, index) => (
          <motion.a
            key={item.title}
            href="#quote-form"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-accent/40 hover:bg-white/[0.07]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/20 text-brand-accent transition-colors duration-500 group-hover:bg-brand-accent group-hover:text-brand-ink">
              <Icon name={item.icon} className="h-7 w-7" />
            </div>

            <h3 className="font-display text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-white/65">
              {item.description}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>
        ))}
      </div>
    </SectionContainer>
  );
}
