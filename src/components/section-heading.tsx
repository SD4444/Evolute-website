import { cn } from "@/lib/utils";

import { Eyebrow } from "./eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-navy-700 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-gray-500 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
