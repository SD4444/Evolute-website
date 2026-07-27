import { type Metadata } from "next";

import { AskRobCard } from "@/components/ask-rob-card";
import { DisclosureList } from "@/components/disclosure-list";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { TeamRoster } from "@/components/team-roster";
import { teamMembers } from "@/lib/content/team";

export const metadata: Metadata = {
  description:
    "Meet the Evolute team combining corporate finance, investment, operational, and entrepreneurial experience.",
  title: "Team",
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

      <PageSection className="border-t border-rule">
        <TeamRoster photos={teamMembers.map((member) => ({ alt: member.name, src: member.photo }))}>
          <DisclosureList
            items={teamMembers.map((member) => ({
              description: (
                <div className="flex flex-col gap-8">
                  <p className="text-lg leading-relaxed text-navy-700">{member.introduction}</p>
                  <div className="flex flex-col gap-4">
                    <p className="text-[0.6875rem] tracking-[0.18em] text-gray-500 uppercase">
                      Background
                    </p>
                    <div className="flex flex-col gap-4">
                      {member.background.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  {member.outsideWork ? (
                    <div className="flex flex-col gap-3 border-t border-rule pt-6">
                      <p className="text-[0.6875rem] tracking-[0.18em] text-gray-500 uppercase">
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
        </TeamRoster>
      </PageSection>

      <AskRobCard
        cta="Contact Evolute"
        eyebrow="Start a conversation"
        title="Talk to the team about your next capital move."
      />
    </>
  );
}
