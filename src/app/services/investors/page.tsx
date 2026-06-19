import { type Metadata } from "next";

import { AskRobCard } from "@/components/ask-rob-card";
import { DisclosureList } from "@/components/disclosure-list";
import { Eyebrow } from "@/components/eyebrow";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  description:
    "Origination, evaluation, and commercial due diligence for funds and family offices investing in deep tech.",
  title: "Services for investors | Evolute Partners",
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
        subtitle="From origination through diligence, we bring proprietary insight and a disciplined process to funds and family offices deploying into deep tech."
      />

      <PageSection>
        <DisclosureList
          items={investorServices.map((service) => ({
            description: service.intro,
            href: `/services/investors/${service.slug}`,
            title: service.title,
          }))}
          name="investor-services"
        />
      </PageSection>

      {methodology.length > 0 ? (
        <PageSection className="border-t border-navy-700/10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
            <div className="flex flex-col gap-4">
              <Eyebrow>How we work</Eyebrow>
              <h3 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight font-medium tracking-tight text-navy-700">
                Our methodology
              </h3>
              <p className="max-w-md text-base text-navy-600 md:text-lg">
                Discovery, Design, Build, Execute: a disciplined path from first conversation to
                closing.
              </p>
            </div>
            <DisclosureList
              items={methodology.map((step) => ({
                description: step.description,
                title: step.title,
              }))}
              name="investor-methodology"
            />
          </div>
        </PageSection>
      ) : null}

      <AskRobCard person="simon" />
    </>
  );
}
