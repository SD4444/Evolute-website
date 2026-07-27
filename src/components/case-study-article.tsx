import Link from "next/link";

import { Eyebrow } from "@/components/eyebrow";
import { PageContainer, PageSection } from "@/components/page-container";
import { type CaseDeck } from "@/lib/content/case-decks";

/**
 * Server-rendered version of a case study deck.
 *
 * The deck itself is client-only (it portals a fullscreen overlay to <body> to
 * escape the `rise` transform's containing block), which left these routes
 * shipping HTML with no content and no <h1>. This renders the same content from
 * the same data so crawlers and no-JS visitors get the case study; the deck
 * covers it and marks it inert once it mounts.
 */
export function CaseStudyArticle({ deck }: { deck: CaseDeck }) {
  const cover = deck.slides.find((slide) => slide.kind === "cover");
  let sectionCounter = 0;

  return (
    <article>
      <PageSection className="pt-28 pb-10 md:pt-36 md:pb-14">
        <div className="flex flex-col gap-7">
          <Link
            className="w-fit text-[0.6875rem] tracking-[0.18em] text-gray-400 uppercase transition-colors hover:text-navy-700"
            href="/insights"
          >
            ← All insights
          </Link>
          <Eyebrow>{`Case study · ${deck.client}`}</Eyebrow>
          <h1 className="max-w-[62rem] font-heading text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-[-0.035em] text-navy-700">
            {cover?.title ?? `${deck.client} case study`}
          </h1>
          {cover?.subtitle ? (
            <p className="max-w-[62rem] text-[clamp(0.9375rem,1.8vw,1.1875rem)] leading-[1.6] text-navy-600">
              {cover.subtitle}
            </p>
          ) : null}
          {cover?.meta.length ? (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.6875rem] tracking-[0.14em] text-gray-500 uppercase">
              {cover.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </PageSection>

      <PageContainer className="flex flex-col gap-16 pb-24 md:gap-20 md:pb-32">
        {deck.slides.map((slide, index) => {
          if (slide.kind === "cover") {
            return null;
          }

          if (slide.kind === "quote") {
            return (
              <figure className="flex max-w-[62rem] flex-col gap-5" key={index}>
                <blockquote className="font-heading text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.03em] text-navy-700">
                  &ldquo;{slide.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm text-gray-500">
                  {slide.name}, {slide.role}
                </figcaption>
              </figure>
            );
          }

          if (slide.kind === "closing") {
            return (
              <section className="flex max-w-[62rem] flex-col gap-4" key={index}>
                <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] tracking-[-0.03em] text-navy-700">
                  {slide.headline}
                </h2>
                <p className="font-heading text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.2] text-navy-600">
                  {slide.accent}
                </p>
                <p className="text-base leading-relaxed text-navy-600">{slide.sub}</p>
              </section>
            );
          }

          sectionCounter += 1;

          return (
            <section className="flex flex-col gap-6" key={index}>
              <Eyebrow>{`${String(sectionCounter).padStart(2, "0")} · ${slide.label}`}</Eyebrow>
              <h2 className="max-w-[62rem] font-heading text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] tracking-[-0.03em] text-navy-700">
                {slide.headline}
              </h2>
              {slide.lead ? (
                <p className="max-w-[62rem] text-base leading-relaxed text-navy-600 md:text-lg">
                  {slide.lead}
                </p>
              ) : null}

              {slide.stats?.length ? (
                <dl className="grid gap-8 border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-3">
                  {slide.stats.map((stat) => (
                    <div className="flex flex-col gap-2" key={stat.caption}>
                      <dt className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] leading-none tracking-[-0.03em] text-navy-700">
                        {/* aux modifies the value: "<" prefixes it, others suffix it. */}
                        {stat.aux === "<" ? <span className="text-gray-400">&lt;</span> : null}
                        {stat.value}
                        {stat.aux && stat.aux !== "<" ? (
                          <span className="text-gray-400">{stat.aux}</span>
                        ) : null}
                      </dt>
                      <dd className="text-sm text-gray-500">{stat.caption}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {slide.rails?.length ? (
                <div className="flex flex-col gap-6 border-t border-rule pt-6">
                  {slide.rails.map((rail) => (
                    <div className="grid gap-2 md:grid-cols-[14rem_1fr] md:gap-8" key={rail.label}>
                      <p className="text-[0.6875rem] tracking-[0.18em] text-gray-500 uppercase">
                        {rail.label}
                      </p>
                      <p className="max-w-[48rem] text-base leading-relaxed text-navy-600">
                        {rail.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </PageContainer>
    </article>
  );
}
