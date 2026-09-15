"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SmartVideoProps = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
};

// Renders a poster image only for reduced-motion / save-data / slow-connection
// visitors, and otherwise plays a muted looping video once it's near the viewport.
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

export function SmartVideo({ src, poster, alt, className }: SmartVideoProps) {
  // Starts false to match the SSR-rendered poster and avoid a hydration
  // mismatch; flipped right after mount once browser-only APIs are available.
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client capability check, not derivable at render time
    setCanPlayVideo(canAutoplayVideo());
  }, []);

  useEffect(() => {
    if (!canPlayVideo || !wrapperRef.current) return;
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
  }, [canPlayVideo]);

  return (
    <div ref={wrapperRef} className={className}>
      {canPlayVideo && inView ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-label={alt}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover"
          priority={false}
        />
      )}
    </div>
  );
}
