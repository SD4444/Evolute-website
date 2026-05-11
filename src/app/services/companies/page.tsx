import type { Metadata } from "next";
import Link from "next/link";
import {
  RiArrowLeftRightLine,
  RiCircleLine,
  RiLineChartLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

import { AskRobCard } from "@/components/ask-rob-card";
import { Eyebrow } from "@/components/eyebrow";
import { Hero } from "@/components/hero";
import { MethodologyStep } from "@/components/methodology-step";
import { PageSection } from "@/components/page-container";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services for companies — Evolute Partners",
  description:
    "M&A, fundraising, and corporate finance for founders and operators building deep tech companies.",
};

const icons: Record<string, RemixiconComponentType> = {
  "m-a": RiArrowLeftRightLine,
  fundraising: RiLineChartLine,
  "corporate-finance": RiCircleLine,
};

export default function CompaniesServicesPage() {
  const companyServices = services.filter((s) => s.audience === "companies");
  const methodology = companyServices[0]?.methodology ?? [];

  return (
    <>
      <Hero
        variant="dark"
        eyebrow="For companies"
        title="Capital strategy, end to end."
        subtitle="From first capital conversations to closing the deal — we partner with founders and operators on the moves that shape their company's trajectory."
      />

      <PageSection>
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {companyServices.map((service) => {
            const Icon = icons[service.slug];
            return (
              <Link
                className="group flex flex-col gap-5"
                href={`/services/companies/${service.slug}`}
                key={service.slug}
              >
                {Icon ? (
                  <Icon aria-hidden="true" className="size-6 text-navy-700" />
                ) : null}
                <h3 className="font-heading text-3xl leading-tight font-medium text-navy-700 group-hover:text-navy-900 md:text-4xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                  {service.subtitle}
                </p>
                <span className="mt-2 text-sm text-navy-700 transition-transform group-hover:translate-x-1">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </PageSection>

      {methodology.length > 0 ? (
        <PageSection className="bg-[var(--background-alt)]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <Eyebrow>How we work</Eyebrow>
              <h3 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight font-normal tracking-tight text-navy-700">
                Our methodology
              </h3>
              <p className="max-w-2xl text-base text-gray-500 md:text-lg">
                Discovery, Design, Build, Execute — a disciplined path from
                first conversation to closing.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {methodology.map((step, index) => (
                <MethodologyStep
                  description={step.description}
                  index={index + 1}
                  key={step.label}
                  label={step.label}
                  title={step.title}
                />
              ))}
            </div>
          </div>
        </PageSection>
      ) : null}

      <AskRobCard />
    </>
  );
}
