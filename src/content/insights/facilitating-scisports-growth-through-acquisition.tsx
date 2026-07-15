import { type CaseStudy, type Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "Case study",
  excerpt:
    "SciSports is a global leader in AI-driven football analytics, helping clubs, federations, and agents make smarter decisions in performance and recruitment.",
  image: "/images/insights/facilitating-scisports-growth-through-acquisition-hero.jpeg",
  imageFit: "contain",
  publishedAt: "2025-02-06",
  slug: "facilitating-scisports-growth-through-acquisition",
  title: "Facilitating SciSports' growth through acquisition",
};

export const caseStudy: CaseStudy = {
  about: [
    {
      label: "Industry",
      value:
        "Digital technology, artificial intelligence, machine learning, vision AI, sports tech",
    },
    { label: "Stage", value: "Acquisition" },
    { label: "Year founded", value: "2012" },
    { label: "Location", value: "Netherlands" },
    {
      label: "Focus",
      value: "Acquisition preparation, asset creation",
    },
  ],
  person: {
    image: "/images/insights/scisports-vincent-van-renesse.jpeg",
    name: "Vincent van Renesse van Duivenbode",
    quote:
      "Evolute provided a highly professional service, efficiently addressing the key aspects of our process. Their structured approach and clear communication made collaboration seamless. They delivered a top-tier investor deck that truly reflected our vision and needs. Thanks to their expertise, we secured a new investor within just three months.",
    role: "Founder and CEO of SciSports",
  },
};

export default function Body() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="mt-8 font-heading text-2xl text-navy-700">Introduction to SciSports</h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        SciSports is a global leader in AI-driven football analytics, delivering real-time,
        actionable insights into player and team performance. Their innovative solution empowers
        clubs, federations, agents, and analysts to make data-driven decisions in performance
        optimization, match strategy, and recruitment, ensuring a competitive edge in the fast-paced
        world of football.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        With a database of over 275,000 professional and senior players and a track record of
        serving more than 180 teams globally, SciSports has established itself as a trusted partner
        in sports intelligence, for customers such as the KNVB, ESPN, Ajax and Juventus, among
        others.
      </p>

      <h2 className="mt-8 font-heading text-2xl text-navy-700">The challenge</h2>
      <h3 className="mt-2 font-heading text-xl text-navy-700">
        Preparing SciSports for a successful transaction
      </h3>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        SciSports had built an impressive product and client base in Europe, but needed to refine
        its company narrative to attract strategic buyers. To maximize their valuation and
        positioning, they needed a compelling story that clearly articulated their market
        opportunity, technological edge, and growth potential.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        While SciSports had strong traction in Europe, their positioning towards investors lacked a
        cohesive structure covering critical aspects such as their go-to-market strategy, technology
        roadmap, commercial expansion plans, and competitive positioning in the market. To address
        this, they engaged us to enhance their investor materials and guide them through the
        acquisition preparation process.
      </p>

      <h2 className="mt-8 font-heading text-2xl text-navy-700">Our approach</h2>
      <h3 className="mt-2 font-heading text-xl text-navy-700">
        Crafting a compelling acquisition narrative with supporting materials
      </h3>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        To strengthen SciSports&apos; positioning, we worked closely with their leadership team to
        refine their story and structure their pitch deck and supporting materials. This involved
        in-depth discussions on their:
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-gray-500">
        <li>
          <strong>Go-to-market strategy:</strong> Defining &amp; quantifying key revenue drivers and
          expansion plans
        </li>
        <li>
          <strong>Technology &amp; roadmap:</strong> Highlighting their unique competitive advantage
          arising from their technical infrastructure and years of R&amp;D
        </li>
        <li>
          <strong>Commercial growth:</strong> Showcasing traction, partnerships, and scalability
        </li>
        <li>
          <strong>Competitive landscape:</strong> Positioning SciSports within the sports tech
          ecosystem as a unique company with significant organic and inorganic growth opportunities
        </li>
        <li>
          <strong>Market opportunity:</strong> Framing the strategic value of the business to
          potential acquirers
        </li>
      </ul>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        We helped SciSports translate these insights into a compelling story, with supporting
        materials, that clearly communicated their value proposition, ensuring they were
        well-prepared to engage with potential buyers.
      </p>

      <h2 className="mt-8 font-heading text-2xl text-navy-700">The results</h2>
      <h3 className="mt-2 font-heading text-xl text-navy-700">SciSports successfully acquired</h3>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        By refining their story and materials, we helped SciSports strengthen their positioning,
        leading to a successful acquisition. The improved investor-facing foundation gave them the
        clarity and confidence needed to engage buyers, articulate their strategic value, and
        ultimately close the deal.
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-gray-500">
        <li>Acquired by VANAD Group</li>
        <li>2 months required for preparation</li>
        <li>40% of hours saved for the leadership team</li>
        <li>Ability to get in front of 12 potential investors within 2 weeks</li>
      </ul>
    </div>
  );
}
