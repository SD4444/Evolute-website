import type { Metadata } from "next";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";

import { AskRobCard } from "@/components/ask-rob-card";
import { Eyebrow } from "@/components/eyebrow";
import { Hero } from "@/components/hero";
import { MethodologyStep } from "@/components/methodology-step";
import { PageSection } from "@/components/page-container";
import { companyServices, investorServices } from "@/lib/content/nav";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services — Evolute Partners",
  description:
    "Corporate finance services for both sides of the table — companies raising capital and investors deploying it.",
};

const audiences = [
  {
    description:
      "M&A, fundraising, and corporate finance — embedded support from strategy to closing.",
    eyebrow: "For founders and operators",
    href: "/services/companies",
    items: companyServices,
    title: "For companies",
  },
  {
    description:
      "Origination, evaluation, and commercial diligence to sharpen capital deployment.",
    eyebrow: "For funds and family offices",
    href: "/services/investors",
    items: investorServices,
    title: "For investors",
  },
];

export default function ServicesPage() {
  const methodology = services[0]?.methodology ?? [];

  return (
    <>
      <Hero
        variant="light"
        eyebrow="Services"
        title="Capital strategy for both sides of the table."
        subtitle="Whether you're raising, exiting, originating, or evaluating — we work as an extension of your team across the deal lifecycle."
      />

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((audience) => (
            <Link
              className="group flex flex-col gap-8 rounded-3xl bg-[var(--background-alt)] p-8 transition-colors hover:bg-gray-100 md:p-12"
              href={audience.href}
              key={audience.href}
            >
              <div className="flex items-start justify-between gap-4">
                <Eyebrow>{audience.eyebrow}</Eyebrow>
                <RiArrowRightUpLine
                  aria-hidden="true"
                  className="size-5 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-700"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-medium tracking-tight text-navy-700">
                  {audience.title}
                </h2>
                <p className="text-base text-gray-500 md:text-lg">
                  {audience.description}
                </p>
              </div>
              <ul className="mt-auto flex flex-col gap-3 border-t border-gray-200 pt-6">
                {audience.items.map((item) => (
                  <li
                    className="flex items-center justify-between gap-4 text-sm text-navy-700"
                    key={item.slug}
                  >
                    <span>{item.title}</span>
                    <span className="text-gray-400">→</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
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
