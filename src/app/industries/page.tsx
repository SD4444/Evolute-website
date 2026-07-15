import { type Metadata } from "next";

import { AskRobCard } from "@/components/ask-rob-card";
import { DisclosureList } from "@/components/disclosure-list";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { industries } from "@/lib/content/industries";
import { type AccentTone } from "@/lib/content/types";

export const metadata: Metadata = {
  description:
    "Where Evolute deploys capital and expertise: digital technology, energy, food, mobility, materials, and life sciences.",
  title: "Industries",
};

const toneInk: Record<AccentTone, string> = {
  lilac: "var(--accent-violet)",
  lime: "var(--accent-olive)",
  rose: "var(--accent-rose-dk)",
  sage: "var(--accent-forest)",
  sand: "var(--accent-clay)",
  sky: "var(--accent-ocean)",
};

export default function IndustriesPage() {
  return (
    <>
      <Hero
        variant="light"
        eyebrow="Industries"
        title="Where we deploy capital and expertise."
        subtitle="Six sectors at the frontier of deep tech, each with its own dynamics, capital cycles, and value-creation playbooks."
      />

      <PageSection className="pt-0 md:pt-0">
        <div className="flex flex-col gap-8 md:gap-10">
          <p className="text-[0.6875rem] tracking-[0.18em] text-gray-500 uppercase">Our focus</p>
          <DisclosureList
            items={industries.map((industry) => ({
              accentColor: toneInk[industry.tone],
              description: industry.intro,
              eyebrow: `${industry.themes.length} focus areas`,
              href: `/industries/${industry.slug}`,
              title: industry.title,
            }))}
            name="industries"
          />
        </div>
      </PageSection>

      <AskRobCard person="simon" />
    </>
  );
}
