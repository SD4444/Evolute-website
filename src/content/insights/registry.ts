import { type ComponentType } from "react";

import { type CaseStudy, type Insight } from "@/lib/content/types";

import * as advancedMaterials from "./advanced-materials-manufacturing-sector-deep-dive";
import * as digitalTech from "./digital-technology-sector-deep-dive";
import * as energy from "./energy-sustainability-sector-deep-dive";
import * as euInc from "./eu-inc-europes-28th-regime-and-the-quest-for-scale";
import * as eic from "./evolute-eic-ecosystem-partnership-programme";
import * as deepTech from "./evolute-what-is-deep-tech";
import * as scisports from "./facilitating-scisports-growth-through-acquisition";
import * as food from "./food-agriculture-sector-deep-dive";
import * as health from "./health-and-life-sciences-sector-deep-dive";
import * as mobility from "./mobility-aerospace-sector-deep-dive";
import * as collie from "./providing-collie-with-end-to-end-fundraising-support";
import * as horus from "./supporting-horus-through-a-strategic-sale-to-nilario";

export type InsightEntry = {
  meta: Insight;
  Body: ComponentType;
  caseStudy?: CaseStudy;
};

const modules: {
  caseStudy?: CaseStudy;
  meta: Insight;
  default: ComponentType;
}[] = [
  horus,
  eic,
  euInc,
  collie,
  scisports,
  deepTech,
  advancedMaterials,
  digitalTech,
  energy,
  food,
  health,
  mobility,
];

export const insightEntries: InsightEntry[] = modules.map((mod) => ({
  Body: mod.default,
  caseStudy: mod.caseStudy,
  meta: mod.meta,
}));
