import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Eyebrow } from "./eyebrow";

export function ContactCTA({
  eyebrow = "Questions?",
  title,
  person,
  href = "/contact",
}: {
  eyebrow?: string;
  title: string;
  person?: {
    name: string;
    role: string;
  };
  href?: string;
}) {
  return (
    <section className="bg-navy-800 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <Eyebrow className="text-gray-300">{eyebrow}</Eyebrow>
          <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight md:text-4xl">
            {title}
          </h2>
          {person ? (
            <p className="text-sm text-gray-300">
              {person.name} · {person.role}
            </p>
          ) : null}
        </div>
        <Button size="lg" variant="secondary" render={<Link href={href} />}>
          Get in touch
        </Button>
      </div>
    </section>
  );
}
