"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { AccentTone } from "@/lib/content/types";

const cycle: { title: string; tone: AccentTone; slug: string }[] = [
  { title: "digital technology", tone: "lilac", slug: "digital-technology" },
  { title: "energy & sustainability", tone: "sage", slug: "energy-and-sustainability" },
  { title: "food & agri", tone: "lime", slug: "food-and-agri" },
  { title: "mobility & aerospace", tone: "sky", slug: "mobility-and-aerospace" },
  { title: "advanced materials & manufacturing", tone: "sand", slug: "advanced-materials-and-manufacturing" },
  { title: "health & life sciences", tone: "rose", slug: "health-and-life-sciences" },
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
    if (paused || reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % cycle.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, reduced]);

  const current = cycle[index];
  const tone = toneColor[current.tone];

  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-full opacity-25 blur-3xl transition-colors duration-[1200ms]"
        style={{ backgroundColor: tone }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col justify-between gap-16 px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16">
        <div
          className="flex flex-col gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <h1 className="font-heading leading-[1.02] font-medium tracking-tight">
            <span className="block text-white text-[clamp(2.5rem,5vw,3.75rem)]">
              Corporate finance for
            </span>
            <span
              key={current.slug}
              aria-live="polite"
              className={cn(
                "block text-[clamp(2.5rem,5vw,3.75rem)] underline decoration-[0.08em] underline-offset-[0.12em] transition-colors duration-500",
                !reduced && "animate-[heroWord_700ms_ease-out]",
              )}
              style={{ color: tone, textDecorationColor: tone }}
            >
              {current.title}
              <span style={{ color: tone }}>.</span>
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
            Evolute is a data-driven corporate finance partner for deep tech
            pioneers. We work alongside founders and investors on fundraising,
            M&amp;A, and strategic capital decisions — embedded as an extension
            of your team.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-navy-700 transition-colors hover:bg-gray-100"
              href="/contact"
            >
              Start a conversation
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-sm font-medium text-white transition-colors hover:bg-white/10"
              href="/services"
            >
              Explore our services
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between gap-6">
            <ul className="flex flex-wrap items-center gap-2">
              {cycle.map((item, i) => {
                const isActive = i === index;
                return (
                  <li key={item.slug}>
                    <button
                      aria-label={`Show ${item.title}`}
                      aria-pressed={isActive}
                      className={cn(
                        "group flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs transition-colors",
                        isActive
                          ? "border-white/40 text-white"
                          : "text-gray-300 hover:border-white/30 hover:text-white",
                      )}
                      onClick={() => {
                        setIndex(i);
                        setPaused(true);
                      }}
                      type="button"
                    >
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full transition-colors"
                        style={{
                          backgroundColor: isActive
                            ? toneColor[item.tone]
                            : "rgba(255,255,255,0.25)",
                        }}
                      />
                      <span className="hidden md:inline">{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <Link
              className="hidden shrink-0 items-center gap-2 text-sm transition-colors md:inline-flex"
              href={`/industries/${current.slug}`}
              style={{ color: tone }}
            >
              Explore {current.title} →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroWord {
          0% {
            opacity: 0;
            transform: translateY(0.3em);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
