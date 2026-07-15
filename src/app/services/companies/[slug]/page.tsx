import { notFound } from "next/navigation";

import { DisclosureList } from "@/components/disclosure-list";
import { Eyebrow } from "@/components/eyebrow";
import { Hero } from "@/components/hero";
import { MethodologyCycle } from "@/components/methodology-cycle";
import { PageSection } from "@/components/page-container";
import { SectionHeading } from "@/components/section-heading";
import { companyServices } from "@/lib/content/nav";
import { findService } from "@/lib/content/services";

export function generateStaticParams() {
  return companyServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/services/companies/[slug]">) {
  const { slug } = await props.params;
  const service = findService("companies", slug);
  if (!service) {
    return {};
  }
  return {
    description: service.subtitle,
    title: service.title,
  };
}

export default async function CompanyServicePage(props: PageProps<"/services/companies/[slug]">) {
  const { slug } = await props.params;
  const service = findService("companies", slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero
        variant="dark"
        ambientGlow
        eyebrow="For companies"
        title={service.title}
        subtitle={service.subtitle}
        className="flex min-h-screen"
        contentClassName="flex-1 justify-center"
      />

      <PageSection className="flex min-h-screen items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            title="Your partner every step of the way."
            className="[&>h2]:text-[clamp(2.5rem,5vw,3.5rem)]"
          />
          <p className="max-w-3xl text-base text-gray-500 md:text-lg">{service.intro}</p>
        </div>
      </PageSection>

      <PageSection className="border-t border-rule">
        <div className="flex flex-col gap-8 md:gap-10">
          <Eyebrow>Capabilities</Eyebrow>
          <DisclosureList
            items={service.capabilities.map((capability) => ({
              description: capability.description,
              title: capability.title,
            }))}
            name={`${service.slug}-capabilities`}
          />
        </div>
      </PageSection>

      {service.methodology ? (
        <PageSection className="border-t border-rule">
          <div className="flex flex-col gap-10 md:gap-14">
            <div className="flex flex-col gap-4">
              <Eyebrow>How we work</Eyebrow>
              <h3 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[-0.03em] text-navy-700">
                Our methodology
              </h3>
              <p className="max-w-[62rem] text-base text-navy-600 md:text-lg">
                Discovery, Design, Build, Execute: a disciplined path from information gathering to
                iterative improvement.
              </p>
            </div>
            <MethodologyCycle steps={service.methodology} />
          </div>
        </PageSection>
      ) : null}
    </>
  );
}
