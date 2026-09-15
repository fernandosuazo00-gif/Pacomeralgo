import { Reveal } from "@/components/ui/reveal";
import { SmartVideo } from "@/components/ui/smart-video";
import { ClockIcon, MapPinIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

function buildMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

export function Location() {
  const mapsHref = siteConfig.mapsUrl || buildMapsSearchUrl(siteConfig.location.full);

  return (
    <section id="ubicacion" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cream/80">
              Ubicación
            </span>
            <h2 className="mt-5 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
              Subí al piso 7.
              <br />
              <span className="text-pink-light">Nosotros ponemos</span>
              <br />
              las burgers.
            </h2>

            <div className="mt-7 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cream/30 text-pink-light">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <p className="text-base text-cream/85">
                  {siteConfig.location.name}
                  <br />
                  {siteConfig.location.line1}
                  <br />
                  {siteConfig.location.line2}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cream/30 text-pink-light">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <p className="text-base text-cream/85">
                  {siteConfig.hours.days}
                  <br />
                  {siteConfig.hours.time}
                </p>
              </div>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              <MapPinIcon className="h-4 w-4" />
              Cómo llegar
            </a>
          </Reveal>

          <Reveal delay={0.12} y={40}>
            <div className="relative mx-auto w-full max-w-sm lg:rotate-2">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2.25rem] border-4 border-cream/15 shadow-2xl">
                <SmartVideo
                  src="/videos/venue-vibe.mp4"
                  poster="/videos/venue-vibe-poster.jpg"
                  alt="Vista de las canchas de Padel Club Honduras y la terraza donde está PACOMERALGO"
                  className="relative h-full w-full"
                />
              </div>
              <span className="absolute -bottom-4 -right-3 rounded-full border-2 border-ink bg-olive px-4 py-2 font-scribble text-lg text-olive-ink shadow-[4px_4px_0_0_var(--color-ink)] sm:-right-6">
                buena vista, mejor burger
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
