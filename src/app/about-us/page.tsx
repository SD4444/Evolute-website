import { type Metadata } from "next";
import Link from "next/link";

import { AskRobCard } from "@/components/ask-rob-card";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";

export const metadata: Metadata = {
  description:
    "Learn about Evolute, our mission, and the team helping technology companies navigate key inflection points in their growth.",
  title: "About us",
};

export default function Page() {
  return (
    <>
      <Hero title="About us" variant="light" />

      <PageSection className="border-t border-rule pt-0 md:pt-0">
        <div className="divide-y divide-navy-700/10 border-b border-rule">
          <article className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 py-16 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8 md:py-20">
            <p className="font-heading text-[0.6875rem] tracking-[0.18em] text-gray-500">01</p>
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-4xl leading-[1.05] tracking-[-0.03em] text-navy-700 md:text-5xl">
                Evolute explained
              </h2>
              <p className="max-w-[70ch] text-base leading-relaxed text-gray-500 md:text-lg">
                The <strong className="font-semibold text-navy-700">evolute</strong> is the locus of
                points that define the centers of curvature along a curve, guiding design in fields
                like geometry and robotics. Just as an evolute reveals the underlying structure of a
                shape, a well-crafted growth and financing strategy shapes a company&rsquo;s
                trajectory. Inspired by this concept, we help tech companies navigate key inflection
                points along their growth paths.
              </p>
            </div>
          </article>

          <article className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 py-16 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8 md:py-20">
            <p className="font-heading text-[0.6875rem] tracking-[0.18em] text-gray-500">02</p>
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-4xl leading-[1.05] tracking-[-0.03em] text-navy-700 md:text-5xl">
                Our mission
              </h2>
              <p className="max-w-[70ch] text-base leading-relaxed text-gray-500 md:text-lg">
                At Evolute, our mission is simple yet powerful: to help innovative companies reach
                their full potential. We thrive on working alongside those pushing the boundaries of
                technology. With years of experience, we understand how products come to life, what
                drives successful company growth, and how to navigate capital markets. Our team
                helps companies cut through the noise and focus on what truly matters, ensuring they
                build businesses that are not only investable, but sustainable.
              </p>
            </div>
          </article>

          <article className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 py-16 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8 md:py-20">
            <p className="font-heading text-[0.6875rem] tracking-[0.18em] text-gray-500">03</p>
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-4xl leading-[1.05] tracking-[-0.03em] text-navy-700 md:text-5xl">
                <Link
                  className="group inline-flex items-center gap-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-4"
                  href="/team"
                >
                  Our team
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              </h2>
              <p className="max-w-[70ch] text-base leading-relaxed text-gray-500 md:text-lg">
                Our team has expertise in finance, venture capital, asset management,
                entrepreneurship, and consultancy. This diverse background allows us to view
                challenges through multiple lenses, leading to creative and effective solutions. We
                blend strategic insight with hands-on execution, ensuring our advice delivers
                tangible results. Above all, we treat every collaboration as if it were our only
                one, working closely with clients to achieve the best possible outcome. Focused.
                Strategic. Results-driven.
              </p>
            </div>
          </article>
        </div>
      </PageSection>

      <AskRobCard
        cta="Contact Evolute"
        eyebrow="Start a conversation"
        title="Talk to us about your next capital move."
      />
    </>
  );
}
