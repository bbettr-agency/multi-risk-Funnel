"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { solutions } from "@/config/funnel-config";
import type { CoverTypeId } from "@/config/form-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import { SELECT_COVER_EVENT } from "@/components/funnel/quote-form";

export default function Solutions() {
  const selectCover = (id: string) => {
    window.dispatchEvent(
      new CustomEvent(SELECT_COVER_EVENT, { detail: id as CoverTypeId })
    );
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SectionContainer className="bg-brand-charcoal text-white">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand-primary/20 blur-[120px]" />

      <SectionHeading
        tone="dark"
        align="center"
        eyebrow={solutions.eyebrow}
        title={solutions.title}
        description={solutions.description}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {solutions.cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-accent/40 hover:bg-white/[0.07]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/20 text-brand-accent transition-colors duration-500 group-hover:bg-brand-accent group-hover:text-brand-ink">
              <Icon name={card.icon} className="h-7 w-7" />
            </div>

            <h3 className="font-display text-xl font-bold text-white">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              {card.description}
            </p>

            <ul className="mt-5 grid gap-2">
              {card.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-white/75"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                    strokeWidth={3}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => selectCover(card.id)}
              className="group/btn mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-accent"
            >
              Get a quote for this
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
