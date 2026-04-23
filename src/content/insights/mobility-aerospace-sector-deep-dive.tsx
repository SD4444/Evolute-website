import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "News",
  excerpt:
    "A sector that saw modest performance last year but is arguably going to be one of the biggest in 2025: mobility & aerospace.",
  image: "/images/insights/mobility-aerospace-sector-deep-dive-hero.png",
  publishedAt: "2025-07-18",
  slug: "mobility-aerospace-sector-deep-dive",
  title: "Mobility & Aerospace in Deep Tech: Performance in 2024 & Outlook for 2025",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Definition of Mobility &amp; Aerospace
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The mobility &amp; aerospace sector comprises technologies improving
        how we move, connect, and explore, offering transformative solutions
        for all types of travel. This domain includes advancements like
        autonomous and alternatively powered vehicles, next-gen propulsion
        systems, and drone technologies. Spanning logistics to surveillance and
        defense.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        In addition, these technologies enable smarter infrastructure and
        increase global communication. From reducing the barriers to space
        flight and satellite-based internet access to creating next-generation
        military drones, the mobility and aerospace sector is at the forefront
        of building a more efficient, interconnected and safer world.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Mobility &amp; Aerospace 2024 Performance
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Fueled by the modern space race, geo-political tensions, and the
        pursuit of autonomous vehicles, this sector has surged into the
        spotlight in the past year. The poster child of the year for this
        sector was undoubtedly Waymo, the autonomous taxi company, with their
        $5B raise at a $41B valuation. The Waymo raise in general reflected
        investor sentiment toward autonomous vehicle software and capabilities.
        Compared to 2023, deal volume saw modest growth, with ~7% more deals
        occurring in 2024 for a total of 308 recorded deals; with outliers
        removed, total capital raised stayed consistent YoY. Breaking down by
        deal stage, approximately 14% were classified as seed, 18% as
        early-stage VC, and 32% were classified as later-stage VC, with the
        rest being M&amp;A, IPO, grants, refinancing, or other. This space was
        especially unique to watch last year, given their bucking of typical VC
        trends and seeing stronger activity in later-stage deals than early
        stage. Ultimately signalling that investors believe there is extreme
        room for growth beyond their billion-dollar investments.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        2025 Outlook
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        While global sentiment on electric vehicles may be cooling, other areas
        of this sector continue to grow; some key segments to watch in the
        second half of 2025 include air taxis, autonomous delivery, in-space
        manufacturing, and electric flight. All in addition to the current boom
        in defense tech. These spaces have reported H1 metrics higher than last
        year in deal volume, total capital invested, and average age of
        companies, proving market validation and strengthening the later-stage
        pipelines.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The mobility and aerospace sector is extremely cyclical; however, given
        the growing global demand for these types of technologies, it is
        becoming a key sector of the deep tech landscape and a reflection of
        societal ambitions to build a safer, more autonomous society. All
        while continuing to find the quickest way off the planet. As we monitor
        these evolving sub-verticals, it&apos;s clear that mobility and
        aerospace will continue to blast off.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="mt-8 w-full rounded-xl"
        src="/images/insights/mobility-aerospace-sector-deep-dive-figure.png"
      />
    </div>
  );
}
