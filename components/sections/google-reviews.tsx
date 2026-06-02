"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, Star } from "lucide-react";

import { reviews, reviewsMeta } from "@/config/funnel-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.5 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.6.4-2.4V6.5H1.4C.5 8.2 0 10 0 12s.5 3.8 1.4 5.5l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8z"
      />
    </svg>
  );
}

export default function GoogleReviews() {
  const hasReviews = reviews.length > 0;

  return (
    <SectionContainer className="bg-brand-charcoal text-white">
      <div className="pointer-events-none absolute -top-16 left-1/4 h-64 w-64 rounded-full bg-brand-accent/10 blur-[120px]" />

      <SectionHeading
        tone="dark"
        align="center"
        eyebrow="Google Reviews"
        title={
          <>
            What our clients
            <br className="hidden sm:block" /> say about us.
          </>
        }
      />

      {/* Google rating badge */}
      <div className="mx-auto mb-12 flex max-w-md flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-7 text-center backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <GoogleGlyph className="h-7 w-7" />
          <span className="font-display text-lg font-bold text-white">
            Google Reviews
          </span>
        </div>
        {reviewsMeta.showAggregate && (
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-brand-accent">
              {reviewsMeta.ratingValue}
            </span>
            <div className="text-left">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>
              <div className="text-xs text-white/55">
                {reviewsMeta.reviewCount} verified reviews
              </div>
            </div>
          </div>
        )}
        <a
          href={reviewsMeta.googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition hover:text-white"
        >
          Read our reviews on Google
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {hasReviews && (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
            >
              <Quote className="h-7 w-7 text-brand-accent/40" />
              <p className="mt-4 flex-1 text-sm leading-7 text-white/75">
                {review.text}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary font-display text-sm font-bold text-white">
                  {review.initial}
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-brand-accent text-brand-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
