import { type Metadata } from "next";

import { AskRobCard } from "@/components/ask-rob-card";
import { DisclosureList } from "@/components/disclosure-list";
import { Eyebrow } from "@/components/eyebrow";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  description:
    "M&A, fundraising, and corporate finance for founders and operators building deep tech companies.",
  title: "Services for companies",
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
        subtitle="From first capital conversations to closing the deal, we partner with founders and operators on the moves that shape their company's trajectory."
      />

      <PageSection>
        <DisclosureList
          items={companyServices.map((service) => ({
            description: service.intro,
            href: `/services/companies/${service.slug}`,
            title: service.title,
          }))}
          name="company-services"
        />
      </PageSection>

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
              name="company-methodology"
            />
          </div>
        </PageSection>
      ) : null}

      <AskRobCard />
    </>
  );
}
