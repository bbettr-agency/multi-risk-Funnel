import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]",
            isDark
              ? "border-brand-accent/30 bg-brand-accent/10 text-brand-accent"
              : "border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 md:text-lg",
            align === "center" && "mx-auto",
            isDark ? "text-white/65" : "text-brand-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
