export type DeckStat = {
  aux?: string;
  caption: string;
  value: string;
};

export type DeckRailItem = {
  label: string;
  text: string;
};

export type DeckSlide =
  | {
      kind: "cover";
      title: string;
      subtitle: string;
      meta: string[];
    }
  | {
      kind: "section";
      label: string;
      headline: string;
      lead?: string;
      rails?: DeckRailItem[];
      stats?: DeckStat[];
    }
  | {
      kind: "quote";
      quote: string;
      name: string;
      role: string;
    }
  | {
      kind: "closing";
      headline: string;
      accent: string;
      sub: string;
    };

export type CaseDeck = {
  client: string;
  slides: DeckSlide[];
  slug: string;
};

export const caseDecks: Record<string, CaseDeck> = {
  "facilitating-scisports-growth-through-acquisition": {
    client: "SciSports",
    slides: [
      {
        kind: "cover",
        meta: ["Digital technology", "Acquisition", "Founded 2012", "Netherlands"],
        subtitle:
          "How a refined narrative and buyer-ready materials carried an AI football analytics leader to a successful exit.",
        title: "Facilitating SciSports' growth through acquisition",
      },
      {
        headline: "AI football analytics with a global client base.",
        kind: "section",
        label: "The company",
        lead: "SciSports delivers real-time, actionable insights into player and team performance, powering data-driven decisions in performance, match strategy, and recruitment.",
        rails: [
          {
            label: "The product",
            text: "An analytics platform trusted for performance optimisation, match strategy, and recruitment decisions at the highest level of football.",
          },
          {
            label: "The traction",
            text: "Customers include the KNVB, ESPN, Ajax, and Juventus, with a track record of serving more than 180 teams globally.",
          },
          {
            label: "The ambition",
            text: "Find a strategic owner able to accelerate the platform beyond its strong European base.",
          },
        ],
        stats: [
          { aux: "+", caption: "professional players in the database", value: "275,000" },
          { aux: "+", caption: "teams served worldwide", value: "180" },
          { caption: "founded, Netherlands", value: "2012" },
        ],
      },
      {
        headline: "The product was proven. The story was not.",
        kind: "section",
        label: "The challenge",
        lead: "SciSports had impressive technology and clients, but its positioning toward buyers lacked a cohesive structure.",
        rails: [
          {
            label: "The narrative",
            text: "Go-to-market strategy, technology roadmap, expansion plans, and competitive positioning were not yet framed as one compelling story.",
          },
          {
            label: "The goal",
            text: "Maximise valuation and attract strategic buyers by clearly articulating market opportunity, technological edge, and growth potential.",
          },
          {
            label: "The engagement",
            text: "Enhance the investor materials and guide the leadership team through acquisition preparation.",
          },
        ],
      },
      {
        headline: "One narrative, built for buyers.",
        kind: "section",
        label: "Our approach",
        lead: "Working closely with the leadership team, we refined the story and structured the pitch deck and supporting materials around five pillars.",
        rails: [
          {
            label: "Go-to-market",
            text: "Defining and quantifying key revenue drivers and expansion plans.",
          },
          {
            label: "Technology & roadmap",
            text: "Highlighting the competitive advantage arising from years of R&D and technical infrastructure.",
          },
          {
            label: "Commercial growth",
            text: "Showcasing traction, partnerships, and scalability.",
          },
          {
            label: "Competitive landscape",
            text: "Positioning SciSports as a unique platform with organic and inorganic growth opportunities.",
          },
          {
            label: "Market opportunity",
            text: "Framing the strategic value of the business to potential acquirers.",
          },
        ],
      },
      {
        headline: "SciSports, acquired.",
        kind: "section",
        label: "The results",
        lead: "The improved investor-facing foundation gave SciSports the clarity and confidence to engage buyers, articulate their strategic value, and close the deal with VANAD Group.",
        stats: [
          { caption: "months of preparation", value: "2" },
          { aux: "%", caption: "of leadership hours saved", value: "40" },
          { caption: "potential investors reached in two weeks", value: "12" },
          { caption: "months to a new investor", value: "3" },
        ],
      },
      {
        kind: "quote",
        name: "Vincent van Renesse van Duivenbode",
        quote:
          "Evolute provided a highly professional service, efficiently addressing the key aspects of our process. They delivered a top-tier investor deck that truly reflected our vision and needs. Thanks to their expertise, we secured a new investor within just three months.",
        role: "Founder and CEO of SciSports",
      },
      {
        accent: "Let's talk.",
        headline: "Considering an exit deserves preparation like this.",
        kind: "closing",
        sub: "We work as an extension of your team from strategy to closing.",
      },
    ],
    slug: "facilitating-scisports-growth-through-acquisition",
  },
  "providing-collie-with-end-to-end-fundraising-support": {
    client: "Collie",
    slides: [
      {
        kind: "cover",
        meta: ["Agritech", "Seed", "Founded 2023", "Netherlands"],
        subtitle:
          "How one month of preparation and targeted investor sourcing turned stalled conversations into a closed round.",
        title: "Providing Collie with end-to-end fundraising support",
      },
      {
        headline: "Virtual fencing for regenerative dairy farming.",
        kind: "section",
        label: "The company",
        lead: "The Collie collar trains cows to respond to sounds and vibrations, letting farmers monitor, move, and contain herds anywhere on the farm from a smartphone.",
        rails: [
          {
            label: "The product",
            text: "A deep-tech virtual fencing and cow guidance system that replaces traditional fencing entirely.",
          },
          {
            label: "The impact",
            text: "Up to three hours of daily labour saved, better grazing efficiency, improved animal welfare, and enhanced milk production.",
          },
        ],
      },
      {
        headline: "Interest was easy. Commitments were not.",
        kind: "section",
        label: "The challenge",
        lead: "Collie had a small network of interested VCs, corporate VCs, and angels, but struggled to convert interest into firm commitments.",
        rails: [
          {
            label: "The gap",
            text: "Critical gaps in the investment deck, financial model, and supporting materials weakened every conversation.",
          },
          {
            label: "The obstacle",
            text: "Despite active investor engagement, closing remained the primary hurdle.",
          },
          {
            label: "The engagement",
            text: "Support across preparation, investor relations, and deal execution.",
          },
        ],
      },
      {
        headline: "Prepare first. Then go to market.",
        kind: "section",
        label: "Our approach",
        lead: "A one-month preparation phase refined the materials and financial model, followed by two months of targeted sourcing and facilitated investor discussions.",
        rails: [
          {
            label: "Preparation",
            text: "Comprehensive pre-fundraise preparation across the deck, model, and data room.",
          },
          {
            label: "Sourcing",
            text: "Identifying and engaging well-fitting investors while expanding the network.",
          },
          {
            label: "Execution",
            text: "Negotiation and deal support through to signing.",
          },
        ],
      },
      {
        headline: "A €2 million seed round, closed.",
        kind: "section",
        label: "The results",
        lead: "Within a month of sourcing we introduced Collie's new lead investor, who promptly issued a term sheet. Four months later the transaction was finalised.",
        stats: [
          { aux: "m", caption: "raised in the round", value: "€2" },
          { caption: "month to find a lead investor", value: "1" },
          { aux: "<", caption: "months to close the round", value: "4" },
          { caption: "month of pre-fundraise preparation", value: "1" },
        ],
      },
      {
        accent: "Let's begin.",
        headline: "A raise this important deserves a process this prepared.",
        kind: "closing",
        sub: "We work as an extension of your team from preparation to closing.",
      },
    ],
    slug: "providing-collie-with-end-to-end-fundraising-support",
  },
  "supporting-horus-through-a-strategic-sale-to-nilario": {
    client: "Horus",
    slides: [
      {
        kind: "cover",
        meta: [
          "Geospatial intelligence",
          "Strategic sale",
          "Sell-side advisory",
          "Europe & United States",
        ],
        subtitle:
          "How deep immersion, a tailored transaction package, and a targeted buyer process led an infrastructure intelligence platform to the right strategic home.",
        title: "Supporting Horus through a strategic sale to Nilario",
      },
      {
        headline: "Infrastructure data, turned into intelligence.",
        kind: "section",
        label: "The company",
        lead: "Horus built something difficult to replicate: a modular platform combining mobile mapping, sensor fusion, and NVIDIA-powered edge computing to transform raw infrastructure data into actionable intelligence.",
        rails: [
          {
            label: "The platform",
            text: "Mobile mapping, sensor fusion, and edge computing in one modular stack, operating at the intersection of geospatial intelligence, infrastructure monitoring, and advanced data processing.",
          },
          {
            label: "The position",
            text: "Strong product-market fit, a clear growth trajectory, and a management team with a strong vision for the future.",
          },
          {
            label: "The moment",
            text: "The shareholders were ready for a transition, without disrupting the company's momentum.",
          },
        ],
      },
      {
        headline: "Not just a buyer. The right strategic partner.",
        kind: "section",
        label: "The challenge",
        lead: "The value of the platform was clear to customers. Communicating it to prospective acquirers required a deep understanding of both the technology and the market.",
        rails: [
          {
            label: "The complexity",
            text: "A buyer had to appreciate the sophistication of the business, the complexity of the value chain, and the strategic opportunities ahead.",
          },
          {
            label: "The condition",
            text: "The right environment for the management team and organisation to continue building on their success.",
          },
        ],
      },
      {
        headline: "Inside out first. Then to market.",
        kind: "section",
        label: "Our approach",
        lead: "Before representing the company to acquirers, we immersed ourselves in its technology, commercial model, value chain, and growth strategy, so we could position the business with confidence and credibility.",
        rails: [
          {
            label: "Transaction package",
            text: "Teaser, information memorandum, and financial model, built around the unique strengths of Horus rather than generic acquisition materials.",
          },
          {
            label: "Targeted process",
            text: "No broad auction. A carefully selected group of strategic and financial buyers across Europe and the United States, guided through a structured, stage-gated process.",
          },
          {
            label: "The strategic fit",
            text: "Nilario was actively building an Infrastructure & Environmental Monitoring platform. Horus' capabilities aligned directly with its long-term vision.",
          },
          {
            label: "Full lifecycle",
            text: "From positioning and buyer outreach through due diligence, SPA negotiations, and successful closing.",
          },
        ],
      },
      {
        headline: "Horus joined Nilario. The momentum stayed.",
        kind: "section",
        label: "The results",
        lead: "Horus became the second company within Nilario's Infrastructure & Environmental Monitoring vertical. The management team remained in place, the brand continued independently, and the roadmap stayed intact.",
        stats: [
          { caption: "months to complete the end-to-end transaction", value: "6" },
          { caption: "month to develop the transaction materials", value: "1" },
          {
            aux: "+",
            caption: "global investors and acquirers screened and qualified",
            value: "100",
          },
        ],
      },
      {
        kind: "quote",
        name: "Jakob Glasberg",
        quote:
          "Horus brings highly relevant capabilities within geospatial intelligence, software-enabled infrastructure insight, and advanced data processing.",
        role: "Nilario",
      },
      {
        accent: "Let's talk.",
        headline: "An exit that protects momentum deserves a process built for it.",
        kind: "closing",
        sub: "We work as an extension of your team from positioning to closing.",
      },
    ],
    slug: "supporting-horus-through-a-strategic-sale-to-nilario",
  },
};

export const findCaseDeck = (slug: string): CaseDeck | undefined => caseDecks[slug];
