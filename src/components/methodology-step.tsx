import { Eyebrow } from "./eyebrow";

export function MethodologyStep({
  index,
  label,
  title,
  description,
}: {
  index: number;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-gray-200 pt-6">
      <Eyebrow>
        {String(index).padStart(2, "0")} — {label}
      </Eyebrow>
      <h4 className="font-sans text-[clamp(1.75rem,3vw,2rem)] font-medium text-navy-700">
        {title}
      </h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
