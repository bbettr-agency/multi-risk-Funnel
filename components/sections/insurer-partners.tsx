import { insurerPartners } from "@/config/trust-config";

/**
 * Thin credibility strip directly under the hero — third-party validation.
 * Renders styled monochrome name badges; swap in official logos via
 * trust-config `logo` paths once supplied by the client.
 */
export default function InsurerPartners() {
  return (
    <section className="border-y border-white/5 bg-brand-charcoal py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
          We place your cover with South Africa&apos;s leading insurers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
          {insurerPartners.map((p) => (
            <span
              key={p.name}
              className="font-display text-lg font-bold tracking-tight text-white/40 grayscale transition hover:text-white/70 md:text-xl"
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
