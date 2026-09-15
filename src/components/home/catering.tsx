import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { SparkleIcon } from "@/components/ui/icons";
import { whatsappMessages } from "@/lib/site-config";

const HIGHLIGHTS = [
  "Cumpleaños y celebraciones",
  "Eventos corporativos",
  "Fiestas privadas",
];

export function Catering() {
  return (
    <section id="catering" className="relative overflow-hidden bg-olive py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cream/40 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal y={40}>
            <div className="relative mx-auto w-full max-w-md lg:-rotate-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-4 border-ink shadow-[10px_10px_0_0_var(--color-ink)]">
                <Image
                  src="/images/gallery/flatlay-spread.jpg"
                  alt="Mesa con spread de burgers, papas y aperitivos PACOMERALGO listos para un evento"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-pink text-center font-display text-xs uppercase leading-tight text-cream shadow-[4px_4px_0_0_var(--color-ink)] sm:-right-6 sm:-top-6 sm:h-24 sm:w-24">
                <span>
                  Para tu
                  <br />
                  evento
                </span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
              Catering
            </span>
            <h2 className="mt-5 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
              Pacomeralgo
              <br />
              en tu evento.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base text-olive-ink lg:mx-0">
              Llevamos las burgers que rompieron el internet directo a tu
              fiesta, oficina o celebración. Contanos los detalles de tu
              evento por WhatsApp y armamos la propuesta ideal para vos.
            </p>

            <ul className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2.5 lg:mx-0 lg:justify-start">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-1.5 rounded-full border-2 border-ink bg-cream/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-ink"
                >
                  <SparkleIcon className="h-3 w-3 text-pink" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center lg:justify-start">
              <WhatsAppButton message={whatsappMessages.catering} variant="ink">
                Cotizar catering
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
