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
        <div className="border-b border-navy-700/20">
          {links.map((link) => (
            <Link
              className="group grid gap-3 border-t border-navy-700/20 py-6 transition-colors hover:text-navy-900 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)_auto] md:items-center md:gap-8 md:py-8"
              href={link.href}
              key={link.href}
            >
              <h2 className="font-heading text-2xl font-medium text-navy-700 transition-colors group-hover:text-navy-900 md:text-3xl">
                {link.title}
              </h2>
              <p className="max-w-md text-base text-navy-600">{link.description}</p>
              <span className="text-sm text-navy-700 transition-transform group-hover:translate-x-1">
                Go to {link.title} →
              </span>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
}
