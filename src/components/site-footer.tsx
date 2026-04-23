import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

import { LogoWordmark } from "@/components/brand/logo-wordmark";
import {
  companyServices,
  industryLinks,
  investorServices,
  legalLinks,
} from "@/lib/content/nav";

function FooterList({
  title,
  links,
}: {
  title: string;
  links: { href: string; title: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-[0.6875rem] tracking-widest text-gray-400 uppercase">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-sm text-white/80 hover:text-white"
              href={link.href}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const withPrefix = (
  items: { slug: string; title: string }[],
  prefix: string,
) => items.map((item) => ({ href: `${prefix}/${item.slug}`, title: item.title }));

export function SiteFooter() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Link
          aria-label="Contact us"
          className="group flex items-center gap-6 text-white transition-opacity hover:opacity-80"
          href="/contact"
        >
          <span className="font-heading text-[clamp(3.5rem,10vw,9rem)] leading-[0.95] font-medium tracking-tight">
            Contact us
          </span>
          <RiArrowRightLine className="size-[clamp(2.5rem,6vw,5rem)] transition-transform group-hover:translate-x-2" />
        </Link>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] gap-16 px-6 py-16 md:grid-cols-[1fr_1fr_auto] md:px-10">
        <div className="flex flex-col gap-10">
          <FooterList
            links={withPrefix(companyServices, "/services/companies")}
            title="Services for companies"
          />
          <FooterList
            links={withPrefix(investorServices, "/services/investors")}
            title="Services for investors"
          />
        </div>
        <div className="flex flex-col gap-10">
          <FooterList
            links={withPrefix(industryLinks, "/industries")}
            title="Industries"
          />
          <FooterList
            links={[
              { href: "/insights", title: "Insights" },
              { href: "/about-us", title: "About us" },
              { href: "/contact", title: "Contact" },
            ]}
            title="Company"
          />
        </div>
        <div className="md:self-end md:justify-self-end">
          <Link aria-label="Evolute" href="/">
            <LogoWordmark height={44} invert />
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-white/60 md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} evolute. All rights reserved.</p>
        <ul className="flex flex-wrap gap-6">
          {legalLinks.map((link) => (
            <li key={link.slug}>
              <Link className="hover:text-white" href={`/legal/${link.slug}`}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
