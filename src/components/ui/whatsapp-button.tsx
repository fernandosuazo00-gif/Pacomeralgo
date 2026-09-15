import clsx from "clsx";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

type WhatsAppButtonProps = {
  message: string;
  number?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ink";
};

export function WhatsAppButton({
  message,
  number,
  children,
  className,
  variant = "solid",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message, number);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 active:scale-[0.97]",
        variant === "solid" &&
          "bg-[#25D366] text-ink sticker-shadow-sm hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_var(--color-ink)]",
        variant === "outline" &&
          "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-cream",
        variant === "ink" &&
          "bg-ink text-cream hover:bg-[#25D366] hover:text-ink",
        className
      )}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {children}
    </a>
  );
}
