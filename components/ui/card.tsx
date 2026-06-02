import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "dark" | "light" | "glass";
};

const tones = {
  dark: "bg-brand-graphite border border-white/5 text-white",
  light:
    "bg-white border border-brand-ink/[0.06] text-brand-ink shadow-card",
  glass: "bg-white/[0.04] border border-white/10 backdrop-blur-xl text-white",
};

export default function Card({
  children,
  className,
  interactive = true,
  tone = "light",
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-7 transition-all duration-500 md:p-8",
        tones[tone],
        interactive &&
          "hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
