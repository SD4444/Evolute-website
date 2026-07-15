"use client";

import Link from "next/link";
import { useState } from "react";

import { type Project } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

function ProjectDetails({ project, accentColor }: { project: Project; accentColor: string }) {
  return (
    <div className="flex flex-col gap-8 py-8 md:py-10 lg:pt-0">
      <div className="flex h-14 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={project.name}
          className="project-logo-monochrome max-h-12 max-w-56 object-contain object-left"
          src={project.logo}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.03em] text-navy-700">
          {project.name}
        </h3>
        <p className="max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
          {project.summary}
        </p>
      </div>
      <dl className="border-y border-navy-700/15">
        <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-navy-700/15 py-4 text-sm">
          <dt className="text-gray-500">Engagement</dt>
          <dd className="text-navy-700">{project.engagement}</dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-navy-700/15 py-4 text-sm">
          <dt className="text-gray-500">Stage</dt>
          <dd className="text-navy-700">{project.stage}</dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-sm">
          <dt className="text-gray-500">Vertical</dt>
          <dd className="text-navy-700">{project.vertical}</dd>
        </div>
      </dl>
      {project.caseStudySlug ? (
        <Link
          className="w-fit text-sm font-medium underline-offset-4 hover:underline"
          href={`/insights/${project.caseStudySlug}`}
          style={{ color: accentColor }}
        >
          Read the case study →
        </Link>
      ) : (
        <Link
          className="w-fit text-sm font-medium underline-offset-4 hover:underline"
          href="/contact"
          style={{ color: accentColor }}
        >
          Discuss a similar project →
        </Link>
      )}
    </div>
  );
}

export function IndustryProjectIndex({
  accentColor,
  industryTitle,
  projects,
}: {
  accentColor: string;
  industryTitle: string;
  projects: Project[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = projects[selectedIndex] ?? projects[0];

  if (!selected) {
    return null;
  }

  return (
    <section className="border-t border-rule py-20 md:py-28">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-6 md:px-10 lg:gap-16">
        <div className="flex max-w-4xl flex-col gap-6">
          <p className="text-[0.6875rem] tracking-[0.18em] text-gray-500 uppercase">
            Selected work
          </p>
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.02] tracking-[-0.03em] text-navy-700">
              Projects in {industryTitle}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
              A selection of companies we have supported across fundraising, transactions, and
              strategic capital decisions.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:hidden">
          {projects.map((project, index) => (
            <details className="group border-t border-navy-700/15" key={project.name}>
              <summary className="grid min-h-16 cursor-pointer list-none grid-cols-[2.5rem_1fr_2rem] items-center gap-3 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="text-[0.6875rem] tracking-[0.12em] text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-xl text-navy-700">{project.name}</span>
                <span className="justify-self-end text-xl text-navy-700 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pl-[3.25rem]">
                <ProjectDetails accentColor={accentColor} project={project} />
              </div>
            </details>
          ))}
          <div className="border-t border-navy-700/15" />
        </div>

        <div className="hidden gap-16 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)]">
          <ol>
            {projects.map((project, index) => {
              const active = index === selectedIndex;
              return (
                <li className="border-t border-navy-700/15" key={project.name}>
                  <button
                    aria-pressed={active}
                    className={cn(
                      "grid min-h-20 w-full grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-700",
                      active ? "text-navy-700" : "text-gray-500 hover:text-navy-700",
                    )}
                    onClick={() => setSelectedIndex(index)}
                    onFocus={() => setSelectedIndex(index)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    type="button"
                  >
                    <span
                      className="text-[0.6875rem] tracking-[0.12em]"
                      style={{ color: active ? accentColor : undefined }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-xl">{project.name}</span>
                    <span className="text-xs tracking-[0.08em] uppercase">{project.stage}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="self-start lg:sticky lg:top-28" aria-live="polite">
            <ProjectDetails accentColor={accentColor} project={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}
