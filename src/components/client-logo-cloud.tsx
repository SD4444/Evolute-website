const CLIENT_LOGOS = [
  { name: "SciSports", src: "/images/clients/scisports.svg" },
  { name: "Horus", src: "/images/clients/horus.png" },
  { name: "Incus 3D", src: "/images/clients/incus-3d.svg" },
  { name: "Recell", src: "/images/clients/recell.svg" },
  { name: "Alfarim", src: "/images/clients/alfarim.png" },
  { name: "OMRT", src: "/images/clients/omrt.png" },
  { name: "Collie", src: "/images/clients/collie.png" },
  { name: "Moos", src: "/images/clients/moos.png" },
  { name: "Kitepower", src: "/images/clients/kitepower.png" },
  { name: "Owlin", src: "/images/clients/owlin.png" },
  { name: "Maggie", src: "/images/clients/maggie.png" },
  { name: "Spark", src: "/images/clients/spark.png" },
  { name: "CO2 BioClean", src: "/images/clients/co2-bioclean.png" },
  { name: "PreciTaste", src: "/images/clients/precitaste.png" },
  { name: "Inphocal", src: "/images/clients/inphocal.png" },
  { name: "Stilfold", src: "/images/clients/stilfold.png" },
];

export function ClientLogoCloud({
  eyebrow = "Clients",
  embedded = false,
  title = "A sample of our 100+ clients",
  variant = "light",
}: {
  eyebrow?: string;
  embedded?: boolean;
  title?: string;
  variant?: "dark" | "light";
}) {
  const content = (
    <div
      className={cn(
        "flex flex-col gap-10",
        embedded && (variant === "dark" ? "border-t border-white/15 pt-12" : "pt-12"),
      )}
    >
      <div className="flex flex-col gap-4">
        <span
          className={cn(
            "font-mono text-[0.6875rem] tracking-widest uppercase",
            variant === "dark" ? "text-gray-300" : "text-gray-500",
          )}
        >
          {eyebrow}
        </span>
        <h2
          className={cn(
            "max-w-3xl font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight",
            variant === "dark" ? "text-white" : "text-navy-700",
          )}
        >
          {title}
        </h2>
      </div>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
        {CLIENT_LOGOS.map((logo) => (
          <li className="flex h-14 items-center justify-center md:h-16" key={logo.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={logo.name}
              className={cn(
                "max-h-12 max-w-[60%] object-contain",
                variant === "dark" ? "opacity-65 brightness-0 invert" : "opacity-80",
              )}
              src={logo.src}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">{content}</div>
    </section>
  );
}
import { cn } from "@/lib/utils";
