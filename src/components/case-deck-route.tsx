"use client";

import { useRouter } from "next/navigation";

import { CaseDeck } from "@/components/case-deck";
import { findCaseDeck } from "@/lib/content/case-decks";

/** Renders a case-study route as a fullscreen deck; closing returns to the insights index. */
export function CaseDeckRoute({ slug }: { slug: string }) {
  const router = useRouter();
  const deck = findCaseDeck(slug);

  if (!deck) {
    return null;
  }

  return <CaseDeck deck={deck} onClose={() => router.push("/insights")} />;
}
