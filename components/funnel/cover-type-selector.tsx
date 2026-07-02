"use client";

import { coverTypes, type CoverTypeId } from "@/config/form-config";
import Icon from "@/components/ui/icon";
import { cn } from "@/utils/cn";

type CoverTypeSelectorProps = {
  value: CoverTypeId | "";
  onSelect: (id: CoverTypeId) => void;
};

/** Step-1 qualification chips — one tap to choose a cover type. Reusable. */
export default function CoverTypeSelector({
  value,
  onSelect,
}: CoverTypeSelectorProps) {
  return (
    <div className="grid gap-3">
      {coverTypes.map((type) => {
        const active = value === type.id;
        return (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelect(type.id)}
            aria-pressed={active}
            className={cn(
              "group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
              active
                ? "border-brand-primary bg-brand-primary/[0.06] shadow-glow"
                : "border-brand-ink/10 bg-white hover:border-brand-primary/40 hover:bg-brand-primary/[0.03]"
            )}
          >
            <span
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                active
                  ? "bg-brand-primary text-white"
                  : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
              )}
            >
              <Icon name={type.icon} className="h-6 w-6" />
            </span>
            <span className="flex-1">
              <span className="block font-display text-base font-bold text-brand-ink">
                {type.label}
              </span>
              <span className="block text-sm text-brand-ink/55">
                {type.blurb}
              </span>
            </span>
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                active
                  ? "border-brand-primary bg-brand-primary"
                  : "border-brand-ink/20"
              )}
            >
              {active && <span className="h-2 w-2 rounded-full bg-white" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}
