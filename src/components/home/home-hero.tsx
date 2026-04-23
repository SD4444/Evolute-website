"use client";

import { useEffect, useState } from "react";

import type { AccentTone } from "@/lib/content/types";

const cycle: { title: string; tone: AccentTone }[] = [
  { title: "digital technology", tone: "lilac" },
  { title: "energy & sustainability", tone: "sage" },
  { title: "food & agri", tone: "lime" },
  { title: "mobility & aerospace", tone: "sky" },
  { title: "advanced materials & manufacturing", tone: "sand" },
  { title: "health & life sciences", tone: "rose" },
];

const toneColor: Record<AccentTone, string> = {
  lilac: "var(--accent-indigo)",
  lime: "var(--accent-lime)",
  rose: "var(--accent-rose)",
  sage: "var(--accent-sage)",
  sand: "var(--accent-sand)",
  sky: "var(--accent-sky)",
};

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % cycle.length), 2400);
    return () => clearInterval(id);
  }, []);

  const current = cycle[index];

  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col justify-center px-6 pt-32 pb-16 md:px-10 md:pt-40">
        <h1 className="font-heading leading-[1.02] font-medium tracking-tight">
          <span className="block text-white text-[clamp(2.5rem,5vw,3.75rem)]">
            Corporate finance for
          </span>
          <span
            aria-live="polite"
            className="block text-[clamp(3rem,6vw,5rem)] underline decoration-[0.08em] underline-offset-[0.12em] transition-colors duration-500"
            style={{
              color: toneColor[current.tone],
              textDecorationColor: toneColor[current.tone],
            }}
          >
            {current.title}
          </span>
        </h1>
      </div>
    </section>
  );
}
