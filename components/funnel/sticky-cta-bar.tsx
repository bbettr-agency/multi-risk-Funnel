"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";

/**
 * Mobile-only sticky action bar (Call + Get Quote). Appears after the user
 * scrolls past the hero. Research: sticky mobile CTAs materially lift mobile
 * conversion. Hidden on desktop where the form/CTAs are always in view.
 */
export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToForm = () =>
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-ink/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href={siteConfig.phoneLink}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4 text-brand-accent" />
          Call
        </a>
        <button
          type="button"
          onClick={goToForm}
          className="h-12 flex-[1.6] rounded-full bg-brand-accent text-sm font-bold text-brand-ink shadow-accent"
        >
          {siteConfig.cta}
        </button>
      </div>
    </div>
  );
}
