import Image from "next/image";
import Link from "next/link";

import { Eyebrow } from "./eyebrow";

export function AskRobCard({
  eyebrow = "Questions?",
  title = "Ask Rob about our services.",
  href = "/contact",
  cta = "Book a meeting",
}: {
  eyebrow?: string;
  title?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="px-6 md:px-10">
      <div className="mx-auto w-full max-w-[1400px] py-16 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-navy-700 text-white">
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch">
            <div className="relative aspect-square w-full shrink-0 overflow-hidden md:w-[40%] md:max-w-md">
              <Image
                alt="Rob"
                src="/images/team/rob.jpg"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6 px-8 pb-10 md:px-12 md:py-12">
              <Eyebrow className="text-gray-300">{eyebrow}</Eyebrow>
              <h2 className="max-w-xl font-heading text-[clamp(2rem,3.5vw,2.5rem)] leading-[1.1] font-medium tracking-tight">
                {title}
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
