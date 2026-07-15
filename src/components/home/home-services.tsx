import { DisclosureList } from "@/components/disclosure-list";

const services = [
  {
    description:
      "We guide businesses from early M&A strategy and preparation through deal structuring, negotiation, and a successful exit.",
    href: "/services/companies/m-a",
    title: "M&A",
  },
  {
    description:
      "Fundraising activities, spanning preparation to deal closing, for early and later-stage businesses.",
    href: "/services/companies/fundraising",
    title: "Fundraising",
  },
  {
    description:
      "Strategic projects with a focus on growth, capital allocation, and future financing rounds.",
    href: "/services/companies/corporate-finance",
    title: "Corporate finance",
  },
];

export function HomeServices() {
  return (
    <section className="rise border-t border-rule py-24 md:py-32">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-6 md:gap-16 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-navy-700">
            Our services
          </h2>
          <p className="text-[0.6875rem] tracking-[0.18em] text-gray-400 uppercase">
            Q. coming soon
          </p>
        </div>

        <DisclosureList
          items={services.map((service) => ({
            description: service.description,
            href: service.href,
            title: service.title,
          }))}
          name="home-services"
        />
      </div>
    </section>
  );
}
