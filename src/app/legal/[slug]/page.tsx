import { notFound } from "next/navigation";

import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-container";
import { findLegalPage, legalPages } from "@/lib/content/legal";
import type { LegalBlock } from "@/lib/content/types";

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
        <h2
          key={index}
          className="font-heading text-2xl mt-8 font-medium"
        >
          {block.text}
        </h2>
      );
    }

    return (
      <h3
        key={index}
        className="font-heading text-xl mt-6 font-medium"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={index} className="text-gray-500 leading-relaxed">
        {block.text}
      </p>
    );
  }

  return (
    <ul
      key={index}
      className="list-disc pl-6 text-gray-500 flex flex-col gap-2"
    >
      {block.items.map((item, itemIndex) => (
        <li key={itemIndex}>{item}</li>
      ))}
    </ul>
  );
}

export default async function LegalPageRoute(
  props: PageProps<"/legal/[slug]">,
) {
  const { slug } = await props.params;
  const page = findLegalPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Hero
        variant="light"
        eyebrow={"Updated " + page.updatedAt}
        title={page.title}
      />
      <PageSection>
        <div className="mx-auto max-w-3xl flex flex-col gap-5 text-navy-700">
          {page.body.map((block, index) => renderBlock(block, index))}
        </div>
      </PageSection>
    </>
  );
}
