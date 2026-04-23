import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "News",
  excerpt:
    "Exploring the Digital Technology sector within deep tech — key innovations, 2024 investment trends, and what to watch in the second half of 2025.",
  image: "/images/insights/digital-technology-sector-deep-dive-hero.png",
  publishedAt: "2025-07-18",
  slug: "digital-technology-sector-deep-dive",
  title: "Digital Technology Sector Deep Dive",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        As mentioned in our most recent blog post, the following weeks will be
        dedicated to exploring each of the Evolute &ldquo;sectors of
        deeptech.&rdquo; In the previous blog, we defined what deep tech is, a
        fluid term used to categorize startups based on novel scientific
        discovery and significant scientific research. Since this term
        encompasses a wide umbrella of companies, further segmentation of the
        key industries active within deep tech allows for a better
        understanding. For the first week, we have chosen to dive into the
        Digital Technology sector.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Definition of Digital Technology
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The digital technology sector encompasses a broad spectrum of
        innovations, focusing on software applications across various
        industries. While not necessarily focusing on hardware, there are
        situations where overlap occurs, which is important to recognize, such
        as in spaces like quantum computing. Key examples include artificial
        intelligence (AI), which drives automation and enables predictive
        analytics to improve efficiency and decision-making; quantum computing,
        which shows potential in solving complex optimization problems beyond
        the capacity of traditional computing; cloud infrastructure, with
        on-demand data processing and storage, and cybersecurity, tools that
        offer critical capabilities in detecting and responding to digital
        threats.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        These technologies are enhancing existing systems and creating new
        functionalities. Photonics, for example, supports high-speed data
        transmission and precise marking applications. Sensors embedded in
        devices and environments enable real-time monitoring, supporting uses
        from industrial automation to environmental analysis. Meanwhile, smart
        infrastructure — integrating data, automation, and connectivity —
        facilitates more efficient urban planning, energy usage, and mobility
        management.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Collectively, these innovations are transforming digital and physical
        systems. They expand operational capabilities, optimize resource use,
        and open new pathways for growth and sustainability. As digital
        technology continues to evolve, it remains a foundational driver of
        change across sectors.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Digital Technology 2024 Performance
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Digital Technology is arguably the largest sector when looking at
        overall funding. In 2024, EU deep tech investments surpassed 20% of all
        EU VC funding. Digital technology mega deals played a significant role
        in boosting the proportion of deep tech funding with deals like
        Wayve&apos;s $960m round or Mistral AI raising $1b. Looking beyond the
        EU and ignoring the outliers, this sector still saw strong growth in
        all stages of funding. In 2024 alone, just over 2600 venture and M&amp;A
        deals were recorded, accounting for $24.4 billion worth of deep tech
        investment and almost 17,000 investors. All stages of the VC funnel had
        strong activity, with the majority of all deals being under $10m, where
        average deal size (excluding outliers) was $1.63 million. When breaking
        down by stage, 30% were seed rounds, 16% were early-stage VC, 18% were
        late-stage VC, and the rest were classified as M&amp;A, refinancing, or
        other.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        2025 Outlook
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Some key spaces to watch in the second half of 2025 include LLM agents,
        quantum sensing, high-performance/quantum computing, and photonics.
        These spaces have reported H1 metrics higher than last year in deal
        volume, total capital invested, and average age of companies, proving
        market validation and strengthening the later-stage pipelines.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The digital technology sector remains a cornerstone of the deep tech
        landscape, underpinning innovation across industries through continued
        investment and technological breakthroughs. As monitoring evolves
        across these sub-verticals, digital tech continues driving market
        momentum and shaping deep tech&apos;s future.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="mt-8 w-full rounded-xl"
        src="/images/insights/digital-technology-sector-deep-dive-figure.png"
      />
      <p className="text-sm italic text-gray-400">
        All data used in this report is sourced from Pitchbook.
      </p>
    </div>
  );
}
