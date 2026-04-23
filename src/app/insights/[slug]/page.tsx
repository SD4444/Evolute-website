import { notFound } from "next/navigation";

import { Hero } from "@/components/hero";
import { InsightCard } from "@/components/insight-card";
import { PageSection } from "@/components/page-container";
import { findInsightEntry, insights } from "@/lib/content/insights";

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const entry = findInsightEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.meta.title,
    description: entry.meta.excerpt,
  };
}

export default async function InsightPage(
  props: PageProps<"/insights/[slug]">,
) {
  const { slug } = await props.params;
  const entry = findInsightEntry(slug);

  if (!entry) {
    notFound();
  }

  const { meta, Body } = entry;

  const relatedPosts = insights
    .filter((insight) => insight.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Hero
        variant="light"
        eyebrow={`${meta.category} · ${meta.publishedAt}`}
        title={meta.title}
        subtitle={meta.excerpt}
      />
      {meta.image ? (
        <section className="px-6 md:px-10">
          <div className="mx-auto aspect-[16/9] w-full max-w-[1400px] overflow-hidden rounded-3xl bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="h-full w-full object-cover"
              src={meta.image}
            />
          </div>
        </section>
      ) : null}
      <PageSection>
        <div className="prose prose-navy prose-headings:font-heading prose-h2:mt-12 prose-h2:text-[clamp(1.75rem,3vw,2.5rem)] prose-h2:font-normal prose-h2:text-navy-700 mx-auto max-w-3xl">
          <Body />
        </div>
      </PageSection>
      {relatedPosts.length > 0 ? (
        <PageSection>
          <div className="flex flex-col gap-12">
            <h2 className="font-heading text-[clamp(1.75rem,3vw,3rem)] font-medium text-navy-700">
              Related posts
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          </div>
        </PageSection>
      ) : null}
    </>
  );
}
