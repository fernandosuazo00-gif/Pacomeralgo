"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { OrderTrigger } from "@/components/ui/order-trigger";

export function StickyOrderBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isGambos = pathname?.startsWith("/gambos");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !isGambos && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center gap-2 rounded-full border-2 border-ink bg-cream p-2 shadow-[0_6px_0_0_var(--color-ink)]">
            <Link
              href="/menu"
              className="flex-1 cursor-pointer rounded-full py-2.5 text-center text-xs font-bold uppercase tracking-wide text-ink/70 transition-colors hover:text-ink"
            >
              Ver menú
            </Link>
            <OrderTrigger
              variant="pink"
              label="Pedir ahora"
              className="!flex-1 !py-2.5 text-xs"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
