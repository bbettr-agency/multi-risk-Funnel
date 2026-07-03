/**
 * Smoothly scroll the visitor to the enquiry form and move focus to its first
 * control for accessibility. Respects prefers-reduced-motion. Shared by every
 * "Get a Free Quote" CTA and the floating contact button.
 */
export function scrollToQuoteForm() {
  if (typeof document === "undefined") return;

  const el = document.getElementById("quote-form");
  if (!el) return;

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  // Move focus after the smooth scroll starts; preventScroll avoids a second jump.
  const focusable = el.querySelector<HTMLElement>(
    "input, button, textarea, select, [tabindex]"
  );
  if (focusable) {
    window.setTimeout(
      () => focusable.focus({ preventScroll: true }),
      reduce ? 0 : 350
    );
  }
}
