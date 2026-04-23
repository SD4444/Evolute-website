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
        "inline-block font-mono text-[0.6875rem] tracking-[0.2em] text-gray-500 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
