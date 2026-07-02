// Real client reviews for Multi Risk Brokers.
//
// IMPORTANT: populate `reviews` with the client's REAL Google reviews (name,
// text and rating) before launch, or wire up a live Google Reviews widget via
// `googleProfileUrl`. Do not present fabricated reviews as genuine.
//
// The section renders gracefully whether or not aggregate figures are known.

export const reviewsMeta = {
  // Flip to true and set real figures once confirmed from the Google profile.
  showAggregate: false,
  ratingValue: "4.9",
  reviewCount: "0",
  // Public Google Business profile / reviews link (update to the real one).
  googleProfileUrl: "https://www.google.com/search?q=Multi+Risk+Brokers+Pretoria",
  eyebrow: "In Our Clients' Words",
  title: "Trusted by South Africans who don't leave.",
  description:
    "Real feedback from the families and businesses we look after. (Live reviews to be connected from the Multi Risk Google profile.)",
};

export type Review = {
  name: string;
  location?: string;
  rating: number; // 1–5
  text: string;
  coverType?: string; // e.g. "Commercial client"
};

export const reviews: Review[] = [
  // TODO: Replace these placeholders with the client's real Google reviews.
  // Left empty by default so nothing fabricated is shown.
];
