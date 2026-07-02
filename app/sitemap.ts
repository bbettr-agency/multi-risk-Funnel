import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.website, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteConfig.website}/insurance`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.website}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.website}/complaints`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
