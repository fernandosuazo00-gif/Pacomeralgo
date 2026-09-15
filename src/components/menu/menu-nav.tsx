"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { MenuCategory } from "@/lib/menu-data";

const SCROLL_OFFSET = 132; // fixed navbar + sticky chip bar height

export function MenuNav({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const chipListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: `-${SCROLL_OFFSET}px 0px -60% 0px`, threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const chip = chipRefs.current[active ?? ""];
    chip?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="sticky top-[64px] z-30 [transform:translateZ(0)] border-b-2 border-ink bg-cream/95 backdrop-blur sm:top-[72px]">
      <div
        ref={chipListRef}
        className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            ref={(el) => {
              chipRefs.current[cat.id] = el;
            }}
            type="button"
            onClick={() => scrollToSection(cat.id)}
            className={clsx(
              "shrink-0 cursor-pointer rounded-full border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm",
              active === cat.id
                ? "bg-ink text-cream"
                : "bg-cream text-ink hover:bg-olive/40"
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </div>
  );
}
