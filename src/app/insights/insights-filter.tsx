"use client";

import { useState } from "react";

import { InsightCard } from "@/components/insight-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Insight, InsightCategory } from "@/lib/content/types";

type Filter = "All" | InsightCategory;

const FILTERS: Filter[] = ["All", "Blog", "Case study", "News"];

export function InsightsFilter({ insights }: { insights: Insight[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? insights
      : insights.filter((insight) => insight.category === filter);

  return (
    <Tabs
      value={filter}
      onValueChange={(value) => setFilter(value as Filter)}
    >
      <TabsList className="mb-10">
        {FILTERS.map((item) => (
          <TabsTrigger key={item} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {FILTERS.map((item) => (
        <TabsContent key={item} value={item}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
