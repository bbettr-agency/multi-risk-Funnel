"use client";

import Button from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { scrollToQuoteForm } from "@/lib/scroll-to-form";

type QuoteCTAProps = {
  /** Configurable button text (defaults to the site CTA). */
  label?: string;
  variant?: "primary" | "gold" | "secondary" | "ghost" | "outline";
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
};

/**
 * Reusable "Get a Free Quote" CTA. Instead of navigating anywhere, it smoothly
 * scrolls to the enquiry form (#quote-form) and moves focus there. Works on
 * desktop and mobile; styling inherits the shared Button component.
 */
export default function QuoteCTA({
  label = siteConfig.cta,
  variant = "gold",
  size = "lg",
  withArrow = true,
  className,
}: QuoteCTAProps) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      withArrow={withArrow}
      className={className}
      onClick={scrollToQuoteForm}
      ariaLabel={label}
    >
      {label}
    </Button>
  );
}
