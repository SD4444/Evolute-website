import Link from "next/link";

import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";

const links = [
  {
    description: "Return to the main overview of Evolute Partners.",
    href: "/",
    title: "Home",
  },
  {
    description: "See services for companies and investors.",
    href: "/services",
    title: "Services",
  },
  {
    description: "Browse the sectors where Evolute works.",
    href: "/industries",
    title: "Industries",
  },
  {
    description: "Get in touch if you were looking for something specific.",
    href: "/contact",
    title: "Contact",
  },
];

export default function NotFound() {
  return (
    <>
      <Hero
        variant="light"
        eyebrow="404"
        title="That page does not exist."
        subtitle="The route may have changed during the migration, or the link may be outdated."
      />

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {links.map((link) => (
            <Link
              className="rounded-3xl bg-[var(--background-alt)] p-8 transition-colors hover:bg-gray-100 md:p-10"
              href={link.href}
              key={link.href}
            >
              <h2 className="font-heading text-2xl font-medium text-navy-700 md:text-3xl">
                {link.title}
              </h2>
              <p className="mt-3 max-w-md text-base text-gray-500">
                {link.description}
              </p>
              <span className="mt-6 inline-flex text-sm text-navy-700">
                Go to {link.title} →
              </span>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
}
