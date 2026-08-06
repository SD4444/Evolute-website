"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { type AccentTone } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const cycle: { title: string; tone: AccentTone; slug: string }[] = [
  { slug: "digital-technology", title: "digital technology", tone: "sand" },
  { slug: "energy-and-sustainability", title: "energy & sustainability", tone: "lime" },
  { slug: "food-and-agri", title: "food & agri", tone: "sage" },
  { slug: "mobility-and-aerospace", title: "mobility & aerospace", tone: "sky" },
  {
    slug: "advanced-materials-and-manufacturing",
    title: "advanced materials & manufacturing",
    tone: "lilac",
  },
  { slug: "health-and-life-sciences", title: "health & life sciences", tone: "rose" },
];

const toneColor: Record<AccentTone, string> = {
  lilac: "var(--accent-lilac)",
  lime: "var(--accent-lime)",
  rose: "var(--accent-rose)",
  sage: "var(--accent-sage)",
  sand: "var(--accent-sand)",
  sky: "var(--accent-sky)",
};

const ROTATE_MS = 2800;

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduced) {
      return;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % cycle.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, reduced]);

  const current = cycle[index];
  const tone = toneColor[current.tone];

  return (
    <section className="relative overflow-hidden bg-dark-bg text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-full opacity-25 blur-3xl transition-colors duration-[1200ms]"
        style={{ backgroundColor: tone }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-6 pt-28 pb-16 md:px-10 md:pt-28 md:pb-24">
        {/*
          Centred, but biased downward: the inner top padding is larger than the
          wrapper's bottom padding, so the block settles below the optical middle
          and clears the fixed nav instead of crowding it.
        */}
        <div
          className="flex flex-1 flex-col justify-center gap-10 pt-16 md:gap-12 md:pt-24"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/*
            Capped at 4.25rem so the longest cycle entry ("advanced materials &
            manufacturing") still sets on one line at the 1400px container width.
          */}
          <h1 className="font-heading leading-[1] tracking-[-0.035em]">
            <span className="block text-[clamp(2.5rem,5vw,4.25rem)] text-white">
              Corporate finance for
            </span>
            <span
              key={current.slug}
              aria-live="polite"
              className={cn(
                "block text-[clamp(2.5rem,5vw,4.25rem)] underline decoration-[0.07em] underline-offset-[0.1em] transition-colors duration-500",
                !reduced && "animate-hero-word",
              )}
              style={{ color: tone, textDecorationColor: tone }}
            >
              {current.title}
              <span style={{ color: tone }}>.</span>
            </span>
          </h1>

          <div className="flex max-w-2xl flex-col gap-4 text-base leading-[1.65] text-gray-200 md:text-lg">
            <p>
              Evolute specialises in corporate finance for tech pioneers; visionary founders who
              push boundaries and see their companies as catalysts for the future.
            </p>
            <p>
              We focus on growth capital and exit advisory services. Not by following traditional
              paths. Our mission is to empower founders with the richest data and world-class
              resources to navigate complex capital markets and achieve exits they can be proud of.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/70 px-6 text-[0.6875rem] tracking-[0.14em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
              href="/contact"
            >
              Start a conversation
            </Link>
            <Link
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/40 px-6 text-[0.6875rem] tracking-[0.14em] text-gray-100 uppercase transition-colors hover:border-white hover:text-white"
              href="/services"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
