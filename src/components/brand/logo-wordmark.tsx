import Image from "next/image";

import { cn } from "@/lib/utils";

export function LogoWordmark({
  className,
  invert = false,
  height = 24,
}: {
  className?: string;
  /** Use on dark backgrounds — flips to white via CSS filter. */
  invert?: boolean;
  /** Rendered height in px. Width auto-scales via SVG aspect ratio (711:131). */
  height?: number;
}) {
  return (
    <Image
      alt="Evolute"
      className={cn(invert && "brightness-0 invert", className)}
      height={height}
      priority
      src="/logo-wordmark.svg"
      width={Math.round(height * (711 / 131))}
    />
  );
}
