import { DisclosureList } from "@/components/disclosure-list";
import { industries } from "@/lib/content/industries";
import { type AccentTone } from "@/lib/content/types";

const toneInk: Record<AccentTone, string> = {
  lilac: "var(--accent-violet)",
  lime: "var(--accent-olive)",
  rose: "var(--accent-rose-dk)",
  sage: "var(--accent-forest)",
  sand: "var(--accent-clay)",
  sky: "var(--accent-ocean)",
};

export function HomeIndustries() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-20">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-gray-500 uppercase">
            Our focus
          </p>
          <h2 className="max-w-md font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
            Capital partners across deep tech
          </h2>
          <p className="max-w-md text-base leading-relaxed text-gray-500 md:text-lg">
            Explore the sectors where technical nuance and capital timing matter most.
          </p>
        </div>
        <DisclosureList
          items={industries.map((industry) => ({
            accentColor: toneInk[industry.tone],
            description: industry.subtitle,
            href: `/industries/${industry.slug}`,
            title: industry.title,
          }))}
          name="home-industries"
        />
      </div>
    </section>
  );
}
