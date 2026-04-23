"use client";

import Link from "next/link";
import { useState } from "react";
import {
  RiArrowLeftRightLine,
  RiCircleLine,
  RiLineChartLine,
  RiRadarLine,
  RiScalesLine,
  RiSearchEyeLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

import { cn } from "@/lib/utils";

type Audience = "companies" | "investors";

type ServiceItem = {
  description: string;
  href: string;
  Icon: RemixiconComponentType;
  title: string;
};

const services: Record<Audience, ServiceItem[]> = {
  companies: [
    {
      description:
        "M&A advisory covering strategy, preparation, value-creation, deal structuring, and negotiation for successful exits.",
      href: "/services/companies/m-a",
      Icon: RiArrowLeftRightLine,
      title: "M&A",
    },
    {
      description:
        "Fundraising activities, spanning preparation to deal closing, for early and later-stage businesses.",
      href: "/services/companies/fundraising",
      Icon: RiLineChartLine,
      title: "Fundraising",
    },
    {
      description:
        "Strategic projects with a focus on growth, capital allocation, and future financing rounds.",
      href: "/services/companies/corporate-finance",
      Icon: RiCircleLine,
      title: "Corporate finance",
    },
  ],
  investors: [
    {
      description:
        "Generation of high-quality deal flow to execute your investment strategy.",
      href: "/services/investors/deal-origination",
      Icon: RiRadarLine,
      title: "Deal origination",
    },
    {
      description:
        "Management of the end-to-end deal process, from analysis to closing.",
      href: "/services/investors/deal-evaluation",
      Icon: RiScalesLine,
      title: "Deal evaluation",
    },
    {
      description:
        "Oversight and optimization of investments to enhance performance and drive growth.",
      href: "/services/investors/commercial-due-diligence",
      Icon: RiSearchEyeLine,
      title: "Commercial due diligence",
    },
  ],
};

export function HomeServices() {
  const [audience, setAudience] = useState<Audience>("companies");
  const items = services[audience];

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-heading text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
            Our services
          </h2>
          <div className="flex items-center gap-6 text-sm md:text-base">
            {(["companies", "investors"] as const).map((a) => (
              <button
                aria-pressed={audience === a}
                className={cn(
                  "flex items-center gap-2 transition-colors",
                  audience === a
                    ? "text-navy-700"
                    : "text-gray-400 hover:text-gray-500",
                )}
                key={a}
                onClick={() => setAudience(a)}
                type="button"
              >
                <span
                  aria-hidden
                  className={cn(
                    "size-1.5 rounded-full transition-colors",
                    audience === a ? "bg-navy-700" : "bg-transparent",
                  )}
                />
                <span>for {a}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {items.map((service) => (
            <Link
              className="group flex flex-col gap-5"
              href={service.href}
              key={service.href}
            >
              <service.Icon
                aria-hidden="true"
                className="size-6 text-navy-700"
              />
              <h3 className="font-heading text-3xl leading-tight font-medium text-navy-700 group-hover:text-navy-900 md:text-4xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
