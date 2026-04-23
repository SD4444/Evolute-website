import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { insights } from "@/lib/content/insights";

import { InsightsFilter } from "./insights-filter";

export const metadata = {
  title: "Insights",
  description:
    "Research, case studies, and news from the Evolute team on the companies, capital, and sectors shaping deep tech.",
};

export default function InsightsPage() {
  return (
    <>
      <Hero
        variant="light"
        eyebrow="Insights"
        title="Perspectives on deep tech capital"
        subtitle="Research, case studies, and news from the Evolute team on the companies, capital, and sectors shaping the frontier."
      />
      <PageSection>
        <InsightsFilter insights={insights} />
      </PageSection>
    </>
  );
}
