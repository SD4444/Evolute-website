import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AskRobCard } from "@/components/ask-rob-card";
import { ClientLogoCloud } from "@/components/client-logo-cloud";
import { Hero } from "@/components/hero";
import { InsightCard } from "@/components/insight-card";
import { PageSection } from "@/components/page-container";
import { findIndustry, industries } from "@/lib/content/industries";
import { insights } from "@/lib/content/insights";
import type { AccentTone } from "@/lib/content/types";

const toneDeeperColor: Record<AccentTone, string> = {
  lilac: "var(--accent-violet)",
  sage: "var(--accent-forest)",
  lime: "var(--accent-olive)",
  sky: "var(--accent-ocean)",
  sand: "var(--accent-clay)",
  rose: "var(--accent-rose-dk)",
};

function industryStem(slug: string) {
  return slug.replace(/-and-/g, "-");
}

function matchesIndustry(insightSlug: string, industrySlug: string) {
  const stem = industryStem(industrySlug);
  if (insightSlug.includes(industrySlug)) return true;
  if (insightSlug.includes(stem)) return true;
  const firstToken = stem.split("-")[0];
  return firstToken.length > 3 && insightSlug.includes(firstToken);
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata(
  props: PageProps<"/industries/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = findIndustry(slug);
  if (!industry) {
    return { title: "Industry not found — Evolute Partners" };
  }
  const title = `${industry.title} — Evolute Partners`;
  return {
    title,
    description: industry.subtitle,
    openGraph: {
      title,
      description: industry.subtitle,
      type: "website",
    },
  };
}

export default async function IndustryPage(
  props: PageProps<"/industries/[slug]">,
) {
  const { slug } = await props.params;
  const industry = findIndustry(slug);
  if (!industry) notFound();

  const relatedInsights = insights
    .filter((insight) => matchesIndustry(insight.slug, industry.slug))
    .slice(0, 3);

  const deeperColor = toneDeeperColor[industry.tone];

  return (
    <>
      <Hero variant="light" eyebrow={industry.title} title={industry.subtitle} />

      <section className="px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 py-16 md:py-24">
          <p
            className="max-w-4xl font-heading text-[clamp(1.5rem,3vw,2rem)] leading-tight font-medium"
            style={{ color: deeperColor }}
          >
            Some of the industries and applications that fall into{" "}
            {industry.title}.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-500">
            {industry.intro}
          </p>
        </div>
      </section>

      {industry.image ? (
        <section className="px-6 md:px-10">
          <div className="mx-auto aspect-[16/7] w-full max-w-[1400px] overflow-hidden rounded-3xl bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="h-full w-full object-cover"
              src={industry.image}
            />
          </div>
        </section>
      ) : null}

      <ClientLogoCloud />

      {relatedInsights.length > 0 ? (
        <PageSection>
          <div className="flex flex-col gap-12">
            <h2 className="font-heading text-2xl leading-tight font-medium tracking-tight text-navy-700 md:text-3xl">
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

      <AskRobCard />
    </>
  );
}
