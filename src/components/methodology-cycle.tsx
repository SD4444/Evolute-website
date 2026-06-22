"use client";

import { useState } from "react";

import { type MethodologyStep } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const positions = [
  "top-0 left-1/2 -translate-x-1/2",
  "top-1/2 right-0 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
  "top-1/2 left-0 -translate-y-1/2",
];

export function MethodologyCycle({ steps }: { steps: MethodologyStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex] ?? steps[0];

  if (!activeStep) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col md:hidden">
        {steps.map((step, index) => (
          <div
            className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-navy-700/15 py-6 last:border-b"
            key={step.title}
          >
            <span className="font-mono text-[0.6875rem] tracking-[0.12em] text-gray-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2">
              <h4 className="font-heading text-2xl font-medium text-navy-700">{step.title}</h4>
              <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto hidden w-full max-w-[31rem] flex-col gap-8 md:flex">
        <div className="relative mx-auto aspect-square w-full max-w-[25rem]">
          <svg
            aria-hidden="true"
            className="absolute inset-[10%] h-[80%] w-[80%] text-navy-700/25"
            viewBox="0 0 100 100"
          >
            <defs>
              <marker
                id="methodology-cycle-arrow"
                markerHeight="5"
                markerWidth="5"
                orient="auto"
                refX="4"
                refY="2.5"
                viewBox="0 0 5 5"
              >
                <path d="M0 0L5 2.5L0 5Z" fill="currentColor" />
              </marker>
            </defs>
            <path
              d="M50 10 A40 40 0 0 1 90 50"
              fill="none"
              markerEnd="url(#methodology-cycle-arrow)"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M90 50 A40 40 0 0 1 50 90"
              fill="none"
              markerEnd="url(#methodology-cycle-arrow)"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M50 90 A40 40 0 0 1 10 50"
              fill="none"
              markerEnd="url(#methodology-cycle-arrow)"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M10 50 A40 40 0 0 1 50 10"
              fill="none"
              markerEnd="url(#methodology-cycle-arrow)"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>

          {steps.slice(0, 4).map((step, index) => {
            const active = activeIndex === index;
            return (
              <button
                aria-pressed={active}
                className={cn(
                  "absolute z-10 flex min-w-32 flex-col items-center gap-1 bg-background px-4 py-3 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-700",
                  positions[index],
                  active ? "text-navy-700" : "text-gray-400 hover:text-navy-700",
                )}
                key={step.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.12em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-lg font-medium">{step.title}</span>
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="grid min-h-24 grid-cols-[7rem_1fr] gap-6 border-t border-navy-700/15 pt-6"
        >
          <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-gray-500 uppercase">
            {String(activeIndex + 1).padStart(2, "0")} / {activeStep.label}
          </p>
          <p className="text-base leading-relaxed text-navy-600">{activeStep.description}</p>
        </div>
      </div>
    </div>
  );
}
