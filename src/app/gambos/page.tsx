import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { GambosMenu } from "@/components/gambos/gambos-menu";
import {
  ArrowRightIcon,
  BikeIcon,
  CalendarIcon,
  InstagramIcon,
  ShrimpIcon,
  StoreOffIcon,
} from "@/components/ui/icons";
import { siteConfig, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "GAMBOS — Seafood Boil en Tegucigalpa",
  description:
    "GAMBOS, el seafood boil de PACOMERALGO en Tegucigalpa. Camarones, mejillones, chorizo y langosta en salsa Louisiana Cajun. Next batch jueves a domingo, pedidos con un día de anticipación. Delivery o pickup.",
  keywords: [
    "seafood boil Tegucigalpa",
    "mariscos Tegucigalpa",
    "camarones Honduras",
    "GAMBOS",
    "cajun seafood Honduras",
  ],
  openGraph: {
    title: "GAMBOS — Seafood boil como nunca antes lo haz probado TGU.",
    description:
      "Camarones, mejillones, chorizo y langosta en salsa Cajun. Jueves a domingo. Delivery o pickup.",
  },
};

const FACTS = [
  {
    icon: CalendarIcon,
    title: "Next batch",
    detail: "Jueves a domingo",
  },
  {
    icon: ShrimpIcon,
    title: "Con anticipación",
    detail: "Pedidos con un día antes",
  },
  {
    icon: BikeIcon,
    title: "Delivery o pickup",
    detail: "Elegí cómo recibirlo",
  },
  {
    icon: StoreOffIcon,
    title: "Sin dine-in",
    detail: "No hay mesas en sitio",
  },
];

const GALLERY = [
  { src: "/images/gambos/boil-tray-lobster.jpg", alt: "Bandeja de seafood boil GAMBOS con langosta, camarones, elote y papas" },
  { src: "/images/gambos/cajun-butter-drizzle.jpg", alt: "Cajun butter siendo servida sobre el seafood boil de GAMBOS" },
  { src: "/images/gambos/boil-trays-drinks.jpg", alt: "Dos bandejas de seafood boil GAMBOS con bebidas" },
];

export default function GambosPage() {
  return (
    <div className="bg-gambos-cream">
      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-gambos-ink pt-24 text-gambos-cream lg:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/gambos/boil-bowl-closeup.jpg"
            alt="Bowl de seafood boil GAMBOS con camarones, mejillones, papas y elote"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gambos-ink via-gambos-ink/70 to-gambos-ink/20" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 pb-16 pt-10 text-center sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-gambos-cream/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gambos-cream/80 transition-colors hover:border-gambos-cream"
            >
              Parte del ecosistema PACOMERALGO
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-gambos-cream shadow-xl sm:h-36 sm:w-36">
              <Image
                src="/logo/gambos-logo.jpg"
                alt="GAMBOS — Seafood Boil"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <h1 className="max-w-2xl text-balance font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
              {siteConfig.gambos.description}
            </h1>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="max-w-md font-scribble text-2xl text-gambos-orange">
              Se come con las manos. Se disfruta sin culpa.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <WhatsAppButton
              message={whatsappMessages.gambosOrder}
              number={siteConfig.gambos.whatsappNumber}
              variant="solid"
              className="mt-2"
            >
              Pedir por WhatsApp
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      {/* Facts row */}
      <section className="border-b-4 border-gambos-ink bg-gambos-orange py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {FACTS.map(({ icon: Icon, title, detail }, i) => (
            <Reveal key={title} delay={0.05 * i}>
              <div className="flex h-full flex-col items-center gap-2 rounded-2xl border-2 border-gambos-ink bg-gambos-cream px-3 py-5 text-center">
                <Icon className="h-6 w-6 text-gambos-orange-deep" />
                <p className="font-display text-sm uppercase leading-tight text-gambos-ink sm:text-base">
                  {title}
                </p>
                <p className="text-xs text-gambos-ink/70">{detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Explainer */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-gambos-ink bg-gambos-cream px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gambos-ink">
              Otra cocina, otra experiencia
            </span>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-gambos-ink sm:text-5xl">
              No es un item del menú.
              <br />
              Es su propia marca.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-gambos-ink/80">
              GAMBOS nació de la misma cocina que las burgers que rompieron
              el internet, pero es un concepto totalmente aparte: seafood
              boil estilo Louisiana Cajun, servido en su propia bandeja,
              bañado en cajun butter. Solo por tandas, solo por encargo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={0.06 * i}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-gambos-ink">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section className="border-y-4 border-gambos-ink bg-gambos-cream py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-5xl uppercase leading-[0.95] text-gambos-ink sm:text-6xl">
              The Gambo Effect
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gambos-orange-deep">
              by PACOMERALGO
            </p>
          </Reveal>
        </div>
        <GambosMenu />
      </section>

      {/* Final CTA */}
      <section className="bg-gambos-ink py-16 text-gambos-cream sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Pedí el tuyo para el próximo batch.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-gambos-cream/75">
              Escribinos por WhatsApp para reservar tu boil — recordá pedir
              con un día de anticipación. Solo delivery o pickup.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="flex flex-wrap items-center justify-center gap-3">
            <WhatsAppButton
              message={whatsappMessages.gambosOrder}
              number={siteConfig.gambos.whatsappNumber}
              variant="solid"
            >
              {siteConfig.gambos.whatsappDisplay}
            </WhatsAppButton>
            <a
              href={siteConfig.gambos.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-gambos-cream px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-gambos-cream hover:text-gambos-ink"
            >
              <InstagramIcon className="h-5 w-5" />
              {siteConfig.gambos.instagramHandle}
            </a>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href="/"
              className="group mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gambos-cream/60 hover:text-gambos-cream"
            >
              Volver a PACOMERALGO
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
