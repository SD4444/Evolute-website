import type { MethodologyStep, Service } from "./types";

const methodology: MethodologyStep[] = [
  {
    description: "Granular analysis supported by proprietary data.",
    label: "Discovery",
    title: "Discovery",
  },
  {
    description: "Iterative process of conceptualizing and structuring.",
    label: "Design",
    title: "Design",
  },
  {
    description: "Agile and collaborative creation for sustainable growth.",
    label: "Build",
    title: "Build",
  },
  {
    description: "Disciplined sprint-based approach to implementing effectively.",
    label: "Execute",
    title: "Execute",
  },
];

export const services: Service[] = [
  {
    audience: "companies",
    capabilities: [
      {
        description:
          "Identification and evaluation of acquisition targets or buyers, aligning with strategic and financial objectives.",
        title: "Target identification",
      },
      {
        description:
          "Valuation and deal structuring to optimize price and management interests.",
        title: "Valuation & deal structuring",
      },
      {
        description:
          "Streamline financial, legal, and operational due diligence to mitigate risks and facilitate a smooth transaction.",
        title: "Due diligence management",
      },
      {
        description:
          "Support deal negotiations, optimizing terms to align with shareholder interests and post-merger success.",
        title: "Negotiation & execution",
      },
    ],
    exampleEngagement: {
      description:
        "Target identification, M&A market trend analysis, strategic M&A advisory, stakeholder coordination, business valuation, buy-side advisory, investor memorandum development, sell-side advisory, due diligence support, deal structuring and negotiation, market and industry analysis, financial modeling and forecasting.",
      title: "An example of our M&A services",
    },
    intro:
      "We help businesses navigate successful exits, management buyouts, and strategic sales. From preparation to deal structuring and negotiation, our expertise ensures a smooth process, maximizing returns while securing long-term business continuity.",
    methodology,
    slug: "m-a",
    subtitle:
      "Sell-side transactions, from strategy development to deal execution. Your partner every step of the way.",
    title: "M&A",
  },
  {
    audience: "companies",
    capabilities: [
      {
        description:
          "Align strategy, market positioning, and financial data to craft a compelling, investor-facing narrative.",
        title: "Foundation, positioning, and pitch",
      },
      {
        description:
          "Build investor-focused financial models and understand valuations to support discussions and negotiations.",
        title: "Financial modelling & valuation",
      },
      {
        description:
          "Prepare all relevant documentation for data rooms to streamline due diligence, showcase the business, and reduce deal friction.",
        title: "Due diligence support",
      },
      {
        description:
          "Identify the ideal investors based on stage, sector, and investment strategy, ensuring efficient outreach and conversions.",
        title: "Investor targeting and outreach",
      },
    ],
    intro:
      "We help high-potential tech companies secure the right funding, from early to mature rounds. Our tailored financial solutions align with long-term goals, guiding companies through complex capital markets, attracting top investors, and driving steady growth.",
    methodology,
    slug: "fundraising",
    subtitle:
      "Fundraising activities, spanning preparation to deal closing, for early and later-stage businesses.",
    title: "Fundraising",
  },
  {
    audience: "companies",
    capabilities: [
      {
        description:
          "Align financial goals with business vision, ensuring scalable growth through strategic planning and market positioning.",
        title: "Company strategy",
      },
      {
        description:
          "Build financial models to manage cash flow, anticipate funding needs, and support data-driven decision-making.",
        title: "Financial planning & forecasting",
      },
      {
        description:
          "Optimize capital deployment for expansion, balancing reinvestment, acquisitions, and financial sustainability.",
        title: "Capital allocation & scaling",
      },
      {
        description:
          "Structure cap tables to minimize dilution, protect founder equity, and ensure future fundraising, while optimizing governance and risk management.",
        title: "Corporate structure",
      },
    ],
    exampleEngagement: {
      description:
        "Growth strategy, financial modelling, exit strategy planning, valuation assessment, fundraise planning, and more.",
      title: "An example of our corporate finance services",
    },
    intro:
      "We provide expert financial and strategic guidance to optimize value creation. From fundraising to M&A preparation, we help businesses make informed decisions that drive long-term success.",
    methodology,
    slug: "corporate-finance",
    subtitle:
      "Strategic projects with a focus on growth, capital allocation, and future financing rounds. We support you at every turn.",
    title: "Corporate finance",
  },
  {
    audience: "investors",
    capabilities: [
      {
        description:
          "Identification of investment opportunities across target industries and verticals.",
        title: "Deal scouting & engagement",
      },
      {
        description:
          "Analysis of target sector landscapes to identify emerging trends and competitive landscapes.",
        title: "Market mapping",
      },
      {
        description:
          "Comprehensive assessment of target companies' team, operational, and financial performance.",
        title: "Company screening & assessment",
      },
      {
        description:
          "Establish and nurture relationships with key stakeholders to access exclusive deal flow.",
        title: "Relationship management",
      },
    ],
    intro:
      "Generation of high-quality deal flow to execute your investment strategy.",
    methodology,
    slug: "deal-origination",
    subtitle: "Deals that deliver your investment targets.",
    title: "Deal origination",
  },
  {
    audience: "investors",
    capabilities: [
      {
        description:
          "Management of the due diligence process, coordinating with internal and external stakeholders.",
        title: "Due diligence coordination",
      },
      {
        description:
          "Management of communication among all deal participants to ensure alignment in deals.",
        title: "Stakeholder coordination",
      },
      {
        description:
          "Conduct valuation assessments to ensure pricing in line with fund return requirements.",
        title: "Valuation",
      },
      {
        description:
          "Assistance in the integration of new investments into the portfolio.",
        title: "Post-deal integration",
      },
    ],
    exampleEngagement: {
      description:
        "Deal evaluation, transaction structuring, financial modeling, negotiation, return analysis, closing management, and cap table assessment.",
      title: "An example of our deal evaluation services",
    },
    intro:
      "We manage the end-to-end deal process, from analysis to closing — keeping investors aligned and execution tight.",
    methodology,
    slug: "deal-evaluation",
    subtitle:
      "Management of the end-to-end deal process, from analysis to closing.",
    title: "Deal evaluation",
  },
  {
    audience: "investors",
    capabilities: [
      {
        description:
          "Optimize day-to-day portfolio operations by improving processes and implementing practical solutions for company support.",
        title: "Operational support",
      },
      {
        description:
          "Detailed company performance tracking and stakeholder communication to improve decision making.",
        title: "Performance monitoring and reporting",
      },
      {
        description:
          "Identification and implementation of actionable growth strategies for portfolio companies.",
        title: "Value creation initiatives",
      },
      {
        description:
          "Development and execution of exit strategies, ensuring portfolio companies are positioned for successful and timely liquidity events.",
        title: "Exit strategy planning",
      },
    ],
    intro:
      "Validate your investment thesis. Evolute provides strategic commercial due diligence to assess market fit, scalability, and growth potential in innovative tech ventures.",
    methodology,
    slug: "commercial-due-diligence",
    subtitle:
      "Oversight and optimization of investments to enhance performance and drive growth.",
    title: "Commercial due diligence",
  },
];

export const servicesByAudience = (audience: Service["audience"]) =>
  services.filter((service) => service.audience === audience);

export const findService = (audience: Service["audience"], slug: string) =>
  services.find(
    (service) => service.audience === audience && service.slug === slug,
  );
