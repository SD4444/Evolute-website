import type { Metadata } from "next";
import Link from "next/link";
import {
  RiRadarLine,
  RiScalesLine,
  RiSearchEyeLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

import { AskRobCard } from "@/components/ask-rob-card";
import { Eyebrow } from "@/components/eyebrow";
import { Hero } from "@/components/hero";
import { MethodologyStep } from "@/components/methodology-step";
import { PageSection } from "@/components/page-container";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services for investors — Evolute Partners",
  description:
    "Origination, evaluation, and commercial due diligence for funds and family offices investing in deep tech.",
};

const icons: Record<string, RemixiconComponentType> = {
  "deal-origination": RiRadarLine,
  "deal-evaluation": RiScalesLine,
  "commercial-due-diligence": RiSearchEyeLine,
};

export default function InvestorsServicesPage() {
  const investorServices = services.filter((s) => s.audience === "investors");
  const methodology = investorServices[0]?.methodology ?? [];

  return (
    <>
      <Hero
        variant="dark"
        eyebrow="For investors"
        title="Sharper conviction, faster."
        subtitle="From origination through diligence — proprietary insight and disciplined process for funds and family offices deploying into deep tech."
      />

      <PageSection>
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {investorServices.map((service) => {
            const Icon = icons[service.slug];
            return (
              <Link
                className="group flex flex-col gap-5"
                href={`/services/investors/${service.slug}`}
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
