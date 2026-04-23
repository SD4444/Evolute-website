import type { Metadata } from "next";

import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";

export const metadata: Metadata = {
  description:
    "Evolute specialises in corporate finance for tech pioneers — visionary founders who push boundaries and see their companies as catalysts for the future.",
  title: "About us",
};

export default async function Page() {
  return (
    <>
      <Hero
        variant="light"
        eyebrow="About us"
        title="Capital partners for deep tech"
        subtitle="Evolute specialises in corporate finance for tech pioneers — visionary founders who push boundaries and see their companies as catalysts for the future."
      />

      <PageSection>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <p className="text-lg leading-relaxed text-navy-700 md:text-xl">
            We focus on growth capital and exit advisory services. Not by
            following traditional paths.
          </p>
          <p className="text-base leading-relaxed text-gray-500 md:text-lg">
            Our mission is to empower founders with the richest data and
            world-class resources to navigate complex capital markets and
            achieve exits they can be proud of.
          </p>
          <p className="text-base leading-relaxed text-gray-500 md:text-lg">
            With extensive experience in fundraising, operations, and
            investing, we bring a structured approach to every engagement. We
            operate as an extension of your team, adapting to fast-changing
            market conditions while staying focused on outcomes.
          </p>
        </div>
      </PageSection>
    </>
  );
}
