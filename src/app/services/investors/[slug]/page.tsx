import { notFound } from "next/navigation";

import { Hero } from "@/components/hero";
import { MethodologyStep } from "@/components/methodology-step";
import { PageSection } from "@/components/page-container";
import { SectionHeading } from "@/components/section-heading";
import { Eyebrow } from "@/components/eyebrow";
import { investorServices } from "@/lib/content/nav";
import { findService } from "@/lib/content/services";

export function generateStaticParams() {
  return investorServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/investors/[slug]">,
) {
  const { slug } = await props.params;
  const service = findService("investors", slug);
  if (!service) {
    return {};
  }
  return {
    title: service.title,
    description: service.subtitle,
  };
}

export default async function InvestorServicePage(
  props: PageProps<"/services/investors/[slug]">,
) {
  const { slug } = await props.params;
  const service = findService("investors", slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero
        variant="dark"
        eyebrow="For investors"
        title={service.title}
        subtitle={service.subtitle}
      />

      <PageSection>
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Overview"
            title="Your partner every step of the way."
            className="[&>h2]:text-[clamp(2.5rem,5vw,3.5rem)]"
          />
          <p className="max-w-3xl text-base text-gray-500 md:text-lg">
            {service.intro}
          </p>
        </div>
      </PageSection>

      <section className="px-6 md:px-10">
        <div className="mx-auto aspect-[16/9] w-full max-w-[1400px] overflow-hidden rounded-3xl bg-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="h-full w-full object-cover"
            src="/images/services/photo-break.jpg"
          />
        </div>
      </section>

      <PageSection className="bg-[var(--background-alt)]">
        <div className="flex flex-col gap-12">
          <Eyebrow>Capabilities</Eyebrow>
          <div className="flex max-w-3xl flex-col gap-12">
            {service.capabilities.map((capability) => (
              <div key={capability.title}>
                <h3 className="font-heading text-2xl text-navy-700">
                  {capability.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 md:text-lg">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {service.methodology ? (
        <PageSection>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <Eyebrow>How we work</Eyebrow>
              <h3 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight font-normal tracking-tight text-navy-700">
                Our methodology
              </h3>
              <p className="max-w-2xl text-base text-gray-500 md:text-lg">
                Discovery, Design, Build, Execute — structured work that fits
                the rhythm of an investment process.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.methodology.map((step, index) => (
                <MethodologyStep
                  key={step.label}
                  index={index + 1}
                  label={step.label}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </PageSection>
      ) : null}

      {service.exampleEngagement ? (
        <PageSection className="bg-[var(--background-alt)]">
          <div className="flex max-w-3xl flex-col gap-4">
            <h4 className="font-heading text-[clamp(1.75rem,3vw,2rem)] font-medium text-navy-700">
              {service.exampleEngagement.title}
            </h4>
            <p className="text-base text-gray-500 md:text-lg">
              {service.exampleEngagement.description}
            </p>
          </div>
        </PageSection>
      ) : null}
    </>
  );
}
