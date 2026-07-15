import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { AskRobCard } from "@/components/ask-rob-card";
import { Hero } from "@/components/hero";
import { IndustryProjectIndex } from "@/components/industry-project-index";
import { InsightCard } from "@/components/insight-card";
import { PageSection } from "@/components/page-container";
import { findIndustry, industries } from "@/lib/content/industries";
import { insights } from "@/lib/content/insights";
import { projectsForIndustry } from "@/lib/content/projects";
import { type AccentTone } from "@/lib/content/types";

const toneDeeperColor: Record<AccentTone, string> = {
  lilac: "var(--accent-violet)",
  lime: "var(--accent-olive)",
  rose: "var(--accent-rose-dk)",
  sage: "var(--accent-forest)",
  sand: "var(--accent-clay)",
  sky: "var(--accent-ocean)",
};

const toneColor: Record<AccentTone, string> = {
  lilac: "var(--accent-lilac)",
  lime: "var(--accent-lime)",
  rose: "var(--accent-rose)",
  sage: "var(--accent-sage)",
  sand: "var(--accent-sand)",
  sky: "var(--accent-sky)",
};

const additionalIndustryInsights: Record<string, string[]> = {
  "digital-technology": ["facilitating-scisports-growth-through-acquisition"],
  "food-and-agri": ["providing-collie-with-end-to-end-fundraising-support"],
};

function industryStem(slug: string) {
  return slug.replace(/-and-/g, "-");
}

function matchesIndustry(insightSlug: string, industrySlug: string) {
  const explicitMatches = additionalIndustryInsights[industrySlug];
  if (explicitMatches?.includes(insightSlug)) {
    return true;
  }

  const stem = industryStem(industrySlug);
  if (insightSlug.includes(industrySlug)) {
    return true;
  }
  if (insightSlug.includes(stem)) {
    return true;
  }
  const firstToken = stem.split("-")[0];
  return firstToken.length > 3 && insightSlug.includes(firstToken);
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata(props: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = findIndustry(slug);
  if (!industry) {
    return { title: "Industry not found" };
  }
  const title = `${industry.title}`;
  return {
    description: industry.subtitle,
    openGraph: {
      description: industry.subtitle,
      title,
      type: "website",
    },
    title,
  };
}

export default async function IndustryPage(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const industry = findIndustry(slug);
  if (!industry) {
    notFound();
  }

  const relatedInsights = insights
    .filter((insight) => matchesIndustry(insight.slug, industry.slug))
    .slice(0, 3);

  const deeperColor = toneDeeperColor[industry.tone];
  const industryProjects = projectsForIndustry(industry.slug);

  return (
    <>
      <Hero
        variant="dark"
        ambientGlow
        ambientGlowColor={toneColor[industry.tone]}
        eyebrow={industry.title}
        title={industry.subtitle}
        contentClassName="pb-12 md:pb-16 [&_h1]:max-w-6xl"
      >
        <p className="mt-8 max-w-[62rem] text-lg leading-[1.65] text-gray-200 md:mt-10 md:text-xl">
          {industry.intro}
        </p>
      </Hero>

      <IndustryProjectIndex
        accentColor={deeperColor}
        industryTitle={industry.title}
        projects={industryProjects}
      />

      {relatedInsights.length > 0 ? (
        <PageSection>
          <div className="flex flex-col gap-12">
            <h2 className="font-heading text-2xl leading-tight tracking-[-0.03em] text-navy-700 md:text-3xl">
              Related insights
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedInsights.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          </div>
        </PageSection>
      ) : null}

      <AskRobCard
        person={
          industry.slug === "digital-technology" || industry.slug === "food-and-agri"
            ? "simon"
            : "rob"
        }
      />
    </>
  );
}
