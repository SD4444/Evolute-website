import { type Metadata } from "next";

import { AskRobCard } from "@/components/ask-rob-card";
import { DisclosureList } from "@/components/disclosure-list";
import { Eyebrow } from "@/components/eyebrow";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  description:
    "Corporate finance services for companies: M&A, fundraising, and corporate finance from strategy to closing.",
  title: "Services",
};

const audiences = [
  {
    description:
      "M&A, fundraising, and corporate finance, with embedded support from strategy to closing.",
    eyebrow: "For founders and operators",
    href: "/services/companies",
    title: "For companies",
  },
];

export default function ServicesPage() {
  const methodology = services[0]?.methodology ?? [];

  return (
    <>
      <div>
        <Hero
          variant="light"
          eyebrow="Services"
          title="Capital strategy for ambitious companies."
          subtitle="Whether you're raising or exiting, we work as an extension of your team across the deal lifecycle."
          contentClassName="gap-6 pt-24 pb-10 md:pt-32 md:pb-14"
        />

        <PageSection className="pt-0 pb-10 md:pt-0 md:pb-14">
          <div className="flex flex-col gap-8 md:gap-10">
            <Eyebrow>Choose your perspective</Eyebrow>
            <DisclosureList
              items={[
                ...audiences.map((audience) => ({
                  description: audience.description,
                  eyebrow: audience.eyebrow,
                  href: audience.href,
                  linkLabel: `View services ${audience.title.toLowerCase()}`,
                  title: audience.title,
                })),
                {
                  description: "Our client software platform. Coming soon.",
                  eyebrow: "Coming soon",
                  title: "Q.",
                },
              ]}
              name="service-audiences"
            />
          </div>
        </PageSection>
      </div>

      {methodology.length > 0 ? (
        <PageSection className="border-t border-rule">
          <div className="flex flex-col gap-10 md:gap-14">
            <div className="flex flex-col gap-4">
              <Eyebrow>How we work</Eyebrow>
              <h3 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[-0.03em] text-navy-700">
                Our methodology
              </h3>
              <p className="max-w-[62rem] text-base text-navy-600 md:text-lg">
                Discovery, Design, Build, Execute: a disciplined path from first conversation to
                closing.
              </p>
            </div>
            <DisclosureList
              items={methodology.map((step) => ({
                description: step.description,
                title: step.title,
              }))}
              name="services-methodology"
            />
          </div>
        </PageSection>
      ) : null}

      <AskRobCard person="simon" />
    </>
  );
}
