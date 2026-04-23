import Link from "next/link";
import type { Metadata } from "next";

import { LogoMark } from "@/components/brand/logo";
import { ClientLogoCloud } from "@/components/client-logo-cloud";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIndustries } from "@/components/home/home-industries";
import { HomeServices } from "@/components/home/home-services";
import { InsightCard } from "@/components/insight-card";
import { insights } from "@/lib/content/insights";

export const metadata: Metadata = {
  description:
    "Evolute specialises in corporate finance for tech pioneers — visionary founders who push boundaries and see their companies as catalysts for the future.",
};

const metrics = [
  { label: "Customers served", value: ">100" },
  { label: "capital raised & transactions", value: "€115m" },
  { label: "NPS score", value: "8.9" },
  { label: "Countries", value: ">15" },
];

const principles = [
  "We are part of your team",
  "We are data-driven",
  "We are international",
];

const topInsights = insights.slice(0, 3);

export default async function Page() {
  return (
    <>
      <HomeHero />

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 md:grid-cols-[1fr_1fr] md:gap-24">
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
            Bridging capital gaps for tech.
          </h2>
          <div className="flex flex-col gap-6 md:pt-4">
            <span className="inline-flex w-fit rounded-full bg-navy-700 px-3 py-1 text-[0.6875rem] font-medium tracking-widest text-white uppercase">
              Our services
            </span>
            <p className="text-base leading-relaxed text-gray-500 md:text-lg">
              Evolute specialises in corporate finance for tech pioneers;
              visionary founders who push boundaries and see their companies
              as catalysts for the future.
            </p>
            <p className="text-base leading-relaxed text-gray-500 md:text-lg">
              We focus on growth capital and exit advisory services. Not by
              following traditional paths. Our mission is to empower founders
              with the richest data and world-class resources to navigate
              complex capital markets and achieve exits they can be proud of.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="mx-auto aspect-[16/7] w-full max-w-[1400px] overflow-hidden rounded-3xl bg-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="h-full w-full object-cover"
            src="/images/home/photo-break.jpg"
          />
        </div>
      </section>

      <HomeServices />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto w-full max-w-[1400px] rounded-3xl bg-navy-700 px-8 py-20 text-white md:px-16 md:py-28">
          <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <h2 className="font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] font-medium tracking-tight">
              Our
              <br />
              highlights
            </h2>
            <dl className="grid grid-cols-2 gap-x-10 gap-y-16">
              {metrics.map((m) => (
                <div className="flex flex-col gap-3" key={m.label}>
                  <dd className="font-heading text-[clamp(3rem,7vw,6rem)] leading-none font-light tracking-tight">
                    {m.value}
                  </dd>
                  <dt className="text-sm text-white/70">{m.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 md:grid-cols-2 md:gap-20">
          <div className="overflow-hidden rounded-3xl bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="h-full w-full object-cover"
              src="/images/home/what-sets-us-apart.jpg"
            />
          </div>
          <div className="flex flex-col gap-8 md:py-8">
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
              What sets us apart.
            </h2>
            <p className="text-base leading-relaxed text-gray-500 md:text-lg">
              With extensive experience in fundraising, operations, and
              investing, we bring a structured approach to every engagement.
              We operate as an extension of your team, adapting to
              fast-changing market conditions while staying focused on
              outcomes. Our work is grounded in data, process, and precision.
            </p>
            <ul className="flex flex-col gap-4 pt-2">
              {principles.map((p) => (
                <li
                  className="flex items-center gap-3 text-xl text-navy-700 md:text-2xl"
                  key={p}
                >
                  <LogoMark className="size-5 text-navy-700" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClientLogoCloud />

      <HomeIndustries />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12">
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
