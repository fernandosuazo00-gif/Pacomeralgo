"use client";

import { useEffect, useRef, useState } from "react";

type SmartVideoProps = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  // Mark true only for a video card that's visible in the initial viewport
  // (e.g. the homepage hero) so its poster wins the LCP race.
  priority?: boolean;
};

type NavigatorConnection = {
  saveData?: boolean;
  effectiveType?: string;
};

function canAutoplayVideo() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const connection = (navigator as Navigator & { connection?: NavigatorConnection })
    .connection;
  const isSlow =
    connection?.saveData ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "slow-2g";
  return !reducedMotion && !isSlow;
}

// A single <video> element lives in the DOM from first paint (server and
// client render it identically), showing only its `poster` image until we
// decide to attach a <source>. This matters for performance: swapping in a
// whole new element later (e.g. an <img> replaced by a <video>) makes the
// browser register a brand-new, later Largest Contentful Paint candidate.
// Keeping the same element the whole time means the poster's early paint is
// what counts for LCP, while the multi-megabyte video file itself is only
// requested once we explicitly attach the <source> below.
export function SmartVideo({
  src,
  poster,
  alt,
  className,
  priority = false,
}: SmartVideoProps) {
  const [allowed, setAllowed] = useState(false);
  const [inView, setInView] = useState(priority);
  // Pure derived value, not its own state: attach the <source> the instant
  // both conditions are true. Earlier this waited for the `load` event
  // first, on the theory that it would keep the heavy fetch from competing
  // with critical resources — but on a real network that just serializes
  // two independent downloads (critical assets, then the video) instead of
  // letting them run in parallel like a browser normally would, making the
  // video itself take longer to become playable. The LCP-safety this was
  // protecting against is now handled a different way (see the component
  // comment above: one stable element, never swapped), so there's no more
  // reason to hold the fetch back.
  const readyForSource = allowed && inView;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cheap, synchronous capability check — safe to decide right after mount.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only capability check (matchMedia/connection), not derivable during SSR
    setAllowed(canAutoplayVideo());
  }, []);

  // Priority (hero) videos are already in the initial viewport; everything
  // else waits until it's actually near the viewport before doing anything.
  useEffect(() => {
    if (priority || !wrapperRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (readyForSource && videoRef.current) {
      // Let the native `autoplay` attribute (declared below) drive playback
      // once the newly-attached <source> finishes its resource selection —
      // more reliable across browsers than racing it with a manual .play().
      videoRef.current.load();
    }
  }, [readyForSource]);

  // fetchPriority isn't in React's VideoHTMLAttributes typings, so it's set
  // imperatively; harmless if applied a tick after the initial paint.
  useEffect(() => {
    if (priority) {
      videoRef.current?.setAttribute("fetchpriority", "high");
    }
  }, [priority]);

  return (
    <div ref={wrapperRef} className={className}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={alt}
      >
        {readyForSource && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
