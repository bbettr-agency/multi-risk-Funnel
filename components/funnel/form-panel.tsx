import { ShieldCheck, Lock } from "lucide-react";
import GhlForm from "@/components/funnel/ghl-form";

type FormPanelProps = {
  instanceId: string;
  heading?: string;
  subheading?: string;
};

export default function FormPanel({
  instanceId,
  heading = "Request Your Free Quote",
  subheading = "Takes under a minute — no obligation.",
}: FormPanelProps) {
  return (
    <div className="relative">
      {/* Soft glow behind the card */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-accent/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white p-2 shadow-ink">
        <div className="rounded-[1.4rem] bg-white px-5 pb-4 pt-6 sm:px-7">
          <div className="mb-4 flex items-start justify-between gap-4 border-b border-brand-ink/10 pb-5">
            <div>
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
                <ShieldCheck className="h-3 w-3" />
                Approved FSP
              </div>
              <h3 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                {heading}
              </h3>
              <p className="mt-1 text-sm text-brand-ink/60">{subheading}</p>
            </div>
          </div>

          <GhlForm instanceId={instanceId} />

          <div className="mt-2 flex items-center justify-center gap-1.5 pb-1 text-[11px] text-brand-ink/45">
            <Lock className="h-3 w-3" />
            Your details are kept private and secure.
          </div>
        </div>
      </div>
    </div>
  );
}
