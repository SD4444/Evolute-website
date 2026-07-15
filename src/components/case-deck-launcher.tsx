"use client";

import { useEffect, useState } from "react";

import { CaseDeck } from "@/components/case-deck";
import { findCaseDeck } from "@/lib/content/case-decks";

/**
 * Wraps a case-study card or button. Clicking opens the fullscreen deck
 * presentation instead of navigating; falls back to plain children when the
 * case has no deck.
 */
export function CaseDeckLauncher({
  slug,
  children,
  className,
}: {
  slug: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const deck = findCaseDeck(slug);

  // Allow deep-linking: /insights?deck=<slug> opens the deck on load.
  useEffect(() => {
    if (!deck) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    if (params.get("deck") === slug) {
      setOpen(true);
    }
  }, [deck, slug]);

  if (!deck) {
    return <>{children}</>;
  }

  return (
    <>
      <button
        className={className ?? "block w-full cursor-pointer text-left"}
        onClick={() => setOpen(true)}
        type="button"
      >
        {children}
      </button>
      {open ? <CaseDeck deck={deck} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

export function CaseDeckButton({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);
  const deck = findCaseDeck(slug);

  if (!deck) {
    return null;
  }

  return (
    <>
      <button
        className="inline-flex h-11 w-fit items-center gap-3 rounded-full border border-rule px-6 text-[0.6875rem] tracking-[0.14em] text-gray-500 uppercase transition-colors hover:border-gray-400 hover:text-navy-700"
        onClick={() => setOpen(true)}
        type="button"
      >
        Flip through the case
        <span aria-hidden="true" className="text-sm">
          ↗
        </span>
      </button>
      {open ? <CaseDeck deck={deck} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
