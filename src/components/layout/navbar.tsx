"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { OrderTrigger } from "@/components/ui/order-trigger";
import { MobileNav } from "./mobile-nav";
import { MenuIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/#catering", label: "Catering" },
  { href: "/gambos", label: "GAMBOS" },
  { href: "/#ubicacion", label: "Ubicación" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 [transform:translateZ(0)] px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={clsx(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full border-2 border-ink px-3 py-2 transition-all duration-300 sm:px-4 [will-change:background-color]",
            scrolled || mobileOpen
              ? "bg-cream/95 shadow-[0_4px_0_0_var(--color-ink)] backdrop-blur"
              : "bg-cream/70 backdrop-blur-sm"
          )}
        >
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2.5 rounded-full py-1 pr-2"
            onClick={() => setMobileOpen(false)}
          >
            <span className="block h-9 w-9 shrink-0 overflow-hidden rounded-xl border-2 border-ink sm:h-10 sm:w-10">
              <Image
                src="/logo/pacomeralgo-icon.jpg"
                alt="PACOMERALGO logo"
                width={80}
                height={80}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="font-display text-xl uppercase leading-none tracking-tight sm:text-2xl">
              Pacomeralgo
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-ink/80 transition-colors hover:bg-ink hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <OrderTrigger variant="pink" className="!px-5 !py-2.5 text-xs" />
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-ink bg-cream lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
