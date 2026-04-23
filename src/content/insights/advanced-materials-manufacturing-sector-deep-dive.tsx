import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "News",
  excerpt:
    "A brief overview of the Advanced Materials & Manufacturing sector supported by market data and a discussion of the booming sub-verticals to watch.",
  image: "/images/insights/advanced-materials-manufacturing-sector-deep-dive-hero.png",
  publishedAt: "2025-07-18",
  slug: "advanced-materials-manufacturing-sector-deep-dive",
  title: "Advanced Materials & Manufacturing Sector Deep Dive",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Definition of Advanced Materials &amp; Manufacturing
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The advanced materials and manufacturing sector comprises technologies
        innovating how we design, produce, and deploy tangible products,
        offering solutions across a wide range of industries. This sector
        includes a diverse range of advancements such as 3D printing, research
        and application in nanomaterials, advanced composites for lightweight
        strength, photonics for precision applications, and robotics.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Beyond traditional manufacturing, these innovations enable smarter,
        more sustainable production ecosystems, reshaping everything from
        material selection to delivery. Autonomous manufacturing processes,
        AI-driven optimization engines, collaborative robotics for flexible
        production, high-performance alloys for critical applications, smart
        materials with adaptive properties, and circular manufacturing
        strategies are all major innovators in this industry.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Advanced Materials &amp; Manufacturing 2024 Performance
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        As demand in key industries like housing and e-commerce continues to
        rise, the need for creative solutions within this vertical is becoming
        of increasing importance. Compared to 2023, deal volume in 2024 was
        down 12% YoY for a total of 1593 recorded deals. Total capital raised
        was also down with M&amp;A and VC investors, likely the result of fewer
        deals, but also attributable to smaller deals in 2024, with the median
        deal size slightly down as well to $1.2m. This data is on par with the
        past few years where investor interest in this space has continued to
        slowly wane. When adjusting for outliers, this space saw an average
        deal size of $2m. Breaking down by deal stage, 24% were classified as
        seed, 17% as early-stage VC, 24% as later-stage VC, and 6% classified
        as M&amp;A, with the rest being grants, refinancing, or other. Despite
        M&amp;A deals making up significantly less proportionally than VC
        funding deals when it came to the size of the deals, mega acquisitions
        were the highlight of the year, with Nakamura Jidoki and Sign
        Essentials both being above $2.5b. Unlike other sectors we have
        explored, advanced manufacturing has one of the highest percentages of
        later-stage deals, ultimately reflecting investor confidence in the
        ability of these scale-ups to continue growing.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        2025 Outlook
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Despite the cold shoulder this sector is experiencing from investors,
        there are several niche spaces within the sector to watch in the second
        half of 2025 — carbon nanotubes, industrial workplace safety, mining
        tech, and deep-sea mining. These spaces have reported H1 metrics higher
        than last year in deal volume, total capital invested, and average age
        of companies. Proving market validation and hopefully strengthening the
        later stages and leading to continued M&amp;A activity.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The advanced material and manufacturing sector is extremely important
        to the supply chain and B2B backbone of the global economy. As we
        continue to monitor these evolving sub-verticals, it is clear that this
        space will continue to innovate.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="mt-8 w-full rounded-xl"
        src="/images/insights/advanced-materials-manufacturing-sector-deep-dive-figure.png"
      />
    </div>
  );
}
