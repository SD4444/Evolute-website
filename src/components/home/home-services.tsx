"use client";

import { useState } from "react";

import { DisclosureList } from "@/components/disclosure-list";
import { cn } from "@/lib/utils";

type Audience = "companies" | "investors";

type ServiceItem = {
  description: string;
  href: string;
  title: string;
};

const services: Record<Audience, ServiceItem[]> = {
  companies: [
    {
      description:
        "M&A advisory covering strategy, preparation, value-creation, deal structuring, and negotiation for successful exits.",
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
  ],
  investors: [
    {
      description: "Generation of high-quality deal flow to execute your investment strategy.",
      href: "/services/investors/deal-origination",
      title: "Deal origination",
    },
    {
      description: "Management of the end-to-end deal process, from analysis to closing.",
      href: "/services/investors/deal-evaluation",
      title: "Deal evaluation",
    },
    {
      description:
        "Oversight and optimization of investments to enhance performance and drive growth.",
      href: "/services/investors/commercial-due-diligence",
      title: "Commercial due diligence",
    },
  ],
};

export function HomeServices() {
  const [audience, setAudience] = useState<Audience>("companies");
  const items = services[audience];

  return (
    <section className="border-t border-navy-700/10 py-24 md:py-32">
      <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-12 px-6 md:gap-16 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
            Our services
          </h2>
          <div className="grid w-full grid-cols-2 md:w-auto md:min-w-[24rem]">
            {(["companies", "investors"] as const).map((a, index) => (
              <button
                aria-pressed={audience === a}
                className={cn(
                  "grid min-h-14 grid-cols-[1.75rem_1fr] items-center border-b-2 px-2 text-left font-heading text-base font-medium transition-colors md:min-h-16 md:text-lg",
                  audience === a
                    ? "border-navy-700 text-navy-700"
                    : "border-gray-200 text-gray-400 hover:text-gray-500",
                )}
                key={a}
                onClick={() => setAudience(a)}
                type="button"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.1em] text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>For {a}</span>
              </button>
            ))}
          </div>
        </div>

        <DisclosureList
          items={items.map((service) => ({
            description: service.description,
            href: service.href,
            title: service.title,
          }))}
          name={`home-services-${audience}`}
        />
      </div>
    </section>
  );
}
