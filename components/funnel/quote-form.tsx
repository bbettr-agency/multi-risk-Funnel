"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { coverTypes, formConfig, type CoverTypeId } from "@/config/form-config";
import { siteConfig } from "@/config/site-config";
import CoverTypeSelector from "@/components/funnel/cover-type-selector";
import { cn } from "@/utils/cn";

// Cards elsewhere on the page dispatch this to pre-select a cover type.
export const SELECT_COVER_EVENT = "mrb:selectCover";

type Props = { compact?: boolean };

export default function QuoteForm({ compact = false }: Props) {
  const [step, setStep] = useState(0); // 0=cover, 1=needs, 2=contact
  const [coverType, setCoverType] = useState<CoverTypeId | "">("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const activeType = useMemo(
    () => coverTypes.find((t) => t.id === coverType),
    [coverType]
  );

  // Deep-link from solution cards → pre-select + jump to needs step.
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail as CoverTypeId;
      if (coverTypes.some((t) => t.id === id)) {
        setCoverType(id);
        setNeeds([]);
        setStep(1);
      }
    };
    window.addEventListener(SELECT_COVER_EVENT, handler);
    return () => window.removeEventListener(SELECT_COVER_EVENT, handler);
  }, []);

  const chooseCover = (id: CoverTypeId) => {
    setCoverType(id);
    setNeeds([]);
    setStep(1);
  };

  const toggleNeed = (need: string) =>
    setNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2) return setError("Please enter your full name.");
    if (digits.length < 9) return setError("Please enter a valid phone number.");
    if (!email.trim()) return setError("Please enter your email address.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError("Please enter a valid email address.");

    setSubmitting(true);
    try {
      const params =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search)
          : null;
      const source =
        params?.get("utm_source") ||
        params?.get("gclid") ||
        (typeof document !== "undefined" && document.referrer) ||
        "Multi Risk funnel";

      const res = await fetch(formConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          coverType,
          needs,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          message: message.trim(),
          source,
          pageUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please call us.");
      }

      // Full navigation so the /thank-you page + Google Ads conversion fire cleanly.
      window.location.assign(formConfig.successRedirect);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please call us."
      );
      setSubmitting(false);
    }
  }

  const totalSteps = 3;

  return (
    <div>
      {/* Progress */}
      <div className="mb-6 flex items-center gap-2" aria-hidden>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors duration-500",
              i <= step ? "bg-brand-primary" : "bg-brand-ink/10"
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1 — cover type */}
        {step === 0 && (
          <motion.div
            key="step-cover"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-4 font-display text-lg font-bold text-brand-ink">
              What do you need cover for?
            </p>
            <CoverTypeSelector value={coverType} onSelect={chooseCover} />
          </motion.div>
        )}

        {/* STEP 2 — needs (optional) */}
        {step === 1 && (
          <motion.div
            key="step-needs"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-1 font-display text-lg font-bold text-brand-ink">
              What would you like to cover?
            </p>
            <p className="mb-4 text-sm text-brand-ink/55">
              Optional — select any that apply.
            </p>
            <div className="flex flex-wrap gap-2">
              {(activeType?.needs ?? []).map((need) => {
                const active = needs.includes(need);
                return (
                  <button
                    key={need}
                    type="button"
                    onClick={() => toggleNeed(need)}
                    aria-pressed={active}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                      active
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-brand-ink/15 bg-white text-brand-ink/75 hover:border-brand-primary/40"
                    )}
                  >
                    {active && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                    {need}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-brand-ink/60 transition hover:text-brand-ink"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="group ml-auto inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:bg-brand-primaryDark"
              >
                Continue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3 — contact */}
        {step === 2 && (
          <motion.form
            key="step-contact"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-4 font-display text-lg font-bold text-brand-ink">
              Where can a broker reach you?
            </p>

            <div className="grid gap-3">
              <Field
                label={formConfig.fields.nameLabel}
                value={name}
                onChange={setName}
                placeholder={formConfig.fields.namePlaceholder}
                autoComplete="name"
                required
              />
              <Field
                label={formConfig.fields.phoneLabel}
                value={phone}
                onChange={setPhone}
                placeholder={formConfig.fields.phonePlaceholder}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
              />
              <Field
                label={formConfig.fields.emailLabel}
                value={email}
                onChange={setEmail}
                placeholder={formConfig.fields.emailPlaceholder}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
              />
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-brand-ink/80">
                  {formConfig.fields.messageLabel}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={formConfig.fields.messagePlaceholder}
                  rows={2}
                  className="w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                />
              </div>
            </div>

            {error && (
              <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={submitting}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-brand-ink/60 transition hover:text-brand-ink disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="group ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-4 text-sm font-bold text-brand-ink shadow-accent transition-all hover:bg-brand-accentDark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {formConfig.submittingLabel}
                  </>
                ) : (
                  <>
                    {formConfig.submitLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Prefer to talk */}
      {!compact && (
        <div className="mt-6 flex items-center justify-center gap-2 border-t border-brand-ink/10 pt-5 text-sm text-brand-ink/60">
          Prefer to talk?
          <a
            href={siteConfig.phoneLink}
            className="inline-flex items-center gap-1.5 font-bold text-brand-primary transition hover:text-brand-primaryDark"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
  autoComplete,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-brand-ink/80">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <input
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
      />
    </div>
  );
}
