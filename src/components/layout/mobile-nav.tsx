"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { CloseIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site-config";

type NavLink = { href: string; label: string };

export function MobileNav({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-90 flex flex-col bg-pink text-cream lg:hidden"
          initial={{ clipPath: "circle(2% at 92% 4%)" }}
          animate={{ clipPath: "circle(150% at 92% 4%)" }}
          exit={{ clipPath: "circle(2% at 92% 4%)" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <span className="block h-10 w-10 overflow-hidden rounded-xl border-2 border-cream">
              <Image
                src="/logo/pacomeralgo-icon.jpg"
                alt="PACOMERALGO"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-cream"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block cursor-pointer border-b-2 border-cream/25 py-4 font-display text-4xl uppercase leading-none tracking-tight active:text-ink"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-col gap-4 px-6 pb-10">
            <a
              href={buildWhatsAppUrl(whatsappMessages.order)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-cream bg-cream px-6 py-4 font-display text-lg uppercase tracking-wide text-pink"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir por WhatsApp
            </a>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-cream px-6 py-3.5 text-sm font-bold uppercase tracking-wide"
            >
              <InstagramIcon className="h-5 w-5" />
              {siteConfig.contact.instagramHandle}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
