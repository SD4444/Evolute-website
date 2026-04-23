import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "Blog",
  excerpt:
    "Deep technology has become a popular term in the venture capital space, but what does it actually mean? We unpack the definition and why it matters.",
  image: "/images/insights/evolute-what-is-deep-tech-hero.jpg",
  publishedAt: "2025-07-17",
  slug: "evolute-what-is-deep-tech",
  title: "Evolute: What is Deep Tech?",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Deep Technology or Deep Tech?
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Deep technology or &ldquo;deep tech&rdquo; has become a popular term in
        the venture capital space, but what does it mean? A quick search would
        tell you it refers to startups built on &ldquo;significant scientific or
        engineering advances.&rdquo; While this definition is true, it only
        scratches the surface. At Evolute, we work with founders and investors
        across the tech spectrum and believe that it is worth unpacking what the
        term really means and why it matters.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The term was first introduced by Swati Chaturvedi, CEO and co-founder of
        Propel(x) in 2014 to describe startups whose innovation was rooted in
        novel scientific discovery or significant research and development, well
        surpassing incremental innovation. In the following years, the term
        increased in popularity. In 2024, companies defined as deep tech
        accounted for almost 20% of all VC funding in Europe, raising
        approximately €14bn. Yet even as the label gains traction, there is
        still no universally accepted definition. What separates a deep tech
        company from a &ldquo;regular&rdquo; tech one isn&apos;t always obvious.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Ultimately there is no one definition of the term and no hard cut-off on
        what constitutes a deep tech startup as opposed to a regular tech
        startup, however, there are some ways to identify a deep tech startup
        from your traditional tech ones.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Deep tech vs. Traditional Tech
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        What sets deep tech apart from traditional tech is not simply the use of
        advanced technology, but the origin, complexity, and time horizon of
        innovation.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Traditional tech companies often focus on business model innovation,
        software development, or the application of existing technologies to new
        markets. These businesses can scale quickly, with relatively low capital
        intensity and shorter product development cycles.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Deep tech ventures, by contrast, are built on scientific discovery or
        engineering breakthroughs — often developed over years of research.
        Their teams typically include domain experts, scientists, and engineers
        working at the frontier of what is technically possible.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The path to market is typically longer and more resource-intensive.
        These businesses often face higher technical risk, longer development
        timelines, and may need to navigate complex regulatory or infrastructure
        environments. As a result, they require patient capital and a different
        approach to company building.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Evolute Deep Tech Sectors
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        At Evolute, we have chosen to segment to another degree and have defined
        key segments within deep tech (keep posted for further blog posts
        delving into each of the sectors):
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-gray-500">
        <li>
          <strong>Digital Technology:</strong> Including but not limited to
          artificial intelligence, quantum computing, cloud infrastructure, or
          cybersecurity.
        </li>
        <li>
          <strong>Energy &amp; Sustainability:</strong> Including but not
          limited to carbon capture, sustainable fuels, or hydrogen technology.
        </li>
        <li>
          <strong>Food &amp; Agri:</strong> Including but not limited to insect
          protein, precision agriculture, or sustainable fertilizers.
        </li>
        <li>
          <strong>Mobility &amp; Aerospace:</strong> Including but not limited
          to urban air mobility, advanced propulsion systems, or satellite
          imaging.
        </li>
        <li>
          <strong>Advanced Materials &amp; Manufacturing:</strong> Including but
          not limited to additive manufacturing, photonics, nanomaterials, or
          semiconductors.
        </li>
        <li>
          <strong>Health &amp; Life Sciences:</strong> Including but not limited
          to precision medicine, biopharmaceuticals, longevity, or precision
          oncology.
        </li>
      </ul>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Deep tech is about bold ideas backed by science. At Evolute, we support
        founders tackling complex problems with long-term impact. If you are a
        deep tech founder or investor looking for a capital partner or just
        interested in learning more, email info@evolute.partners, and stay tuned
        as we explore each deep tech sector in more detail.
      </p>
    </div>
  );
}
