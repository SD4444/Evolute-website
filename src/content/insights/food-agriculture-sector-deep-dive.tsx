import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "News",
  excerpt:
    "Exploring the Food & Agriculture sector within deep tech — key innovations, 2024 investment trends, and what to watch in the second half of 2025.",
  image: "/images/insights/food-agriculture-sector-deep-dive-hero.png",
  publishedAt: "2025-07-18",
  slug: "food-agriculture-sector-deep-dive",
  title: "Food & Agriculture Sector Deep Dive",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        In our last blog post, we dove into the advanced materials and
        manufacturing sector as part of our continuing series introducing each
        of six Evolute core sectors. This week will be dedicated to the final
        sector, food and agriculture.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Definition of Food &amp; Agriculture
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The food and agriculture sector comprises technologies that transform
        the food industry, from the labs, to the farms, and our kitchen tables,
        offering solutions to improve sustainability, resilience, and nutrition
        across the food chain. This sector includes a diverse range of
        advancements such as precision agriculture with drone-assisted crop
        management, IoT sensors for monitoring livestock health, cultured meat
        production for alternative proteins, autonomous harvesters and smart
        tractors for mechanized farming, and insect-based feed as a sustainable
        alternative for livestock nutrition.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Beyond food production, these innovations enable smarter agricultural
        systems that change everything from waste management to energy use.
        Waste upcycling into valuable resources, edible packaging to reduce
        plastic waste, smart greenhouses with climate-optimized environments,
        vertical farming for urban food security, and biofuel production from
        agricultural residues.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Food &amp; Agriculture 2024 Performance
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        As the global population inches closer to the 9 billion mark, we will
        need to devote considerable resources to growing food and coming up
        with creative ways to sustainably extract more output from shrinking
        space. Compared to 2023, deal volume in 2024 was on par YoY with 187
        deals recorded, and an average deal size (outlier adjusted) of $2.1m.
        Total capital raised was also on par. Breaking down by deal stage, 20%
        were classified as seed, 14% early-stage VC, 28% as later-stage VC, and
        2% as M&amp;A, with the rest being grants, refinancing, or other. This
        distribution suggests that while investor interest remains steady,
        there is a notable focus on later-stage ventures, indicating a maturing
        market, stepping away from experimental startups like meat alternatives
        and a focus on scaling proven technologies.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        2025 Outlook
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Some key segments to watch in the second half of 2025 include livestock
        health, indoor farming, cellular agriculture, and insect-based foods.
        These spaces have been particularly satisfying investor appetite in
        2025 as they have reported H1 metrics higher than last year in deal
        volume, total capital invested, and average age of companies. Proving
        market validation and hopefully strengthening the later stages and
        leading to continued M&amp;A activity.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The food and agriculture sector is arguably the most important sector
        for our everyday lives. As we continue to monitor these sub-verticals,
        it is clear that this space will continue to grow, quite literally, and
        keep sprouting new innovations that feed both people and the planet.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="mt-8 w-full rounded-xl"
        src="/images/insights/food-agriculture-sector-deep-dive-figure.png"
      />
      <p className="text-sm italic text-gray-400">
        All data used in this report is sourced from Pitchbook.
      </p>
    </div>
  );
}
