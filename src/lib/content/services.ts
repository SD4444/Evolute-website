import { type MethodologyStep, type Service } from "./types";

const methodology: MethodologyStep[] = [
  {
    description: "Granular analysis using proprietary data.",
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
        description: "Valuation and deal structuring to optimize price and management interests.",
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
          "Define the capital strategy, sharpen market positioning, and build the foundations for a compelling investor narrative.",
        title: "Capital strategy, foundation, and positioning",
      },
      {
        description:
          "Build investor-ready financial models, assess valuation, and identify key risks before entering the market.",
        title: "Financial modelling, valuation, and risk assessment",
      },
      {
        description:
          "Prepare investor materials and data-room documentation while aligning shareholders on objectives, process, and terms.",
        title: "Document preparation and shareholder alignment",
      },
      {
        description:
          "Identify and engage the right investors, manage the process, and support negotiations through closing.",
        title: "Investor engagement and deal closing",
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
      "Strategic projects with a focus on growth, capital allocation, and future financing rounds. We support you at every turn.",
    title: "Corporate finance",
  },
];

export const servicesByAudience = (audience: Service["audience"]) =>
  services.filter((service) => service.audience === audience);

export const findService = (audience: Service["audience"], slug: string) =>
  services.find((service) => service.audience === audience && service.slug === slug);
