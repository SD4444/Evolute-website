import { cn } from "@/lib/utils";

import { Eyebrow } from "./eyebrow";

export function Hero({
  eyebrow,
  title,
  subtitle,
  children,
  variant = "light",
  ambientGlow = false,
  ambientGlowColor = "#fbfaf8",
  className,
  contentClassName,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "light" | "dark";
  ambientGlow?: boolean;
  ambientGlowColor?: string;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "dark" ? "bg-dark-bg text-paper" : "bg-background text-navy-700",
        className,
      )}
    >
      {ambientGlow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-full opacity-25 blur-3xl"
          style={{ backgroundColor: ambientGlowColor }}
        />
      ) : null}
      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-6 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28",
          contentClassName,
        )}
      >
        {eyebrow ? (
          <Eyebrow className={variant === "dark" ? "text-gray-300" : undefined}>{eyebrow}</Eyebrow>
        ) : null}
        <h1 className="max-w-4xl font-heading text-4xl leading-[1] tracking-[-0.035em] md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "max-w-2xl text-lg md:text-xl",
              variant === "dark" ? "text-gray-200" : "text-gray-500",
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
