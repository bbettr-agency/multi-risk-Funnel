"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CheckCircle2, Phone, UserCheck, Clock } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import { ConversionEvent } from "@/components/funnel/analytics";

const statusPoints = [
  {
    icon: CheckCircle2,
    title: "Request Received",
    description: "Your quote request has been submitted successfully.",
  },
  {
    icon: UserCheck,
    title: "Broker Assigned",
    description: "A dedicated Multi Risk broker will review your needs.",
  },
  {
    icon: Clock,
    title: "We Will Contact You Soon",
    description: "Expect to hear from us shortly with your tailored options.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <ConversionEvent />
      <MinimalHeader />
      <main className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-ink px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-ink to-brand-charcoal" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-primary/20 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-brand-accent text-brand-ink shadow-accent"
          >
            <BadgeCheck className="h-11 w-11" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl"
          >
            Thank You For Requesting A Quote
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70 md:text-lg"
          >
            A dedicated Multi Risk broker will review your request and call you
            back shortly.
          </motion.p>

          {/* Status points */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
          >
            {statusPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-sm font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-white/55">
                  {point.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={siteConfig.phoneLink}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-ink shadow-accent transition-all duration-300 hover:bg-white"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-accent/60 hover:bg-white/10"
            >
              Return To Website
            </a>
          </motion.div>
        </div>
      </main>
      <MinimalFooter />
    </>
  );
}
