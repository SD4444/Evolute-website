import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export function ServiceCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="group h-full transition-colors hover:bg-gray-50">
      <Link href={href} className="block h-full">
        <CardContent className="flex h-full flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-xl text-navy-700">{title}</h3>
            <RiArrowRightUpLine
              className="size-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy-700"
              aria-hidden="true"
            />
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
