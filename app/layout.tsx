import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site-config";
import { seoConfig } from "@/config/seo-config";
import { faqs } from "@/config/funnel-config";
import { GoogleAdsBase } from "@/components/funnel/analytics";
import { GtmScript, GtmNoScript } from "@/components/analytics/gtm";
import { Analytics } from "@vercel/analytics/next";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = createMetadata();

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: siteConfig.businessName,
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: siteConfig.website + seoConfig.ogImage,
  description: siteConfig.description,
  areaServed: [
    { "@type": "City", name: "Pretoria" },
    { "@type": "Country", name: "South Africa" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pretoria",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager — loaded as high in <head> as Next allows */}
        <GtmScript />
        <meta name="theme-color" content="#0A1A30" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-brand-ink text-white antialiased">
        {/* Google Tag Manager (noscript) — immediately after opening <body> */}
        <GtmNoScript />
        <GoogleAdsBase />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
