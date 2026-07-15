"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { type CaseDeck as CaseDeckData, type DeckSlide } from "@/lib/content/case-decks";
import { cn } from "@/lib/utils";

function SlideLabel({ index, label, dark }: { index: number; label: string; dark?: boolean }) {
  return (
    <p
      className={cn(
        "text-[clamp(0.6875rem,1.4vw,0.875rem)] tracking-[0.18em] uppercase",
        dark ? "text-gray-400" : "text-gray-400",
      )}
    >
      {String(index).padStart(2, "0")} · {label}
    </p>
  );
}

function CoverSlide({
  slide,
  client,
}: {
  slide: Extract<DeckSlide, { kind: "cover" }>;
  client: string;
}) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-10">
      <p className="text-[clamp(0.6875rem,1.4vw,0.875rem)] tracking-[0.18em] text-gray-400 uppercase">
        Case study · {client}
      </p>
      <div className="flex flex-col gap-8">
        <h2 className="max-w-[62rem] font-heading text-[clamp(2.5rem,7vw,5.25rem)] leading-[1] tracking-[-0.035em] text-navy-700">
          {slide.title}
        </h2>
        <p className="max-w-xl text-[clamp(0.9375rem,1.8vw,1.1875rem)] leading-[1.6] text-navy-600">
          {slide.subtitle}
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-10 gap-y-3 border-t border-rule pt-6">
        {slide.meta.map((item) => (
          <li className="text-[0.6875rem] tracking-[0.14em] text-gray-500 uppercase" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionSlide({
  slide,
  index,
}: {
  slide: Extract<DeckSlide, { kind: "section" }>;
  index: number;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
        <div className="flex flex-col gap-5">
          <SlideLabel index={index} label={slide.label} />
          <h2 className="font-heading text-[clamp(2rem,5.5vw,3.25rem)] leading-[1.06] tracking-[-0.03em] text-navy-700">
            {slide.headline}
          </h2>
          {slide.lead ? (
            <p className="max-w-xl text-[clamp(0.9375rem,1.8vw,1.1875rem)] leading-[1.6] text-navy-600">
              {slide.lead}
            </p>
          ) : null}
        </div>
        {slide.rails?.length ? (
          <div className="flex flex-col gap-7 border-l border-rule pl-8 md:pl-12 lg:self-center">
            {slide.rails.map((item) => (
              <div className="flex flex-col gap-1.5" key={item.label}>
                <p className="text-[0.6875rem] tracking-[0.14em] text-gray-400 uppercase">
                  {item.label}
                </p>
                <p className="max-w-lg text-sm leading-[1.65] text-navy-600 md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {slide.stats?.length ? (
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-rule pt-8 md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
          {slide.stats.map((stat) => (
            <div className="flex flex-col gap-2" key={stat.caption}>
              <p className="font-heading text-[clamp(1.875rem,4vw,2.75rem)] leading-none tracking-[-0.02em] text-navy-700">
                {stat.aux === "<" ? <span className="text-gray-400">&lt;</span> : null}
                {stat.value}
                {stat.aux && stat.aux !== "<" ? (
                  <span className="text-gray-400">{stat.aux}</span>
                ) : null}
              </p>
              <p className="max-w-[16rem] text-xs leading-relaxed text-gray-500 md:text-sm">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function QuoteSlide({ slide }: { slide: Extract<DeckSlide, { kind: "quote" }> }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-10">
      <p className="max-w-4xl font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.25] tracking-[-0.02em] text-paper">
        &ldquo;{slide.quote}&rdquo;
      </p>
      <div className="flex flex-col gap-1 border-t border-dark-rule pt-6">
        <p className="text-base text-paper">{slide.name}</p>
        <p className="text-sm text-gray-400">{slide.role}</p>
      </div>
    </div>
  );
}

function ClosingSlide({ slide }: { slide: Extract<DeckSlide, { kind: "closing" }> }) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-10">
      <p className="text-[clamp(0.6875rem,1.4vw,0.875rem)] tracking-[0.18em] text-gray-400 uppercase">
        Next step
      </p>
      <div className="flex flex-col gap-8">
        <h2 className="max-w-4xl font-heading text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.06] tracking-[-0.03em]">
          <span className="text-paper">{slide.headline} </span>
          <span className="text-gray-400">{slide.accent}</span>
        </h2>
        <p className="max-w-xl text-base leading-[1.6] text-dark-text md:text-lg">{slide.sub}</p>
        <a
          className="inline-flex h-11 w-fit items-center justify-center rounded-full border border-dark-rule px-6 text-[0.6875rem] tracking-[0.14em] text-gray-300 uppercase transition-colors hover:border-gray-400 hover:text-paper"
          href="/contact"
        >
          Get in touch
        </a>
      </div>
      <div className="flex items-end justify-between border-t border-dark-rule pt-6">
        <LogoWordmark height={22} invert />
        <p className="text-[0.625rem] tracking-[0.14em] text-gray-500 uppercase">
          www.evolute.partners
        </p>
      </div>
    </div>
  );
}

const isDarkSlide = (slide: DeckSlide) => slide.kind === "quote" || slide.kind === "closing";

export function CaseDeck({ deck, onClose }: { deck: CaseDeckData; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  indexRef.current = index;
  const total = deck.slides.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback((next: number) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const clamped = Math.max(0, Math.min(next, container.children.length - 1));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.children[clamped]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goTo(indexRef.current + 1);
      }
      if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goTo(indexRef.current - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, onClose]);

  const onScroll = () => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    // Slides can be taller than the viewport, so find the nearest slide top.
    const top = container.scrollTop;
    let nearest = 0;
    let nearestDistance = Infinity;
    Array.from(container.children).forEach((child, i) => {
      const distance = Math.abs((child as HTMLElement).offsetTop - top);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = i;
      }
    });
    setIndex(nearest);
  };

  useEffect(() => {
    containerRef.current?.focus({ preventScroll: true });
  }, []);

  // Section numbering skips cover/quote/closing slides.
  let sectionCounter = 0;
  const sectionIndexes = deck.slides.map((slide) =>
    slide.kind === "section" ? ++sectionCounter : 0,
  );

  const chromeDark = isDarkSlide(deck.slides[index] ?? deck.slides[0]);

  // Client-only: the portal target does not exist during server rendering.
  if (!mounted) {
    return null;
  }

  // Portal to <body>: ancestors animated by the scroll-driven `rise` transform
  // would otherwise become the containing block for these fixed layers.
  return createPortal(
    <div aria-label={`${deck.client} case study presentation`} aria-modal="true" role="dialog">
      <div className="fixed inset-0 z-[90] bg-paper" />
      <div
        className="fixed inset-0 z-[91] h-dvh snap-y snap-mandatory overflow-y-auto outline-none"
        onScroll={onScroll}
        ref={containerRef}
        tabIndex={-1}
      >
        {deck.slides.map((slide, i) => (
          <section
            className={cn(
              "flex min-h-dvh snap-start flex-col px-6 pt-24 pb-24 md:px-10 md:pt-[clamp(4.5rem,9vh,6.5rem)] md:pb-[clamp(4.5rem,9vh,6.5rem)]",
              isDarkSlide(slide) ? "bg-dark-bg" : "bg-paper",
            )}
            key={i}
          >
            <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
              {slide.kind === "cover" ? <CoverSlide client={deck.client} slide={slide} /> : null}
              {slide.kind === "section" ? (
                <SectionSlide index={sectionIndexes[i]} slide={slide} />
              ) : null}
              {slide.kind === "quote" ? <QuoteSlide slide={slide} /> : null}
              {slide.kind === "closing" ? <ClosingSlide slide={slide} /> : null}
            </div>
          </section>
        ))}
      </div>

      {/* Chrome */}
      <div
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-[92] bg-gradient-to-b to-transparent pb-8 transition-colors duration-300",
          chromeDark ? "from-dark-bg from-55% via-dark-bg/80" : "from-paper from-55% via-paper/80",
        )}
      >
        <div
          className="h-0.5 origin-left bg-gray-400/60 transition-transform duration-300"
          style={{ transform: `scaleX(${(index + 1) / total})` }}
        />
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-5 md:px-10">
          <p
            className={cn(
              "text-[0.6875rem] tracking-[0.18em] uppercase transition-opacity",
              index === 0 ? "opacity-0" : "opacity-100",
              chromeDark ? "text-gray-400" : "text-gray-500",
            )}
          >
            {deck.client}
          </p>
          <div className="pointer-events-auto flex items-center gap-4">
            <p
              aria-live="polite"
              className={cn(
                "font-heading text-[0.6875rem] tracking-[0.14em]",
                chromeDark ? "text-gray-400" : "text-gray-500",
              )}
            >
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <button
              aria-label="Close presentation"
              className={cn(
                "flex size-9 items-center justify-center rounded-full border text-lg leading-none transition-colors",
                chromeDark
                  ? "border-dark-rule text-gray-300 hover:border-gray-400 hover:text-paper"
                  : "border-rule text-gray-500 hover:border-gray-400 hover:text-navy-700",
              )}
              onClick={onClose}
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed right-6 bottom-6 z-[92] flex gap-2 md:right-10">
        <button
          aria-label="Previous slide"
          className={cn(
            "pointer-events-auto flex size-9 items-center justify-center rounded-full border transition-colors disabled:opacity-30",
            chromeDark
              ? "border-dark-rule text-gray-300 hover:border-gray-400 hover:text-paper"
              : "border-rule text-gray-500 hover:border-gray-400 hover:text-navy-700",
          )}
          disabled={index === 0}
          onClick={() => goTo(index - 1)}
          type="button"
        >
          ↑
        </button>
        <button
          aria-label="Next slide"
          className={cn(
            "pointer-events-auto flex size-9 items-center justify-center rounded-full border transition-colors disabled:opacity-30",
            chromeDark
              ? "border-dark-rule text-gray-300 hover:border-gray-400 hover:text-paper"
              : "border-rule text-gray-500 hover:border-gray-400 hover:text-navy-700",
          )}
          disabled={index === total - 1}
          onClick={() => goTo(index + 1)}
          type="button"
        >
          ↓
        </button>
      </div>
    </div>,
    document.body,
  );
}
