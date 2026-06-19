import Image from "next/image";
import Link from "next/link";

import { Eyebrow } from "./eyebrow";

export function AskRobCard({
  eyebrow = "Questions?",
  title,
  href = "/contact",
  cta = "Book a meeting",
  person = "rob",
}: {
  eyebrow?: string;
  title?: string;
  href?: string;
  cta?: string;
  person?: "rob" | "simon";
}) {
  const isSimon = person === "simon";
  const resolvedTitle = title ?? `Ask ${isSimon ? "Simon" : "Rob"} about our services.`;

  return (
    <section>
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-navy-700 text-white">
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch">
            <div className="relative aspect-square w-full shrink-0 overflow-hidden md:w-[40%] md:max-w-md">
              <Image
                alt={isSimon ? "Simon" : "Rob"}
                src={isSimon ? "/images/team/simon.png" : "/images/team/rob.jpg"}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6 px-8 pb-10 md:px-12 md:py-12">
              <Eyebrow className="text-gray-300">{eyebrow}</Eyebrow>
              <h2 className="max-w-xl font-heading text-[clamp(2rem,3.5vw,2.5rem)] leading-[1.1] font-medium tracking-tight">
                {resolvedTitle}
              </h2>
              <div>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 font-heading text-lg font-medium text-white underline-offset-4 hover:underline md:text-xl"
                >
                  {cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
