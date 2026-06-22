import { type Metadata } from "next";

import { AskRobCard } from "@/components/ask-rob-card";
import { DisclosureList } from "@/components/disclosure-list";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { teamMembers } from "@/lib/content/team";

export const metadata: Metadata = {
  description:
    "Meet the Evolute team combining corporate finance, investment, operational, and entrepreneurial experience.",
  title: "Team | Evolute Partners",
};

export default function TeamPage() {
  return (
    <>
      <Hero
        eyebrow="Team"
        subtitle="Our team combines corporate finance, investment, operational, and entrepreneurial experience to deliver clear thinking and disciplined execution."
        title="The people behind the process"
        variant="light"
      />

      <PageSection className="border-t border-navy-700/10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-20">
          <div className="flex max-w-lg flex-col gap-4">
            <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-gray-500 uppercase">
              Our team
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
              Focused, strategic, hands-on
            </h2>
          </div>

          <DisclosureList
            items={teamMembers.map((member) => ({
              description: (
                <div className="flex flex-col gap-8">
                  <p className="text-lg leading-relaxed text-navy-700">{member.introduction}</p>
                  <div className="flex flex-col gap-4">
                    <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-gray-500 uppercase">
                      Background
                    </p>
                    <div className="flex flex-col gap-4">
                      {member.background.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  {member.outsideWork ? (
                    <div className="flex flex-col gap-3 border-t border-navy-700/10 pt-6">
                      <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-gray-500 uppercase">
                        Outside of work
                      </p>
                      <p>{member.outsideWork}</p>
                    </div>
                  ) : null}
                </div>
              ),
              eyebrow: member.role,
              title: member.name,
            }))}
            name="team-members"
          />
        </div>
      </PageSection>

      <AskRobCard
        cta="Contact Evolute"
        eyebrow="Start a conversation"
        title="Talk to the team about your next capital move."
      />
    </>
  );
}
