import { useId } from "react";

type Props = {
  /** "dark" = navy mark on light backgrounds, "light" = white mark on dark backgrounds */
  tone?: "dark" | "light";
  className?: string;
  showText?: boolean;
};

export function LogoMark({ tone = "dark", className = "h-9 w-9" }: Omit<Props, "showText">) {
  const id = useId();
  const base = tone === "dark" ? "#0A1F44" : "#FFFFFF";
  return (
    <svg viewBox="24 24 196 186" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="50" y1="0" x2="212" y2="0">
          <stop offset="0.43" stopColor={base} />
          <stop offset="0.6" stopColor="#0FB5A6" />
          <stop offset="1" stopColor="#22C55E" />
        </linearGradient>
      </defs>
      <rect x="174" y="118" width="32" height="86" fill={base} />
      <path
        d="M50 204 V62 L120 142 L183.47 67.5"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="32"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
      />
      <polygon points="212,34 207.29,90.42 157.05,47.62" fill="#22C55E" />
    </svg>
  );
}

export function Logo({ tone = "dark", className = "", showText = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-xl font-semibold tracking-wide ${
              tone === "dark" ? "text-navy-900" : "text-white"
            }`}
          >
            MEGNETORA
          </span>
          <span className="mt-1 font-display text-[0.6rem] font-medium tracking-[0.42em] text-green">
            AI SOLUTIONS
          </span>
        </span>
      )}
    </span>
  );
}
