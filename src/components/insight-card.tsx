import Link from "next/link";

import type { Insight } from "@/lib/content/types";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link className="group flex flex-col gap-4" href={`/insights/${insight.slug}`}>
      <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100">
        {insight.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            src={insight.image}
          />
        ) : null}
      </div>
      <span className="inline-flex w-fit rounded bg-gray-100 px-2 py-1 font-mono text-[0.625rem] tracking-widest text-gray-500 uppercase">
        {insight.category}
      </span>
      <h3 className="font-heading text-2xl leading-snug font-medium text-navy-700 group-hover:text-navy-900 md:text-3xl">
        {insight.title}
      </h3>
      <div className="h-px w-full bg-gray-200" />
    </Link>
  );
}
