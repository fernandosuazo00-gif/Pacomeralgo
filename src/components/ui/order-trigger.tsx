"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site-config";
import { ArrowRightIcon, CloseIcon, WhatsAppIcon } from "./icons";

type OrderTriggerProps = {
  className?: string;
  label?: string;
  variant?: "pink" | "cream" | "ink";
};

function PedidosYaMark() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white font-display text-[11px] leading-none text-[#FF0037]">
      pY
    </span>
  );
}

export function OrderTrigger({
  className,
  label = "Pedir ahora",
  variant = "pink",
}: OrderTriggerProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const hasPedidosYa = Boolean(siteConfig.pedidosYaUrl);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={clsx(
          "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 active:scale-[0.97]",
          variant === "pink" &&
            "bg-pink text-cream sticker-shadow hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_var(--color-ink)]",
          variant === "cream" &&
            "bg-cream text-ink sticker-shadow-sm hover:-translate-y-0.5",
          variant === "ink" &&
            "bg-ink text-cream sticker-shadow-sm hover:-translate-y-0.5 hover:bg-pink",
          className
        )}
      >
        {label}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-100 flex items-end justify-center sm:items-center"
            initial="closed"
            animate="open"
            exit="closed"
            aria-hidden={false}
          >
            <motion.div
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: 40, opacity: 0 },
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md rounded-t-[2rem] border-t-4 border-ink bg-cream p-6 pb-8 shadow-2xl sm:rounded-[2rem] sm:border-4"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-scribble text-xl text-pink">¿Cómo querés pedir?</p>
                  <h3 id={titleId} className="font-display text-3xl uppercase leading-none">
                    Elegí tu canal
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar"
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={buildWhatsAppUrl(whatsappMessages.order)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-[#25D366] px-5 py-4 transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#25D366]">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col text-left text-ink">
                    <span className="font-display text-lg uppercase leading-tight">
                      WhatsApp
                    </span>
                    <span className="text-sm font-medium opacity-80">
                      Directo con el equipo — {siteConfig.contact.whatsappDisplay}
                    </span>
                  </span>
                </a>

                {hasPedidosYa ? (
                  <a
                    href={siteConfig.pedidosYaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-[#FF0037] px-5 py-4 text-cream transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <PedidosYaMark />
                    <span className="flex flex-col text-left">
                      <span className="font-display text-lg uppercase leading-tight">
                        PedidosYa
                      </span>
                      <span className="text-sm font-medium opacity-90">
                        Delivery con seguimiento en la app
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-ink/40 bg-ink/5 px-5 py-4 text-ink/60">
                    <PedidosYaMark />
                    <span className="flex flex-col text-left">
                      <span className="font-display text-lg uppercase leading-tight">
                        PedidosYa
                      </span>
                      <span className="text-sm font-medium">Muy pronto por aquí</span>
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
