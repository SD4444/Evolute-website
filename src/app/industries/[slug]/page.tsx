import { type Metadata } from "next";
import Link from "next/link";
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
    return { title: "Industry not found | Evolute Partners" };
  }
  const title = `${industry.title} | Evolute Partners`;
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
  const caseStudies = relatedInsights.filter((insight) => insight.category === "Case study");
  const editorialInsights = relatedInsights.filter((insight) => insight.category !== "Case study");

  const deeperColor = toneDeeperColor[industry.tone];
  const industryProjects = projectsForIndustry(industry.slug);

  return (
    <>
      <Hero
        variant="light"
        eyebrow={industry.title}
        title={industry.subtitle}
        contentClassName="pb-12 md:pb-12 [&_h1]:max-w-6xl"
      />

      <section>
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <p
            className="max-w-xl font-heading text-[clamp(1.5rem,3vw,2rem)] leading-tight font-medium"
            style={{ color: deeperColor }}
          >
            Some of the industries and applications that fall into {industry.title}.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-500">{industry.intro}</p>
        </div>
      </section>

      <IndustryProjectIndex
        accentColor={deeperColor}
        industryTitle={industry.title}
        projects={industryProjects}
      />

      {caseStudies.length > 0 ? (
        <PageSection>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-gray-500 uppercase">
                Case study
              </p>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight font-medium tracking-tight text-navy-700">
                Work we&apos;ve done in {industry.title}
              </h2>
            </div>
            <div className="grid gap-8">
              {caseStudies.map((insight) => (
                <article
                  className="overflow-hidden rounded-3xl bg-[var(--background-alt)]"
                  key={insight.slug}
                >
                  <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                    <Link
                      className={`aspect-[16/11] overflow-hidden ${
                        insight.imageFit === "contain" ? "bg-navy-700" : "bg-gray-100"
                      }`}
                      href={`/insights/${insight.slug}`}
                    >
                      {insight.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          alt=""
                          className={`h-full w-full ${
                            insight.imageFit === "contain" ? "object-contain" : "object-cover"
                          }`}
                          src={insight.image}
                        />
                      ) : null}
                    </Link>
                    <div className="flex flex-col gap-6 p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-3 text-[0.6875rem] tracking-[0.2em] uppercase">
                        <span className="text-navy-700">{insight.category}</span>
                        <span aria-hidden="true" className="text-gray-300">
                          /
                        </span>
                        <span className="text-gray-500">{insight.publishedAt}</span>
                      </div>
                      <div className="flex flex-col gap-4">
                        <h3 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] font-medium tracking-tight text-navy-700">
                          {insight.title}
                        </h3>
                        <p className="max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
                          {insight.excerpt}
                        </p>
                      </div>
                      <div className="mt-auto pt-2">
                        <Link
                          className="inline-flex items-center gap-2 text-sm text-navy-700 underline-offset-4 hover:underline"
                          href={`/insights/${insight.slug}`}
                        >
                          Read the case study →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </PageSection>
      ) : null}

      {editorialInsights.length > 0 ? (
        <PageSection>
          <div className="flex flex-col gap-12">
            <h2 className="font-heading text-2xl leading-tight font-medium tracking-tight text-navy-700 md:text-3xl">
              Related insights
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {editorialInsights.map((insight) => (
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
