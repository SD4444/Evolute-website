export type AccentTone = "rose" | "lime" | "sand" | "lilac" | "sage" | "sky";

export type Capability = {
  title: string;
  description: string;
};

export type MethodologyStep = {
  label: string;
  title: string;
  description: string;
};

export type ServiceAudience = "companies" | "investors";

export type Service = {
  audience: ServiceAudience;
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  capabilities: Capability[];
  methodology?: MethodologyStep[];
  exampleEngagement?: {
    title: string;
    description: string;
  };
};

export type Industry = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  tone: AccentTone;
  image?: string;
  themes: {
    title: string;
    description: string;
  }[];
};

export type InsightCategory = "Blog" | "Case study" | "News";

export type Insight = {
  slug: string;
  category: InsightCategory;
  title: string;
  excerpt: string;
  publishedAt: string;
  /** Optional hero image (served from /public) */
  image?: string;
  /** Preserve the complete artwork when the hero contains embedded branding or text. */
  imageFit?: "contain" | "cover";
  /** Normalised slug → original Framer path for redirects */
  legacyPath?: string;
};

export type CaseStudyPerson = {
  image: string;
  name: string;
  role: string;
  quote?: string;
};

export type CaseStudyAboutItem = {
  label: string;
  value: string;
};

export type CaseStudy = {
  about: CaseStudyAboutItem[];
  person: CaseStudyPerson;
};

export type LegalPage = {
  slug: string;
  title: string;
  updatedAt: string;
  /** MDX-style body rendered from an array of blocks keeps this simple. */
  body: LegalBlock[];
};

export type LegalBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };
