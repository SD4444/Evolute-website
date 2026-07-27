import { type MetadataRoute } from "next";

import { industries } from "@/lib/content/industries";
import { insights } from "@/lib/content/insights";
import { legalPages } from "@/lib/content/legal";
import { servicesByAudience } from "@/lib/content/services";

const BASE_URL = "https://evolute.partners";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/services/companies", priority: 0.9 },
    { path: "/industries", priority: 0.9 },
    { path: "/insights", priority: 0.8 },
    { path: "/about-us", priority: 0.7 },
    { path: "/team", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
    changeFrequency: "monthly",
    priority,
    url: `${BASE_URL}${path}`,
  }));

  for (const service of servicesByAudience("companies")) {
    entries.push({
      changeFrequency: "monthly",
      priority: 0.8,
      url: `${BASE_URL}/services/companies/${service.slug}`,
    });
  }

  for (const industry of industries) {
    entries.push({
      changeFrequency: "monthly",
      priority: 0.8,
      url: `${BASE_URL}/industries/${industry.slug}`,
    });
  }

  for (const insight of insights) {
    entries.push({
      changeFrequency: "yearly",
      lastModified: new Date(insight.publishedAt),
      priority: 0.6,
      url: `${BASE_URL}/insights/${insight.slug}`,
    });
  }

  for (const page of legalPages) {
    entries.push({
      changeFrequency: "yearly",
      priority: 0.2,
      url: `${BASE_URL}/legal/${page.slug}`,
    });
  }

  return entries;
}
