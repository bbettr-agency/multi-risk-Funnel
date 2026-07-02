import { Check, Lock, ShieldCheck } from "lucide-react";

import { formConfig } from "@/config/form-config";
import QuoteForm from "@/components/funnel/quote-form";
import GhlForm from "@/components/funnel/ghl-form";

type FormPanelProps = {
  instanceId: string;
  heading?: string;
  subheading?: string;
};

/** Premium white card wrapping the quote form + trust framing. */
export default function FormPanel({
  instanceId,
  heading = formConfig.headings.default,
  subheading = formConfig.headings.subDefault,
}: FormPanelProps) {
  return (
    <div className="relative">
      {/* Soft glow behind the card */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-accent/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white p-2 shadow-ink">
        <div className="rounded-[1.4rem] bg-white px-5 pb-5 pt-6 sm:px-7">
          {/* Header */}
          <div className="mb-5 border-b border-brand-ink/10 pb-5">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
              <ShieldCheck className="h-3 w-3" />
              Approved FSP 6280
            </div>
            <h3 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
              {heading}
            </h3>
            <p className="mt-1 text-sm text-brand-ink/60">{subheading}</p>
          </div>

          {formConfig.mode === "native" ? (
            <QuoteForm />
          ) : (
            <GhlForm instanceId={instanceId} />
          )}

          {/* Reassurance */}
          <ul className="mt-5 grid gap-1.5">
            {formConfig.reassurance.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-brand-ink/55"
              >
                <Check
                  className="h-3.5 w-3.5 shrink-0 text-brand-primary"
                  strokeWidth={3}
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-brand-ink/40">
            <Lock className="h-3 w-3" />
            Your details are kept private and secure.
          </div>
        </div>
      </div>
    </div>
  );
}
