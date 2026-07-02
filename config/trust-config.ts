// Consolidated trust & credibility content (the single source for proof).
// All figures are grounded in the official company brochure (FSP 6280).

export const stats = [
  { value: 1997, prefix: "Since ", suffix: "", label: "Family-run brokerage" },
  { value: 29, prefix: "", suffix: "+", label: "Years protecting clients" },
  { value: 7, prefix: "", suffix: "", label: "Industry awards" },
  { value: 100, prefix: "", suffix: "%", label: "Independent advice" },
];

// Real, verifiable insurer relationships (from the brochure & award record).
// NOTE: replace `logo` paths with official partner logos once supplied by the
// client. Until then the UI renders styled monochrome name badges.
export const insurerPartners = [
  { name: "Santam", logo: "" },
  { name: "Old Mutual Insure", logo: "" }, // formerly Mutual & Federal
  { name: "King Price", logo: "" },
  { name: "Bryte", logo: "" },
  { name: "Hollard", logo: "" },
];

// Real awards from the brochure (name · insurer · year). Kept factual.
export const awards = [
  {
    title: "Sustainable Profitable Growth & Loyalty",
    insurer: "Santam",
    year: "2003",
  },
  {
    title: "Merit Award — Profitability (3-year period)",
    insurer: "Mutual & Federal",
    year: "2008",
  },
  {
    title: "Silver Award — Exceptional Achievement",
    insurer: "Santam",
    year: "2011",
  },
  {
    title: "Golden Award — Exceptional Achievement",
    insurer: "Santam",
    year: "2018",
  },
  {
    title: "Bronze Award — Exceptional Achievement",
    insurer: "Santam",
    year: "2019",
  },
  {
    title: "Golden Crown — Business Sales",
    insurer: "King Price",
    year: "2022",
  },
];

// Small reusable trust badges surfaced near the form / header / footer.
export const trustBadges = [
  { icon: "ShieldCheck", label: "Approved FSP 6280" },
  { icon: "Award", label: "Award-winning brokerage" },
  { icon: "Users", label: "Family-run since 1997" },
  { icon: "HeartHandshake", label: "Dedicated claims team" },
];
