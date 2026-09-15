import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

// Plain CSS entrance animation (see .reveal / @keyframes reveal-up in
// globals.css) — no JS, no IntersectionObserver, no hydration dependency.
// Content is real, visible markup from the very first byte; it just
// animates in shortly after paint instead of popping in instantly.
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div className={clsx("reveal", className)} style={style}>
      {children}
    </div>
  );
}
