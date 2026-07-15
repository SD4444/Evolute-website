import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[clamp(0.6875rem,1.4vw,0.875rem)] tracking-[0.18em] text-gray-400 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
