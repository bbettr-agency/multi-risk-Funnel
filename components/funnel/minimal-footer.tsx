import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import Logo from "@/components/ui/logo";

export default function MinimalFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink px-6 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-block"
              aria-label={siteConfig.businessName}
            >
              <Logo type="full" variant="white" className="h-28" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <FooterBadge>{siteConfig.fsp}</FooterBadge>
              {siteConfig.memberships.map((m) => (
                <FooterBadge key={m}>Member of {m}</FooterBadge>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={siteConfig.phoneLink}
                  className="inline-flex items-center gap-2.5 transition hover:text-brand-accent"
                >
                  <Phone className="h-4 w-4 text-brand-accent" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailLink}
                  className="inline-flex items-center gap-2.5 transition hover:text-brand-accent"
                >
                  <Mail className="h-4 w-4 text-brand-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                {siteConfig.address}
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-brand-accent" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="/privacy" className="transition hover:text-brand-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/complaints"
                  className="transition hover:text-brand-accent"
                >
                  Complaints Procedure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved. · An Approved Financial Services Provider ({siteConfig.fsp}).
          </p>
          <p>{siteConfig.cornerstones.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
      {children}
    </span>
  );
}
