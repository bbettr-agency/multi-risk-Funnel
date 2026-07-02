"use client";

import { motion } from "framer-motion";

import { stats, awards } from "@/config/trust-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import Stat from "@/components/ui/stat";

/**
 * One consolidated proof block — replaces the three scattered trust sections
 * on the old funnel. Stats (count-up) + real awards + memberships in one place.
 */
export default function CredibilityBand() {
  return (
    <SectionContainer className="bg-brand-mist text-brand-ink" innerClassName="">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <Stat
            key={s.label}
            value={s.value}
            prefix={s.prefix}
            suffix={s.suffix}
            label={s.label}
            tone="light"
          />
        ))}
      </div>

      {/* Divider */}
      <div className="my-14 h-px bg-brand-ink/10" />

      {/* Awards */}
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            Recognised Excellence
          </div>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
            Award-winning, and here for the long run.
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-ink/65">
            Since {siteConfig.established}, our partnerships and results have
            been recognised by South Africa&apos;s top insurers — a track record
            built on trust, consistency and a deep understanding of our
            clients&apos; needs.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Badge>{siteConfig.fsp}</Badge>
            {siteConfig.memberships.map((m) => (
              <Badge key={m}>Member of {m}</Badge>
            ))}
            <Badge>Countrywide</Badge>
            <Badge>Family-run</Badge>
          </div>
        </div>

        {/* Award list */}
        <div className="grid gap-3 sm:grid-cols-2">
          {awards.map((a, i) => (
            <motion.div
              key={a.title + a.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col rounded-xl border border-brand-ink/[0.07] bg-white p-4 shadow-card"
            >
              <span className="font-display text-2xl font-bold text-brand-primary">
                {a.year}
              </span>
              <span className="mt-1 text-sm font-semibold leading-5 text-brand-ink">
                {a.title}
              </span>
              <span className="mt-0.5 text-xs text-brand-ink/50">
                {a.insurer}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-ink/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-ink/75 shadow-sm">
      {children}
    </span>
  );
}
