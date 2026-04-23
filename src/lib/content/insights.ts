import { insightEntries } from "@/content/insights/registry";

export const insights = insightEntries.map((entry) => entry.meta);

export const findInsightEntry = (slug: string) =>
  insightEntries.find((entry) => entry.meta.slug === slug);

export const findInsight = (slug: string) => findInsightEntry(slug)?.meta;
