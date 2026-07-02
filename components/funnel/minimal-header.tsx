"use client";

import { Phone, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";
import { cn } from "@/utils/cn";

export default function MinimalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-white/10 bg-brand-ink/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8",
          isScrolled ? "py-3" : "py-4"
        )}
      >
        {/* Brand lockup — no nav links, keeps focus on the form */}
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={siteConfig.businessName}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary text-white shadow-glow">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-bold tracking-tight text-white sm:text-lg">
              Multi Risk <span className="text-brand-accent">Brokers</span>
            </span>
            <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:block">
              {siteConfig.fsp} · Since {siteConfig.established}
            </span>
          </span>
        </a>

        <a
          href={siteConfig.phoneLink}
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:border-brand-accent/60 hover:bg-white/10"
        >
          <Phone className="h-4 w-4 text-brand-accent" />
          <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
