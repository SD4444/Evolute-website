import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className={cn("inline-block", className)}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M 15.47 4.925 C 16.591 3.605 17.386 2.434 17.903 1.412 L 21.918 3.534 C 21.191 4.973 20.164 6.446 18.885 7.953 C 17.495 9.597 15.681 10.954 13.522 12.062 L 13.503 12.071 L 13.484 12.081 C 11.132 13.232 8.304 13.743 5.106 13.743 L 1.412 13.743 L 1.412 9.122 L 5.106 9.122 C 7.855 9.122 9.956 8.679 11.514 7.921 C 13.256 7.025 14.549 6.015 15.466 4.929 L 15.468 4.927 Z M 22.588 22.588 L 1.412 22.588 L 1.412 17.966 L 22.588 17.966 Z" />
    </svg>
  );
}
