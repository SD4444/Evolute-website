import type { ComponentType } from "react";

import type { Insight } from "@/lib/content/types";

import * as advancedMaterials from "./advanced-materials-manufacturing-sector-deep-dive";
import * as collie from "./providing-collie-with-end-to-end-fundraising-support";
import * as deepTech from "./evolute-what-is-deep-tech";
import * as digitalTech from "./digital-technology-sector-deep-dive";
import * as energy from "./energy-sustainability-sector-deep-dive";
import * as euInc from "./eu-inc-europes-28th-regime-and-the-quest-for-scale";
import * as food from "./food-agriculture-sector-deep-dive";
import * as health from "./health-and-life-sciences-sector-deep-dive";
import * as mobility from "./mobility-aerospace-sector-deep-dive";
import * as scisports from "./facilitating-scisports-growth-through-acquisition";

export type InsightEntry = {
  meta: Insight;
  Body: ComponentType;
};

const modules: { meta: Insight; default: ComponentType }[] = [
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
  meta: mod.meta,
  Body: mod.default,
}));
