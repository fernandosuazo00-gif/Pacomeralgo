import type { ReactNode } from "react";
import clsx from "clsx";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speedClassName?: string;
};

// Duplicates content once so the CSS animation (-50%) loops seamlessly.
export function Marquee({
  children,
  className,
  reverse = false,
  speedClassName = "animate-marquee",
}: MarqueeProps) {
  return (
    <div className={clsx("group relative flex overflow-hidden", className)}>
      <div
        className={clsx(
          "flex shrink-0 items-center gap-4 [motion-reduce:animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : speedClassName
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          "flex shrink-0 items-center gap-4",
          reverse ? "animate-marquee-reverse" : speedClassName
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
