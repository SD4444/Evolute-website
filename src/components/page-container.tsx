import { cn } from "@/lib/utils";

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-6 md:px-10", className)}>{children}</div>
  );
}

export function PageSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rise py-16 md:py-24", className)}>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}

export function ContentRail({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,46rem)_minmax(0,1fr)]",
        className,
      )}
    >
      <div className="lg:col-start-2">{children}</div>
    </div>
  );
}

export function EditorialRail({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 2xl:grid-cols-[minmax(0,1fr)_minmax(0,46rem)_minmax(0,1fr)]",
        className,
      )}
    >
      <div className="2xl:col-start-2">{children}</div>
    </div>
  );
}

export function EditorialContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1120px] px-6 md:px-10", className)}>{children}</div>
  );
}
