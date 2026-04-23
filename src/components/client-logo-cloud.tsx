const CLIENT_LOGOS = [
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
  title = "A sample of our 80+ clients",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[0.6875rem] tracking-widest text-gray-500 uppercase">
            {eyebrow}
          </span>
          <h2 className="max-w-3xl font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] font-medium tracking-tight text-navy-700">
            {title}
          </h2>
        </div>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-6">
          {CLIENT_LOGOS.map((logo) => (
            <li
              className="flex h-16 items-center justify-center md:h-20"
              key={logo.src}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={logo.name}
                className="max-h-full max-w-[80%] object-contain opacity-80"
                src={logo.src}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
