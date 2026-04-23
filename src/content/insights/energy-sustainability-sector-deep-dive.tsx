import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "News",
  excerpt:
    "A brief overview of the Energy & Sustainability sector supported by market data and a discussion of the booming sub-verticals to watch.",
  image: "/images/insights/energy-sustainability-sector-deep-dive-hero.png",
  publishedAt: "2025-07-18",
  slug: "energy-sustainability-sector-deep-dive",
  title: "Energy & Sustainability in Deep Tech: Performance in 2024 & Outlook for 2025",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Definition of Energy &amp; Sustainability
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The energy &amp; sustainability sector encompasses a broad spectrum of
        innovative solutions, ranging from clean energy generation methods,
        like hydrogen, geothermal, nuclear fission, or oceanic methods, to
        energy management software for enterprises and decarbonisation
        technologies.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Innovations of this category further span into emerging sectors like
        waste management, long-duration energy storage, and circular industries
        and economies. Together, these technologies and practices are designed
        to reduce carbon footprints, conserve natural resources, and promote
        long-term ecological balance, contributing to the transition toward a
        low-carbon and sustainable economy.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Energy &amp; Sustainability 2024 Performance
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Energy &amp; sustainability is one of the most notable deep tech
        sectors when it comes to dominating the news cycle and being in the
        spotlight. When compared to 2023 figures, 2024 was relatively similar,
        with all quarters seeing slightly higher deal volume but a slight
        decrease in overall funding amount; this seeming contradiction is
        explained by fewer mega deals and overall a lower median deal value.
        However, 2024 was still no stranger to fundraising mega deals like
        Vistra Energy&apos;s $5.9 billion acquisition of Energy HBR and nine
        other M&amp;A deals being completed in the 10-figure range; another
        seven fell into the $500m – $1bn category.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Beyond these outliers, all funding stages saw strong activity. In 2024,
        752 venture and M&amp;A deals were recorded, accounting for $13bn worth
        of investment and 8300 investors. When breaking down deal activity by
        stage, 17% were seed rounds, 16% were early-stage VC, 21% were
        late-stage VC, and the rest were classified as M&amp;A, grants,
        refinancing, or other. The outlier-adjusted average deal size was
        $1.7m; this average deal size in tandem with the mega deals recorded
        signals strong activity at all stages of the funding pipeline.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        2025 Outlook
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Some growing segments based on increased investor sentiment/activity in
        the second half of 2025 include geothermal power, fusion energy,
        long-duration energy storage, and next-gen nuclear fission. These
        spaces have reported H1 metrics higher than last year in deal volume,
        total capital invested, and average age of companies, proving market
        validation and strengthening the later-stage pipelines.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The energy and sustainability sector remains a cornerstone of the deep
        tech landscape and a reflection of the zeitgeist of modern society. As
        we monitor these evolving sub-verticals, it&apos;s clear that energy
        and sustainability will continue to drive market momentum and shape
        the future of deep tech.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="mt-8 w-full rounded-xl"
        src="/images/insights/energy-sustainability-sector-deep-dive-figure.png"
      />
    </div>
  );
}
