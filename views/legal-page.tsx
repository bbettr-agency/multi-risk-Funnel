import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <MinimalHeader />
      <main className="bg-brand-mist">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-7 text-brand-ink/70">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-xl font-bold text-brand-ink">
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-sm leading-7 text-brand-ink/70">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <a
            href="/"
            className="mt-14 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primaryDark"
          >
            ← Back to Multi Risk Brokers
          </a>
        </div>
      </main>
      <MinimalFooter />
    </>
  );
}
