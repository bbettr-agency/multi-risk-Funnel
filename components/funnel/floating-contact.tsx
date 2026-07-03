"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";
import { scrollToQuoteForm } from "@/lib/scroll-to-form";

/**
 * Floating contact buttons, fixed to the bottom-right on DESKTOP only.
 * (Mobile is handled by the full-width sticky-cta-bar.) Appears after the user
 * scrolls past the hero, with a subtle entrance animation. Fixed positioning
 * means it never affects layout / causes CLS.
 */
export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={
        visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }
      }
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex"
      aria-hidden={!visible}
    >
      {/* Phone */}
      <a
        href={siteConfig.phoneLink}
        aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
        className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-brand-ink/90 px-5 py-3.5 text-sm font-bold text-white shadow-ink backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/60 hover:bg-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
      >
        <Phone className="h-4 w-4 text-brand-accent transition-transform duration-300 group-hover:scale-110" />
        {siteConfig.phoneDisplay}
      </a>

      {/* Get a free quote */}
      <button
        type="button"
        onClick={scrollToQuoteForm}
        aria-label={siteConfig.cta}
        className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-bold text-brand-ink shadow-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accentDark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
      >
        {siteConfig.cta}
      </button>
    </motion.div>
  );
}
