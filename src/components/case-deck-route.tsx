"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CaseDeck } from "@/components/case-deck";
import { findCaseDeck } from "@/lib/content/case-decks";

/**
 * Renders a case-study route as a fullscreen deck; closing returns to the
 * insights index.
 *
 * `children` is the server-rendered article version of the same case study, so
 * the route ships real content for crawlers and no-JS visitors. Once the deck
 * mounts it covers the article visually, so the article is marked inert and
 * aria-hidden to keep it out of the accessibility tree behind the modal.
 */
export function CaseDeckRoute({ children, slug }: { children: React.ReactNode; slug: string }) {
  const router = useRouter();
  const deck = findCaseDeck(slug);
  const [deckMounted, setDeckMounted] = useState(false);

  useEffect(() => {
    setDeckMounted(true);
  }, []);

  if (!deck) {
    return null;
  }

  return (
    <>
      <div aria-hidden={deckMounted || undefined} inert={deckMounted}>
        {children}
      </div>
      <CaseDeck deck={deck} onClose={() => router.push("/insights")} />
    </>
  );
}
