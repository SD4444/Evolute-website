import { type MetadataRoute } from "next";

const BASE_URL = "https://evolute.partners";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
