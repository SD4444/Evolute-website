import { type Metadata } from "next";

import { AskRobCard } from "@/components/ask-rob-card";
import { LogoMark } from "@/components/brand/logo";
import { Hero } from "@/components/hero";
import { ContentRail, PageSection } from "@/components/page-container";

export const metadata: Metadata = {
  description:
    "Evolute specialises in corporate finance for tech pioneers — visionary founders who push boundaries and see their companies as catalysts for the future.",
  title: "About us — Evolute Partners",
};

const principles = [
  {
    description:
      "We work like an embedded transaction and capital strategy team, not a detached advisory layer.",
    title: "Built alongside founders",
  },
  {
    description:
      "Every mandate is grounded in structured analysis, proprietary research, and tight process control.",
    title: "Data-led by default",
  },
  {
    description:
      "Our sector lens stays fixed on deep tech, where technical nuance and capital timing matter most.",
    title: "Focused on frontier sectors",
  },
];

const valueAreas = [
  "Fundraising and investor positioning",
  "M&A preparation, process design, and execution",
  "Corporate finance strategy for growth and exits",
  "Support for investors evaluating deep tech opportunities",
];

export default function Page() {
  return (
    <>
      <Hero
        variant="light"
        eyebrow="About us"
        title="Capital partners for deep tech"
        subtitle="Evolute specialises in corporate finance for tech pioneers — visionary founders who push boundaries and see their companies as catalysts for the future."
      />

      <PageSection>
        <ContentRail>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-gray-500 uppercase">
                Our role
              </p>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
                Strategic corporate finance for companies shaping the future.
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-navy-700 md:text-xl">
                We focus on growth capital, M&amp;A, and corporate finance
                strategy for ambitious companies and the investors backing them.
              </p>
              <p className="text-base leading-relaxed text-gray-500 md:text-lg">
                Our mission is to help deep tech teams navigate complex capital
                markets with clearer positioning, stronger process discipline,
                and better information at the moments that matter most.
              </p>
              <p className="text-base leading-relaxed text-gray-500 md:text-lg">
                The work spans fundraising, transactions, strategic finance, and
                investor support, but the operating model stays consistent: we
                act as an extension of the team and stay close to execution.
              </p>
            </div>
          </div>
        </ContentRail>
      </PageSection>

      <PageSection className="bg-[var(--background-alt)]">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article className="rounded-3xl bg-white p-8" key={principle.title}>
              <LogoMark className="size-6 text-navy-700" />
              <h3 className="mt-8 font-heading text-2xl font-medium text-navy-700">
                {principle.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <ContentRail>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
            <div>
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-gray-500 uppercase">
                Where we add value
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
                Support that stays practical from first brief to close.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {valueAreas.map((item) => (
                <div
                  className="border-b border-navy-700/10 pb-4 text-lg text-navy-700"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ContentRail>
      </PageSection>

      <AskRobCard
        eyebrow="Start a conversation"
        title="Talk to us about your next capital move."
        cta="Contact Evolute"
      />
    </>
  );
}
