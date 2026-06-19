import Link from "next/link";

import { cn } from "@/lib/utils";

export type DisclosureItem = {
  accentColor?: string;
  description: React.ReactNode;
  eyebrow?: string;
  href?: string;
  linkLabel?: string;
  title: string;
};

export function DisclosureList({
  className,
  items,
  name,
}: {
  className?: string;
  items: DisclosureItem[];
  name: string;
}) {
  return (
    <div className={cn("border-b border-navy-700/20", className)}>
      {items.map((item, index) => (
        <details className="group border-t border-navy-700/20" key={item.title} name={name}>
          <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-3 py-6 text-navy-700 marker:content-none transition-colors hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-700 md:grid-cols-[4rem_minmax(0,1fr)_3rem] md:py-8 [&::-webkit-details-marker]:hidden">
            <span
              className="font-mono text-[0.6875rem] tracking-[0.14em] text-gray-500"
              style={item.accentColor ? { color: item.accentColor } : undefined}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex min-w-0 flex-col gap-1">
              {item.eyebrow ? (
                <span className="text-xs tracking-[0.12em] text-gray-500 uppercase">
                  {item.eyebrow}
                </span>
              ) : null}
              <span className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.08] font-medium tracking-tight">
                {item.title}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center justify-self-end text-2xl font-light transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <div className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] gap-3 pb-8 md:grid-cols-[4rem_minmax(0,1fr)_3rem] md:pb-10">
            <div className="col-start-2 max-w-3xl text-base leading-relaxed text-navy-600 md:text-lg">
              {item.description}
              {item.href ? (
                <Link
                  className="mt-5 block w-fit text-sm font-medium text-navy-700 underline-offset-4 hover:underline"
                  href={item.href}
                >
                  {item.linkLabel ?? `Explore ${item.title}`} →
                </Link>
              ) : null}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
