// Config-driven quote form. The form is a short, multi-step qualification:
//   Step 1 — cover type (one tap)
//   Step 2 — (optional) what to cover / current status qualifier
//   Step 3 — contact details
// Submits to /api/quote which forwards to the GHL inbound webhook and the
// client receives the lead by email. On success the user is sent to /thank-you.

export type CoverTypeId = "personal" | "commercial" | "specialised";

export const coverTypes: {
  id: CoverTypeId;
  label: string;
  icon: string;
  blurb: string;
  // Qualifier options shown at step 2 for this cover type (optional, multi-select)
  needs: string[];
}[] = [
  {
    id: "personal",
    label: "Personal",
    icon: "Home",
    blurb: "Home, contents, vehicles & valuables",
    needs: [
      "Home / buildings",
      "Household contents",
      "Vehicle(s)",
      "Valuables & all-risk",
      "Caravan / trailer / watercraft",
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: "Building2",
    blurb: "Cover for your business & assets",
    needs: [
      "Property & contents",
      "Business interruption",
      "Liability",
      "Company vehicles / fleet",
      "Stock & goods in transit",
    ],
  },
  {
    id: "specialised",
    label: "Specialised",
    icon: "Gem",
    blurb: "Complex, high-value & niche risks",
    needs: [
      "Professional indemnity",
      "Directors & officers",
      "Contractors / plant all-risk",
      "Cyber risk",
      "Engineering / marine",
    ],
  },
];

export const formConfig = {
  // "native" = custom multi-step form (recommended). "embed" = GHL iframe.
  mode: "native" as "native" | "embed",

  // Where the native form posts (server route → GHL webhook).
  endpoint: "/api/quote",

  // Fallback GHL iframe embed (used only when mode === "embed")
  embed: {
    formId: "0iEKjjPPh4yEZBG9qs1k",
    src: "https://link.bbettragency.com/widget/form/0iEKjjPPh4yEZBG9qs1k",
    script: "https://link.bbettragency.com/js/form_embed.js",
  },

  // Where to send the visitor after a successful submit (Google Ads conversion).
  successRedirect: "/thank-you",

  headings: {
    default: "Request your free, no-obligation quote",
    subDefault: "Takes about a minute · a dedicated broker will call you back.",
  },

  // Microcopy shown around the form
  reassurance: [
    "No obligation — a quote is just information",
    "We never share or sell your details",
    "A dedicated broker calls you back personally",
  ],

  // Contact fields (step 3). Phone required; email optional (reduces friction).
  fields: {
    nameLabel: "Full name",
    namePlaceholder: "e.g. Johan van der Merwe",
    phoneLabel: "Phone number",
    phonePlaceholder: "072 000 0000",
    emailLabel: "Email (optional)",
    emailPlaceholder: "you@email.com",
    messageLabel: "Anything we should know? (optional)",
    messagePlaceholder: "Tell us briefly what you'd like to cover…",
  },

  submitLabel: "Get My Free Quote",
  submittingLabel: "Sending…",
};
