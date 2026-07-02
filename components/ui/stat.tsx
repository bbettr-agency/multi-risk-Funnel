"use client";

import { useCountUp } from "@/hooks/use-count-up";

type StatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  tone?: "dark" | "light";
};

export default function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
  tone = "dark",
}: StatProps) {
  const { ref, value: current } = useCountUp(value);
  const isDark = tone === "dark";

  return (
    <div className="text-center">
      <div
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          isDark ? "text-brand-accent" : "text-brand-primary"
        }`}
      >
        <span ref={ref}>
          {prefix}
          {value >= 10000 ? current.toLocaleString() : current}
          {suffix}
        </span>
      </div>
      <div
        className={`mt-2 text-xs uppercase tracking-[0.16em] md:text-sm ${
          isDark ? "text-white/55" : "text-brand-ink/55"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
