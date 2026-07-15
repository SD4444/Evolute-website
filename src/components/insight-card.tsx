import Link from "next/link";

import { type Insight } from "@/lib/content/types";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link className="group flex h-full flex-col gap-4" href={`/insights/${insight.slug}`}>
      <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
        {insight.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
              insight.imageFit === "contain" ? "object-contain" : "object-cover"
            }`}
            src={insight.image}
          />
        ) : null}
      </div>
      <span className="inline-flex w-fit rounded-full border border-rule-alt px-3 py-1 text-[0.625rem] tracking-[0.14em] text-gray-500 uppercase">
        {insight.category}
      </span>
      <h3 className="flex-1 font-heading text-2xl leading-snug text-navy-700 group-hover:text-navy-900 md:text-3xl">
        {insight.title}
      </h3>
    </Link>
  );
}
