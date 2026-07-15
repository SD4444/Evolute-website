import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseDeckRoute } from "@/components/case-deck-route";
import { Eyebrow } from "@/components/eyebrow";
import { InsightCard } from "@/components/insight-card";
import { EditorialContainer, PageSection } from "@/components/page-container";
import { findCaseDeck } from "@/lib/content/case-decks";
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

export default async function InsightPage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const entry = findInsightEntry(slug);

  if (!entry) {
    notFound();
  }

  const { meta, Body } = entry;
  const caseStudy = entry.caseStudy;

  // Case studies render as a fullscreen flip-through deck, nothing else.
  if (findCaseDeck(slug)) {
    return <CaseDeckRoute slug={slug} />;
  }

  const relatedPosts = insights.filter((insight) => insight.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-background text-navy-700">
        <EditorialContainer className="pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto flex w-full max-w-[46rem] flex-col gap-8">
            <Link
              className="w-fit text-[0.6875rem] tracking-[0.18em] text-gray-400 uppercase transition-colors hover:text-navy-700"
              href="/insights"
            >
              ← All insights
            </Link>
            <Eyebrow>{`${meta.category} · ${meta.publishedAt}`}</Eyebrow>
            <h1 className="font-heading text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
              {meta.title}
            </h1>
            <p className="text-lg text-gray-500 md:text-xl">{meta.excerpt}</p>
          </div>
        </EditorialContainer>
      </section>
      {meta.image ? (
        <section>
          <EditorialContainer>
            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="h-full w-full object-cover" src={meta.image} />
            </div>
          </EditorialContainer>
        </section>
      ) : null}
      <PageSection className={meta.image ? "pt-10 md:pt-14" : "pt-2 md:pt-4"}>
        <EditorialContainer>
          <div className="article-body mx-auto w-full max-w-[46rem]">
            <Body />
          </div>
        </EditorialContainer>
      </PageSection>
      {caseStudy ? (
        <section className="bg-dark-bg text-paper">
          <EditorialContainer className="py-16 md:py-24">
            <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-10">
                {caseStudy.person.quote ? (
                  <blockquote className="max-w-3xl font-heading text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.03em] text-white">
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
                    <p className="font-heading text-xl text-white">{caseStudy.person.name}</p>
                    <p className="text-sm text-gray-300">{caseStudy.person.role}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[8px] border border-dark-panel-border bg-dark-panel p-8 md:p-10">
                <h2 className="font-heading text-2xl text-white">About</h2>
                <dl className="mt-8 flex flex-col gap-5">
                  {caseStudy.about.map((item) => (
                    <div
                      className="border-b border-dark-rule pb-5 last:border-b-0 last:pb-0"
                      key={item.label}
                    >
                      <dt className="text-sm text-gray-300">{item.label}:</dt>
                      <dd className="mt-1 text-base leading-relaxed text-white">{item.value}</dd>
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
              <h2 className="font-heading text-[clamp(1.75rem,3vw,3rem)] text-navy-700">
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
