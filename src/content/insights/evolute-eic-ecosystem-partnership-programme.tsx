import { type Insight } from "@/lib/content/types";

export const meta: Insight = {
  category: "Blog",
  excerpt:
    "Evolute Partners has joined the EIC Ecosystem Partnership Programme, supporting EIC-backed deeptech companies with growth capital and M&A advisory services.",
  image: "/images/insights/evolute-eic-ecosystem-partnership-programme-hero.jpeg",
  legacyPath: "/insights/evolute-eic-ecosystem-partnership-programme",
  publishedAt: "2026-04-01",
  slug: "evolute-eic-ecosystem-partnership-programme",
  title: "Evolute joins the EIC Ecosystem Partnership Programme",
};

export default function Body() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="mt-8 font-heading text-2xl text-navy-700">EIC Ecosystem Partner</h2>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        We are pleased to share that Evolute Partners is now part of the European Innovation Council
        (EIC) Ecosystem Partnership Programme.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        As part of the programme, Evolute is included in the EIC Service Catalogue, a curated
        network of specialised organisations supporting EIC-backed companies across Europe. The
        catalogue connects EIC beneficiaries and Seal of Excellence holders with service providers
        offering support in areas such as fundraising, commercialisation, business development,
        technical validation, infrastructure access, legal support, and internationalisation.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The EIC Ecosystem Partnership Programme forms part of the EIC Business Acceleration Services
        (BAS), an initiative designed to help some of Europe&apos;s most promising technology
        companies move from innovation to commercial scale. The programme brings together
        accelerators, research organisations, venture builders, corporate partners, and specialised
        advisory firms capable of supporting highly specific needs that emerging deeptech companies
        often face.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        For Evolute, the partnership is closely aligned with the work we already do.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        We work with technology-driven and scientifically complex companies on growth capital and
        M&amp;A processes, particularly in sectors where technical progress, long development
        cycles, and difficult commercialisation paths can create a disconnect between operational
        progress and investor understanding. Many of the companies supported through the EIC operate
        in exactly this environment.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        Through the programme, Evolute provides fundraising and strategic advisory support to EIC
        beneficiaries, helping companies:
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-gray-500">
        <li>Translate technical progress into investor-ready narratives</li>
        <li>Structure institutional fundraising processes</li>
        <li>Prepare materials for investor engagement</li>
        <li>Support strategic positioning and capital strategy</li>
        <li>Navigate investor sourcing, outreach, process management, and transaction execution</li>
      </ul>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        The EIC ecosystem is increasingly becoming one of the key infrastructure layers supporting
        deeptech innovation in Europe. Beyond funding, it creates access to specialised expertise,
        commercial networks, and operational support that many early-stage and scale-up technology
        companies would otherwise struggle to access.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        We are excited to contribute to that ecosystem and to support the next generation of
        European innovators building technically ambitious businesses.
      </p>
      <p className="text-base leading-relaxed text-gray-500 md:text-lg">
        You can find Evolute&apos;s EIC partner profile at{" "}
        <a
          className="text-navy-700 underline underline-offset-4"
          href="https://partnerservices.eismea.eu/partner/evolute"
        >
          EIC Partner Services
        </a>
        . More information about the programme is available on the{" "}
        <a
          className="text-navy-700 underline underline-offset-4"
          href="https://eic.ec.europa.eu/eic-funding-opportunities/bas/eic-ecosystem-partnership-programme_en"
        >
          European Innovation Council website
        </a>
        .
      </p>
    </div>
  );
}
