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
    <section className="bg-dark-bg text-paper">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-heading text-[clamp(1.875rem,5.5vw,3.25rem)] leading-[1.06] tracking-[-0.03em]">
            {title}
          </h2>
          {person ? (
            <p className="text-sm text-gray-400">
              {person.name} · {person.role}
            </p>
          ) : null}
        </div>
        <Button
          className="h-11 border-dark-rule px-5 text-[0.6875rem] text-gray-300 hover:border-gray-400 hover:text-paper"
          size="lg"
          variant="pill"
          nativeButton={false}
          render={<Link href={href} />}
        >
          Get in touch
        </Button>
      </div>
    </section>
  );
}
