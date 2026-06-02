import { Mail, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export default function MinimalFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink px-6 py-12 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <a href="#top" className="flex items-center gap-2.5" aria-label={siteConfig.businessName}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary text-white">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Multi Risk <span className="text-brand-accent">Brokers</span>
          </span>
        </a>

        <p className="max-w-xl text-sm leading-7 text-white/55">
          Approved Financial Services Provider delivering domestic, commercial
          and specialised insurance solutions across {siteConfig.city} and{" "}
          {siteConfig.country}.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <a
            href={siteConfig.phoneLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand-accent"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.emailLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand-accent"
          >
            <Mail className="h-4 w-4 text-brand-accent" />
            {siteConfig.email}
          </a>
        </div>

        <div className="mt-2 w-full border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights
          reserved. · An Approved Financial Services Provider.
        </div>
      </div>
    </footer>
  );
}
