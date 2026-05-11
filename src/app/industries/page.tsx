import type { Metadata } from "next";
import Link from "next/link";

import { AskRobCard } from "@/components/ask-rob-card";
import { ClientLogoCloud } from "@/components/client-logo-cloud";
import { Hero } from "@/components/hero";
import { LogoMark } from "@/components/brand/logo";
import { PageSection } from "@/components/page-container";
import { industries } from "@/lib/content/industries";
import type { AccentTone } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industries — Evolute Partners",
  description:
    "Where Evolute deploys capital and expertise: digital technology, energy, food, mobility, materials, and life sciences.",
};

const toneBg: Record<AccentTone, string> = {
  lilac: "bg-accent-lilac",
  lime: "bg-accent-lime",
  rose: "bg-accent-rose/70",
  sage: "bg-accent-sage",
  sand: "bg-accent-sand",
  sky: "bg-accent-sky/80",
};

const toneInk: Record<AccentTone, string> = {
  lilac: "text-accent-violet",
  lime: "text-accent-olive",
  rose: "text-accent-rose-dk",
  sage: "text-accent-forest",
  sand: "text-accent-clay",
  sky: "text-accent-ocean",
};

export default function IndustriesPage() {
  return (
    <>
      <Hero
        variant="light"
        eyebrow="Industries"
        title="Where we deploy capital and expertise."
        subtitle="Six sectors at the frontier of deep tech, each with its own dynamics, capital cycles, and value-creation playbooks."
      />

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <Link
              className={cn(
                "group flex flex-col gap-6 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10",
                toneBg[industry.tone],
              )}
              href={`/industries/${industry.slug}`}
              key={industry.slug}
            >
              <div className="flex items-start justify-between gap-4">
                <LogoMark
                  className={cn("size-10 shrink-0", toneInk[industry.tone])}
                />
                <span
                  className={cn(
                    "font-mono text-[0.6875rem] tracking-[0.2em] uppercase",
                    toneInk[industry.tone],
                  )}
                >
                  {industry.themes.length} themes
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1] font-medium tracking-tight text-navy-700">
                  {industry.title}
                </h3>
                <p className="text-base text-navy-700/80 md:text-lg">
                  {industry.subtitle}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {industry.themes.slice(0, 3).map((theme) => (
                  <li
                    className={cn(
                      "rounded-full bg-white/40 px-3 py-1 text-xs",
                      toneInk[industry.tone],
                    )}
                    key={theme.title}
                  >
                    {theme.title}
                  </li>
                ))}
              </ul>

              <span
                className={cn(
                  "mt-auto inline-flex items-center gap-2 text-sm transition-transform group-hover:translate-x-1",
                  toneInk[industry.tone],
                )}
              >
                Explore {industry.title} →
              </span>
            </Link>
          ))}
        </div>
      </PageSection>

      <ClientLogoCloud />
      <AskRobCard />
    </>
  );
}
