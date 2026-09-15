import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { InstagramIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const ROW_ONE = [
  { src: "/images/gallery/flatlay-spread.jpg", alt: "Spread de truffle fries, wings y jalapeño cheese bombs de PACOMERALGO" },
  { src: "/images/gallery/tenders-wedges-beer.jpg", alt: "Chicken tenders, papas y cerveza sobre la mesa" },
  { src: "/images/gallery/candid-bite.jpg", alt: "Burger PACOMERALGO recién mordida" },
  { src: "/images/gallery/padel-court-burger.jpg", alt: "Burger y papas junto a la cancha de padel" },
];

const ROW_TWO = [
  { src: "/images/gallery/burger-fries-duo.jpg", alt: "Dos burgers PACOMERALGO con papas dulces" },
  { src: "/images/gallery/loaded-fries-crosscut.jpg", alt: "Corte transversal de burger con papas cargadas" },
  { src: "/images/gallery/wagyu-stack.jpg", alt: "Corte de La Wagyu con vista de Tegucigalpa" },
  { src: "/images/gallery/mac-truffle.jpg", alt: "Burger Mac & Truffle con macarrones y bacon" },
];

function GalleryTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl border-2 border-ink sm:h-56 sm:w-72">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="288px"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Energía de Instagram
          </span>
          <h2 className="mt-5 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
            Directo del feed
            <br />a tu antojo.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <Marquee speedClassName="animate-marquee-slow">
          {ROW_ONE.map((img) => (
            <GalleryTile key={img.src} {...img} />
          ))}
        </Marquee>
        <Marquee reverse>
          {ROW_TWO.map((img) => (
            <GalleryTile key={img.src} {...img} />
          ))}
        </Marquee>
      </div>

      <Reveal className="mt-14 flex justify-center">
        <a
          href={siteConfig.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-8 py-4 font-display text-lg uppercase tracking-wide text-cream shadow-[6px_6px_0_0_var(--color-pink)] transition-transform hover:-translate-y-0.5"
        >
          <InstagramIcon className="h-5 w-5" />
          Seguinos en Instagram
        </a>
      </Reveal>
    </section>
  );
}
