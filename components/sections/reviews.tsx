"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";

import { reviews, reviewsMeta } from "@/config/reviews-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import StarRating from "@/components/ui/star-rating";

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.5 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24z" />
      <path fill="#FBBC05" d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.6.4-2.4V6.5H1.4C.5 8.2 0 10 0 12s.5 3.8 1.4 5.5l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8z" />
    </svg>
  );
}

export default function Reviews() {
  const hasReviews = reviews.length > 0;

  return (
    <SectionContainer className="bg-brand-mist text-brand-ink">
      <SectionHeading
        tone="light"
        align="center"
        eyebrow={reviewsMeta.eyebrow}
        title={reviewsMeta.title}
        description={reviewsMeta.description}
      />

      {/* Google badge */}
      <div className="mx-auto mb-12 flex max-w-md flex-col items-center gap-4 rounded-2xl border border-brand-ink/[0.07] bg-white px-8 py-7 text-center shadow-card">
        <div className="flex items-center gap-3">
          <GoogleGlyph className="h-7 w-7" />
          <span className="font-display text-lg font-bold text-brand-ink">
            Google Reviews
          </span>
        </div>
        {reviewsMeta.showAggregate && (
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-brand-primary">
              {reviewsMeta.ratingValue}
            </span>
            <div className="text-left">
              <StarRating rating={Number(reviewsMeta.ratingValue)} />
              <div className="text-xs text-brand-ink/55">
                {reviewsMeta.reviewCount} verified reviews
              </div>
            </div>
          </div>
        )}
        <a
          href={reviewsMeta.googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition hover:text-brand-primaryDark"
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
              className="flex flex-col rounded-2xl border border-brand-ink/[0.07] bg-white p-7 shadow-card"
            >
              <Quote className="h-7 w-7 text-brand-accent/50" />
              <p className="mt-4 flex-1 text-sm leading-7 text-brand-ink/75">
                {review.text}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-brand-ink/10 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary font-display text-sm font-bold text-white">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">
                    {review.name}
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
