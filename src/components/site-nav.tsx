"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  companyServices,
  industryLinks,
  investorServices,
} from "@/lib/content/nav";

function NavColumn({
  title,
  items,
  onItemClick,
}: {
  title: string;
  items: { href: string; title: string }[];
  onItemClick?: () => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-[0.6875rem] tracking-widest text-gray-500 uppercase">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className="font-heading text-xl text-navy-700 hover:text-navy-900 md:text-2xl"
              href={item.href}
              onClick={onItemClick}
            >
              {item.title}
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

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();
  const onDarkHero = pathname === "/" || pathname.startsWith("/services/");

  return (
    <header className="absolute top-0 right-0 left-0 z-40">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Evolute" className="flex items-center">
          <LogoWordmark height={20} invert={onDarkHero} />
        </Link>

        <div className="flex items-center gap-2">
          <Button
            className={
              onDarkHero ? "bg-white text-navy-700 hover:bg-white/90" : undefined
            }
            render={<Link href="/contact" />}
            size="lg"
          >
            Get in touch
          </Button>
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger
              render={
                <Button
                  aria-label="Open menu"
                  className={
                    onDarkHero
                      ? "border-white/30 text-white hover:bg-white/10"
                      : undefined
                  }
                  size="lg"
                  variant="outline"
                >
                  <RiMenuLine />
                  Menu
                </Button>
              }
            />
            <SheetContent
              className="w-full overflow-y-auto bg-background p-0 sm:!max-w-[720px]"
              showCloseButton={false}
              side="right"
            >
              <div className="flex items-center justify-between px-6 pt-6 md:px-10">
                <Link
                  aria-label="Evolute"
                  className="flex items-center"
                  href="/"
                  onClick={close}
                >
                  <LogoWordmark height={20} />
                </Link>
                <SheetClose
                  render={
                    <Button size="icon" variant="ghost" aria-label="Close menu">
                      <RiCloseLine />
                    </Button>
                  }
                />
              </div>

              <nav className="grid gap-12 px-6 py-12 md:grid-cols-2 md:px-10">
                <div className="flex flex-col gap-10">
                  <NavColumn
                    items={withPrefix(companyServices, "/services/companies")}
                    onItemClick={close}
                    title="Services for companies"
                  />
                  <NavColumn
                    items={withPrefix(investorServices, "/services/investors")}
                    onItemClick={close}
                    title="Services for investors"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <NavColumn
                    items={withPrefix(industryLinks, "/industries")}
                    onItemClick={close}
                    title="Industries"
                  />
                  <NavColumn
                    items={[
                      { href: "/insights", title: "Insights" },
                      { href: "/about-us", title: "About us" },
                      { href: "/contact", title: "Contact" },
                    ]}
                    onItemClick={close}
                    title="Company"
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
