import Link from "next/link";

import { type AccentTone } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<AccentTone, string> = {
  lilac: "bg-accent-lilac text-accent-violet",
  lime: "bg-accent-lime text-accent-olive",
  rose: "bg-accent-rose/50 text-accent-rose-dk",
  sage: "bg-accent-sage/70 text-accent-forest",
  sand: "bg-accent-sand/60 text-accent-clay",
  sky: "bg-accent-sky/60 text-accent-ocean",
};

export function IndustryTag({
  tone,
  children,
  href,
  className,
}: {
  tone: AccentTone;
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
    toneClasses[tone],
    className,
  );
  if (href) {
    return (
      <Link href={href} className={cn(classes, "hover:opacity-80")}>
        {children}
      </Link>
    );
  }
  return <span className={classes}>{children}</span>;
}
