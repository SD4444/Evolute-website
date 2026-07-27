"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type TeamRosterPhoto = {
  alt: string;
  src?: string;
};

/**
 * Two-column team layout: the expanded member's portrait on the left, the
 * disclosure list itself passed through as children so it stays server
 * rendered. `photos` is indexed to match the order of the list items.
 */
export function TeamRoster({
  children,
  photos,
}: {
  children: React.ReactNode;
  photos: TeamRosterPhoto[];
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // <details> fires a non-bubbling "toggle" event, so listen in the capture
  // phase on the container rather than binding each item. The list is an
  // exclusive accordion (shared name), so at most one is open at a time.
  useEffect(() => {
    const node = listRef.current;
    if (!node) {
      return;
    }

    const syncOpenIndex = () => {
      const index = Array.from(node.querySelectorAll("details")).findIndex((d) => d.open);
      setOpenIndex(index === -1 ? null : index);
    };

    node.addEventListener("toggle", syncOpenIndex, true);
    return () => node.removeEventListener("toggle", syncOpenIndex, true);
  }, []);

  const active = openIndex === null ? undefined : photos[openIndex];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-20">
      <div className="hidden lg:block">
        {active?.src ? (
          <div className="sticky top-28 aspect-square w-full max-w-sm overflow-hidden">
            <Image
              alt={active.alt}
              className="object-cover grayscale"
              fill
              key={active.src}
              sizes="(min-width: 1024px) 30vw, 1px"
              src={active.src}
            />
          </div>
        ) : null}
      </div>

      <div ref={listRef}>{children}</div>
    </div>
  );
}
