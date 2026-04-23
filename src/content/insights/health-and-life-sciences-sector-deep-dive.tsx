import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "News",
  excerpt:
    "A brief overview of the Health & Life Sciences sector supported by market data and a discussion of the booming sub-verticals to watch.",
  image: "/images/insights/health-and-life-sciences-sector-deep-dive-hero.png",
  publishedAt: "2025-07-18",
  slug: "health-and-life-sciences-sector-deep-dive",
  title: "Health & Life Sciences in Deep Tech: Performance in 2024 & Outlook for 2025",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        In our last blog post we dove into the mobility and aerospace sector as
        part of our continuing series introducing each of six Evolute core
        sectors. This week will be dedicated to something that impacts us all,
        the health and life sciences sector.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Definition of Health and Life Sciences
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The health and life sciences sector comprises technologies that enhance
        how we diagnose, treat, and understand disease, offering solutions
        across the entire spectrum of care. This sector includes a diverse
        range of advancements such as gene-editing platforms like CRISPR,
        AI-driven drug-discovery engines, wearable biosensors for continuous
        health monitoring, lab-grown tissues and organs, and highly targeted
        biologic therapeutics.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Beyond direct treatment, these innovations enable smarter, more
        connected healthcare ecosystems reshaping everything from diagnostics
        to delivery, and even prevention with the increasing research into
        longevity treatments. Regenerative-medicine breakthroughs, telemedicine
        networks, real-time biosensing diagnostics, powerful bioinformatics
        pipelines, synthetic-biology toolkits, and next-generation imaging
        technologies for early disease detection are all propelling the
        industry toward a more personalized, healthier world.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Health and Life Sciences 2024 Performance
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        With an aging population and increasing rates of terminal and
        degenerative diseases worldwide, innovation in this sector cannot come
        quick enough. Compared to 2023 deal volume and total capital raised
        stayed consistent across all 4 quarters with $8.5 billion raised in
        2024. However, growth was seen in the M&amp;A space with a 10% increase
        in total capital spent accounting for $2 billion of the $8.5 billion;
        representative of a space still dominated by large pharmaceutical
        companies with money to spend on new innovations. Breaking down by deal
        stage, approximately 19% were classified as seed, 13% as early stage,
        32% were classified as later stage, 4% classified as merger/acquisition,
        with the remaining being grants, refinancing, or other. The
        proportionally low number of M&amp;A deals despite this deal type
        seeing the most YoY growth is representative of a few things. Firstly,
        of the large number of multi-billion dollar M&amp;A deals (~20
        completed above $1bn), and secondly of the lack of middle funnel
        activity in the VC space. The majority of VC deals occurred well below
        the $100m threshold which, given the capital-intensive nature of this
        space, could be representative of the boom in new ideas which are
        ultimately bought up before many can reach the markers investors look
        for in the Series B plus stages.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        2025 Outlook
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Some key segments to watch in the second half of 2025 include
        AI-powered drug discovery, longevity tech, exoskeletons and prosthetics,
        and neurotechnology. These spaces have reported H1 metrics higher than
        last year in deal volume, total capital invested, and average age of
        companies. Proving market validation and hopefully strengthening the
        later stages and leading to continued M&amp;A activity.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The health and life science sector is becoming of the utmost importance
        given the growing global demand of a sicker, aging population. As we
        monitor these evolving sub-verticals, it is clear that this space will
        continue to grow.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="mt-8 w-full rounded-xl"
        src="/images/insights/health-and-life-sciences-sector-deep-dive-figure.png"
      />
      <p className="text-sm italic text-gray-400">
        All data used in this report is sourced from Pitchbook.
      </p>
    </div>
  );
}
