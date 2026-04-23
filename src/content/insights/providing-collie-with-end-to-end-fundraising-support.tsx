import type { Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "Case study",
  excerpt:
    "Read how we supported Collie in their fundraising journey, refining their equity story, strengthening investor materials, and positioning them for a successful Seed round.",
  image: "/images/insights/providing-collie-with-end-to-end-fundraising-support-hero.webp",
  publishedAt: "2026-03-23",
  slug: "providing-collie-with-end-to-end-fundraising-support",
  title: "Providing Collie with end-to-end fundraising support",
};

export default function Body() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Introduction to Collie
      </h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Collie has developed a deep-tech virtual fencing and cow guidance system
        for sustainable and regenerative dairy farming.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The Collie collar uses gentle techniques to train cows to respond to
        sounds and vibrations. Through this cow training process and within a
        matter of days, farmers are able to monitor, move, and contain cows
        anywhere on their farm using their smartphone. Their technology replaces
        traditional fencing, reducing labor, improving animal welfare, and
        enhancing milk production.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Collie&apos;s solution cuts daily labor by up to three hours, improves
        grazing efficiency, and contributes to more sustainable and profitable
        farming practices.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        The Challenge
      </h2>
      <h3 className="mt-2 font-heading text-xl font-medium text-navy-700">
        Difficulty advancing investor meetings toward closing
      </h3>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Before working with us, Collie had established a small network of
        interested VC firms, corporate VCs, and angel investors, but struggled
        to convert interest into firm commitments. Despite engaging with
        investors, closing deals remained their primary obstacle. Seeking
        support in preparation, investor relations, and deal execution, Collie
        approached us to enhance their fundraising efforts. Upon review, we
        identified critical gaps in their investment deck, financial model, and
        other supporting materials, which required refinement to strengthen
        their approach. By addressing these opportunities, we improved
        Collie&apos;s positioning, enabling them to close a €2,000,000 round.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        Our approach
      </h2>
      <h3 className="mt-2 font-heading text-xl font-medium text-navy-700">
        Laying the foundation for their fundraise
      </h3>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        To support Collie in securing their funding, we conducted a one-month
        preparation phase, refining their investment materials and financial
        model to strengthen their positioning. Over the following two months,
        we actively sourced well-fitting investors, expanded their network, and
        facilitated investor discussions.
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-gray-500">
        <li>Comprehensive pre-fundraise preparation</li>
        <li>Ideal investor sourcing</li>
        <li>Negotiation and deal support</li>
      </ul>

      <h2 className="mt-8 font-heading text-2xl font-medium text-navy-700">
        The results
      </h2>
      <h3 className="mt-2 font-heading text-xl font-medium text-navy-700">
        Closing a successful €2M round
      </h3>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Within a month of sourcing, we successfully secured an introduction to
        Collie&apos;s new lead investor, who promptly issued a term sheet. Four
        months later, the transaction was finalized, ensuring Collie obtained
        the necessary funding to drive their growth.
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-gray-500">
        <li>€2 million raised</li>
        <li>1 month to find a lead investor</li>
        <li>&lt;4 months to close their financing round</li>
        <li>1 month to complete pre-fundraising preparation</li>
      </ul>
    </div>
  );
}
