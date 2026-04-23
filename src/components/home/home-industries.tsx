"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { LogoMark } from "@/components/brand/logo";
import { industries } from "@/lib/content/industries";
import type { AccentTone } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const toneBg: Record<AccentTone, string> = {
  lilac: "bg-accent-lilac",
  lime: "bg-accent-lime",
  rose: "bg-accent-rose/70",
  sage: "bg-accent-sage",
  sand: "bg-accent-sand",
  sky: "bg-accent-sky/80",
};

const toneInk: Record<AccentTone, string> = {
  lilac: "text-accent-violet",
  lime: "text-accent-olive",
  rose: "text-accent-rose-dk",
  sage: "text-accent-forest",
  sand: "text-accent-clay",
  sky: "text-accent-ocean",
};

export function HomeIndustries() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % industries.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  const active = industries[index];

  return (
    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div
        className={cn(
          "mx-auto w-full max-w-[1400px] overflow-hidden rounded-3xl px-8 py-16 transition-colors duration-500 md:px-16 md:py-24",
          toneBg[active.tone],
        )}
        onMouseLeave={() => setPaused(false)}
      >
        <p
          className={cn(
            "mb-6 text-sm tracking-wide transition-colors duration-500",
            toneInk[active.tone],
          )}
        >
          Capital partners for
        </p>
        <ul className="flex flex-col gap-3 md:gap-4">
          {industries.map((industry, i) => {
            const isActive = i === index;
            return (
              <li key={industry.slug}>
                <button
                  className="group flex w-full flex-col items-start gap-3 text-left"
                  onClick={() => {
                    setIndex(i);
                    setPaused(true);
                  }}
                  onMouseEnter={() => {
                    setIndex(i);
                    setPaused(true);
                  }}
                  type="button"
                >
                  <h3
                    className={cn(
                      "flex items-center gap-4 font-heading font-medium tracking-tight transition-colors duration-200",
                      "text-[clamp(1.75rem,3vw,2rem)]",
                      isActive
                        ? "text-navy-700"
                        : cn(toneInk[active.tone], "opacity-60"),
                    )}
                  >
                    {isActive ? (
                      <LogoMark className="size-[0.9em] shrink-0 text-navy-700" />
                    ) : null}
                    <span>{industry.title}</span>
                  </h3>
                  {isActive ? (
                    <p className="max-w-3xl text-base text-navy-700 md:text-lg">
                      {industry.subtitle}
                    </p>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-end">
          <Link
            className="text-sm text-navy-700 underline-offset-4 hover:underline"
            href={`/industries/${active.slug}`}
          >
            Explore {active.title} →
          </Link>
        </div>
      </div>
    </section>
  );
}
