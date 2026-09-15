import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="relative inline-block h-16 w-auto overflow-hidden rounded-2xl border-2 border-cream/40">
              <Image
                src="/logo/pacomeralgo-wordmark.png"
                alt="PACOMERALGO"
                width={520}
                height={173}
                className="h-16 w-auto"
              />
            </span>
            <p className="mt-5 max-w-xs font-scribble text-2xl text-pink-light">
              The burgers that smashed the internet.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de PACOMERALGO"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-cream/50 transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de PACOMERALGO"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-cream/50 transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-pink-light">
              Visitanos
            </h3>
            <div className="mt-4 flex gap-3 text-sm text-cream/80">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-light" />
              <p>
                {siteConfig.location.name}
                <br />
                {siteConfig.location.line1}
                <br />
                {siteConfig.location.line2}
              </p>
            </div>
            <div className="mt-4 flex gap-3 text-sm text-cream/80">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-light" />
              <p>
                {siteConfig.hours.days}
                <br />
                {siteConfig.hours.time}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-pink-light">
              Explorá
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm font-medium text-cream/80">
              <li>
                <Link href="/menu" className="cursor-pointer hover:text-cream">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="/#catering" className="cursor-pointer hover:text-cream">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/gambos" className="cursor-pointer hover:text-cream">
                  GAMBOS — seafood boil
                </Link>
              </li>
              <li>
                <Link href="/#ubicacion" className="cursor-pointer hover:text-cream">
                  Ubicación
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} PACOMERALGO. Tegucigalpa, Honduras.</p>
          <p>Designed &amp; developed by {siteConfig.credit.name}</p>
        </div>
      </div>
    </footer>
  );
}
