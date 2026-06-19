import { type Metadata } from "next";
import Link from "next/link";

import { ClientLogoCloud } from "@/components/client-logo-cloud";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIndustries } from "@/components/home/home-industries";
import { HomeServices } from "@/components/home/home-services";
import { InsightCard } from "@/components/insight-card";
import { insights } from "@/lib/content/insights";

export const metadata: Metadata = {
  description:
    "Evolute specialises in corporate finance for tech pioneers: visionary founders who push boundaries and see their companies as catalysts for the future.",
};

const metrics = [
  { label: "Customers served", value: ">100" },
  { label: "capital raised & transactions", value: "€115m" },
  { label: "NPS score", value: "8.9" },
  { label: "Countries", value: ">15" },
];

const topInsights = insights.slice(0, 3);

export default async function Page() {
  return (
    <>
      <HomeHero />

      <HomeServices />

      <section className="flex min-h-screen bg-navy-700 text-white">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col justify-center gap-16 px-6 py-24 md:gap-20 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <h2 className="font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] font-medium tracking-tight">
              Our
              <br />
              highlights
            </h2>
            <dl className="grid grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16">
              {metrics.map((m) => (
                <div className="flex flex-col gap-3" key={m.label}>
                  <dd className="font-heading text-[clamp(3rem,7vw,6rem)] leading-none font-light tracking-tight">
                    {m.value}
                  </dd>
                  <dt className="text-sm text-gray-200">{m.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <ClientLogoCloud embedded variant="dark" />
        </div>
      </section>

      <HomeIndustries />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-12 px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
              Venture capital news
              <br />
              and latest investments
            </h2>
            <Link
              className="text-sm text-navy-700 underline-offset-4 hover:underline md:text-base"
              href="/insights"
            >
              See all insights →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {topInsights.map((insight) => (
              <InsightCard insight={insight} key={insight.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
