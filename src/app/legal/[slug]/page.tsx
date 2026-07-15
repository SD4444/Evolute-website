import { notFound } from "next/navigation";

import { Hero } from "@/components/hero";
import { EditorialRail, PageSection } from "@/components/page-container";
import { findLegalPage, legalPages } from "@/lib/content/legal";
import { type LegalBlock } from "@/lib/content/types";

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata(props: PageProps<"/legal/[slug]">) {
  const { slug } = await props.params;
  const page = findLegalPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
  };
}

function renderBlock(block: LegalBlock, index: number) {
  if (block.type === "heading") {
    if (block.level === 2) {
      return (
        <h2 key={index} className="mt-8 font-heading text-2xl">
          {block.text}
        </h2>
      );
    }

    return (
      <h3 key={index} className="mt-6 font-heading text-xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={index} className="leading-relaxed text-gray-500">
        {block.text}
      </p>
    );
  }

  return (
    <ul key={index} className="flex list-disc flex-col gap-2 pl-6 text-gray-500">
      {block.items.map((item, itemIndex) => (
        <li key={itemIndex}>{item}</li>
      ))}
    </ul>
  );
}

export default async function LegalPageRoute(props: PageProps<"/legal/[slug]">) {
  const { slug } = await props.params;
  const page = findLegalPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Hero variant="light" eyebrow={"Updated " + page.updatedAt} title={page.title} />
      <PageSection className="pt-10 md:pt-14">
        <EditorialRail>
          <div className="flex flex-col gap-5 text-navy-700">
            {page.body.map((block, index) => renderBlock(block, index))}
          </div>
        </EditorialRail>
      </PageSection>
    </>
  );
}
