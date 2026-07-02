"use client";

import { motion } from "framer-motion";

import { whyMultiRisk } from "@/config/funnel-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";

export default function WhyMultiRisk() {
  return (
    <SectionContainer className="bg-white text-brand-ink">
      <SectionHeading
        tone="light"
        align="center"
        eyebrow={whyMultiRisk.eyebrow}
        title={whyMultiRisk.title}
        description={whyMultiRisk.description}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyMultiRisk.values.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group relative rounded-2xl border border-brand-ink/[0.07] bg-brand-mist p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/25 hover:bg-white hover:shadow-glow"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors duration-500 group-hover:bg-brand-primary group-hover:text-white">
              <Icon name={item.icon} className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-brand-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-brand-ink/65">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
