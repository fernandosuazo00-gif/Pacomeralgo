import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRightIcon,
  BikeIcon,
  CalendarIcon,
  ShrimpIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const FACTS = [
  { icon: CalendarIcon, label: siteConfig.gambos.schedule },
  { icon: ShrimpIcon, label: siteConfig.gambos.leadTime },
  { icon: BikeIcon, label: siteConfig.gambos.fulfillment },
];

export function GambosTeaser() {
  return (
    <section
      className="relative overflow-hidden py-20 text-gambos-cream sm:py-28"
      style={{
        background:
          "linear-gradient(115deg, var(--color-ink) 0%, var(--color-pink-deep) 32%, var(--color-gambos-orange-deep) 68%, var(--color-gambos-orange) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-pink/30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gambos-orange/40 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gambos-cream/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gambos-cream/80">
            Otra marca, misma cocina
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-2xl uppercase tracking-wide text-gambos-cream/70 sm:text-3xl">
            Conocé nuestra otra marca
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-6 h-32 w-32 overflow-hidden rounded-full border-4 border-gambos-cream shadow-[0_0_0_6px_rgba(0,0,0,0.15)] sm:h-40 sm:w-40">
            <Image
              src="/logo/gambos-logo.jpg"
              alt="GAMBOS — Seafood Boil"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-7 max-w-xl text-balance font-display text-3xl uppercase leading-tight sm:text-4xl">
            {siteConfig.gambos.description}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            {FACTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-gambos-cream/30 bg-black/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wide sm:text-[13px]"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.38}>
          <Link
            href="/gambos"
            className="group mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-gambos-cream bg-gambos-cream px-8 py-4 font-display text-lg uppercase tracking-wide text-gambos-orange-deep shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5"
          >
            Conocer GAMBOS
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
