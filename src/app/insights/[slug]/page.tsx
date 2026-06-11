import { notFound } from "next/navigation";

import { Eyebrow } from "@/components/eyebrow";
import { InsightCard } from "@/components/insight-card";
import {
  EditorialContainer,
  PageSection,
} from "@/components/page-container";
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
    description: entry.meta.excerpt,
    title: entry.meta.title,
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
  const caseStudy = entry.caseStudy;

  const relatedPosts = insights
    .filter((insight) => insight.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-background text-navy-700">
        <EditorialContainer className="pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="flex flex-col gap-8">
            <Eyebrow>{`${meta.category} · ${meta.publishedAt}`}</Eyebrow>
            <h1 className="max-w-4xl font-heading text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
              {meta.title}
            </h1>
            <p className="max-w-3xl text-lg text-gray-500 md:text-xl">
              {meta.excerpt}
            </p>
          </div>
        </EditorialContainer>
      </section>
      {meta.image ? (
        <section>
          <EditorialContainer>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="h-full w-full object-cover"
                src={meta.image}
              />
            </div>
          </EditorialContainer>
        </section>
      ) : null}
      <PageSection className={meta.image ? "pt-10 md:pt-14" : "pt-2 md:pt-4"}>
        <EditorialContainer>
          <div className="prose prose-navy prose-headings:font-heading prose-h2:mt-12 prose-h2:text-[clamp(1.75rem,3vw,2.5rem)] prose-h2:font-normal prose-h2:text-navy-700 max-w-none">
            <Body />
          </div>
        </EditorialContainer>
      </PageSection>
      {caseStudy ? (
        <section className="bg-navy-700 text-white">
          <EditorialContainer className="py-16 md:py-24">
            <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-10">
                {caseStudy.person.quote ? (
                  <blockquote className="max-w-3xl font-heading text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-medium tracking-tight text-white">
                    &ldquo;{caseStudy.person.quote}&rdquo;
                  </blockquote>
                ) : null}

                <div className="flex items-center gap-5">
                  <div className="size-24 shrink-0 overflow-hidden rounded-full bg-white/10 md:size-28">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={caseStudy.person.name}
                      className="h-full w-full object-cover"
                      src={caseStudy.person.image}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-heading text-xl text-white">
                      {caseStudy.person.name}
                    </p>
                    <p className="text-sm text-gray-300">
                      {caseStudy.person.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
                <h2 className="font-heading text-2xl font-medium text-white">
                  About
                </h2>
                <dl className="mt-8 flex flex-col gap-5">
                  {caseStudy.about.map((item) => (
                    <div
                      className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                      key={item.label}
                    >
                      <dt className="text-sm text-gray-300">{item.label}:</dt>
                      <dd className="mt-1 text-base leading-relaxed text-white">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </EditorialContainer>
        </section>
      ) : null}
      {relatedPosts.length > 0 ? (
        <PageSection>
          <div className="flex flex-col gap-12">
            <EditorialContainer className="px-6 md:px-10">
              <h2 className="font-heading text-[clamp(1.75rem,3vw,3rem)] font-medium text-navy-700">
                Related posts
              </h2>
            </EditorialContainer>
            <EditorialContainer className="px-6 md:px-10">
              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((insight) => (
                  <InsightCard key={insight.slug} insight={insight} />
                ))}
              </div>
            </EditorialContainer>
          </div>
        </PageSection>
      ) : null}
    </>
  );
}
