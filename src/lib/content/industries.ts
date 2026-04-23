import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    image: "/images/home/photo-break.jpg",
    intro:
      "Digital technology covers a broad range of innovations, often integrating with hardware and finding applications in numerous end markets. From artificial intelligence and quantum computing to cloud infrastructure, cybersecurity, photonics, sensors, and smart infrastructure — the sector underpins modern value creation across industries.",
    slug: "digital-technology",
    subtitle:
      "We support ventures building the next generation of digital and software-based solutions.",
    themes: [
      {
        description:
          "Automation, predictive analytics, and agentic systems turning frontier research into defensible commercial products.",
        title: "Artificial intelligence",
      },
      {
        description:
          "Quantum computing and quantum sensing for problems beyond the reach of classical computing.",
        title: "Quantum computing",
      },
      {
        description:
          "Cloud infrastructure, data platforms, and developer tools powering modern software economics.",
        title: "Cloud & infrastructure",
      },
      {
        description:
          "Security, identity, and compliance primitives for a world of distributed data and AI agents.",
        title: "Cybersecurity",
      },
    ],
    title: "Digital technology",
    tone: "lilac",
  },
  {
    image: "/images/industries/energy-and-sustainability.jpg",
    intro:
      "Energy and sustainability cover a wide range of technologies, from clean energy generation to predictive analytics. Examples include industrial energy management systems, energy hybridization, advanced decarbonization, predictive maintenance, and biopolymer production through carbon capture — spanning waste management, storage, eco-friendly manufacturing, and environmental restoration.",
    slug: "energy-and-sustainability",
    subtitle:
      "We support ventures driving the transition to a cleaner, greener world.",
    themes: [
      {
        description:
          "Renewables, advanced photovoltaics, wind, and next-gen nuclear fueling the clean-power transition.",
        title: "Clean energy generation",
      },
      {
        description:
          "Long-duration storage, grid distribution, and energy-management systems balancing a more distributed grid.",
        title: "Storage & grid",
      },
      {
        description:
          "Hydrogen, sustainable fuels, carbon capture, and process innovations decarbonising hard-to-abate sectors.",
        title: "Decarbonisation",
      },
      {
        description:
          "Water management, recycling, and circular economy solutions closing the loop on materials and resources.",
        title: "Circularity",
      },
    ],
    title: "Energy & sustainability",
    tone: "sage",
  },
  {
    image: "/images/industries/food-and-agri.webp",
    intro:
      "Food and agriculture span a broad range of technologies aimed at creating a more sustainable, efficient, and resilient global food system — from precision agriculture and cultured meat to autonomous farming equipment, plant-based proteins, smart irrigation, insect protein, cellular agriculture, and water conservation.",
    slug: "food-and-agri",
    subtitle:
      "We support ventures revolutionizing the food and agricultural systems.",
    themes: [
      {
        description:
          "Drone-assisted crop management, IoT livestock sensors, and autonomous harvesters making farming measurably more productive.",
        title: "Precision agriculture",
      },
      {
        description:
          "Fermentation, cell culture, and plant-based platforms rebuilding the protein supply chain.",
        title: "Alternative proteins",
      },
      {
        description:
          "Smart greenhouses, vertical farms, and insect-based feed addressing food security within planetary limits.",
        title: "Sustainable food systems",
      },
      {
        description:
          "Soil biologicals, smart irrigation, and traceability platforms improving inputs and transparency across the supply chain.",
        title: "Inputs & supply chain",
      },
    ],
    title: "Food & agri",
    tone: "lime",
  },
  {
    image: "/images/industries/mobility-and-aerospace.jpg",
    intro:
      "Mobility and aerospace cover a wide range of technologies facilitating a more efficient, interconnected, and sustainable landscape on Earth and beyond — autonomous and electric vehicles, V2X connectivity, advanced propulsion, drones, urban air mobility, high-speed rail, reusable rockets, and satellite-enabled connectivity.",
    slug: "mobility-and-aerospace",
    subtitle:
      "We support ventures transforming movement and transportation, both on land and in the air.",
    themes: [
      {
        description:
          "Autonomous and electric vehicles, V2X connectivity, and AI-driven fleet management redefining road transport.",
        title: "Autonomous & electric mobility",
      },
      {
        description:
          "Advanced propulsion, hypersonic flight, and sustainable aviation technologies reshaping how we fly.",
        title: "Propulsion & aviation",
      },
      {
        description:
          "Reusable rockets, satellite imaging, and in-orbit services building the commercial space economy.",
        title: "Space & satellite",
      },
      {
        description:
          "Urban air mobility, eVTOLs, and advanced traffic management systems for the next layer of movement.",
        title: "Advanced air mobility",
      },
    ],
    title: "Mobility & aerospace",
    tone: "sky",
  },
  {
    image: "/images/industries/advanced-materials-and-manufacturing.jpg",
    intro:
      "Advanced materials and manufacturing span a broad range of technologies driving innovations that enable a more efficient, sustainable, and automated future — 3D printing, nanomaterials for energy storage, advanced composites, photonics, robotics for warehouse automation, AI-driven process optimization, collaborative robotics, high-performance alloys, smart materials, and circular manufacturing.",
    slug: "advanced-materials-and-manufacturing",
    subtitle:
      "We support ventures revolutionizing future industries through cutting-edge materials and processes.",
    themes: [
      {
        description:
          "Advanced composites, high-performance alloys, nanomaterials, and smart materials with adaptive properties.",
        title: "Novel materials",
      },
      {
        description:
          "Additive manufacturing, laser-welding, laser-cutting, and autonomous production shortening the path from design to part.",
        title: "Digital manufacturing",
      },
      {
        description:
          "Industrial robotics, collaborative robotics, and machine vision transforming factory, warehouse, and field operations.",
        title: "Robotics & automation",
      },
      {
        description:
          "Photonics, optical sensing, and semiconductor materials powering the compute and sensing infrastructure of the next decade.",
        title: "Photonics & semiconductors",
      },
    ],
    title: "Advanced materials & manufacturing",
    tone: "sand",
  },
  {
    image: "/images/industries/health-and-life-sciences.webp",
    intro:
      "Health and life sciences span a broad range of technologies driving innovations that improve patient outcomes and healthcare delivery — gene editing, AI-driven drug discovery, wearable health monitors, lab-grown organs, targeted biologics, telemedicine, biosensors, bioinformatics, and synthetic biology.",
    slug: "health-and-life-sciences",
    subtitle:
      "We support ventures driving advancements to create a healthier, more resilient future.",
    themes: [
      {
        description:
          "Novel modalities — cell, gene, RNA, and targeted biologics — expanding the universe of treatable disease.",
        title: "Therapeutics & biotech",
      },
      {
        description:
          "AI-driven drug discovery, genomics, advanced sequencing, and synthetic biology accelerating the research-to-patient pathway.",
        title: "Drug discovery & genomics",
      },
      {
        description:
          "Wearable biosensors, advanced microscopy, and next-generation imaging bringing faster diagnostics to more patients.",
        title: "Diagnostics & imaging",
      },
      {
        description:
          "Precision medicine, longevity, neurotechnology, and regenerative medicine reshaping lifelong care.",
        title: "Precision & longevity medicine",
      },
    ],
    title: "Health & life sciences",
    tone: "rose",
  },
];

export const findIndustry = (slug: string) =>
  industries.find((industry) => industry.slug === slug);
