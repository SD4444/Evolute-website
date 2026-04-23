import { cn } from "@/lib/utils";

import { Eyebrow } from "./eyebrow";

export function Hero({
  eyebrow,
  title,
  subtitle,
  children,
  variant = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "dark"
          ? "bg-navy-700 text-white"
          : "bg-background text-navy-700",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        {eyebrow ? (
          <Eyebrow
            className={variant === "dark" ? "text-gray-300" : undefined}
          >
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h1 className="max-w-4xl font-heading text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
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
