import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRightIcon, FlameIcon } from "@/components/ui/icons";

type FeaturedItem = {
  name: string;
  price: number;
  description: string;
  tag?: string;
  image: string;
  wide?: boolean;
};

const FEATURED: FeaturedItem[] = [
  {
    name: "La Wagyu",
    price: 380,
    tag: "Chef's favorite",
    description:
      "Wagyu, queso suizo, bacon crujiente, hongos portobello, cebolla crispy, salsa trufada y miel de maracuyá.",
    image: "/images/gallery/club-burger-box.jpg",
    wide: true,
  },
  {
    name: "Mac & Truffle",
    price: 330,
    description:
      "Carne Angus, queso cheddar, mac n cheese, mayonesa trufada y bacon.",
    image: "/images/gallery/mac-truffle.jpg",
  },
  {
    name: "La Argentina",
    price: 300,
    description:
      "Carne Angus, bacon, queso mozzarella, burger sauce, cebolla caramelizada y chimichurri.",
    image: "/images/gallery/la-argentina.jpg",
  },
  {
    name: "La Glaseada",
    price: 360,
    tag: "Chef's favorite",
    description:
      "Pan Hokkaido glaseado, carne Angus, bacon glaseado, queso cheddar, cebolla caramelizada.",
    image: "/images/gallery/loaded-fries-crosscut.jpg",
    wide: true,
  },
  {
    name: "Club Burger",
    price: 340,
    description: "Carne Angus, portobello, bacon, queso suizo, cebolla brûlé.",
    image: "/images/gallery/burger-fries-duo.jpg",
  },
  {
    name: "Cheeseburger",
    price: 260,
    description:
      "Carne Angus, queso cheddar, cebolla brûlé, mayo de ajo negro y cebollina.",
    image: "/images/gallery/smashed-crosscut.jpg",
  },
];

export function FeaturedFood() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-4">
          <Reveal>
            <div className="relative z-10 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-olive px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-olive-ink">
                Fotos reales, cero filtros
              </span>
              <h2 className="mt-5 font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
                Sí. Se ve
                <br />
                así de bueno
                <br />
                <span className="text-pink">en persona.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-sm text-base text-ink-soft lg:mx-0">
                Cada burger sale de la plancha, se envuelve en su propio
                papel y llega directo a tu mesa (o a tu puerta). Nada de
                stock photos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={40}>
            <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0 lg:rotate-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-4 border-ink shadow-[10px_10px_0_0_var(--color-ink)]">
                <Image
                  src="/images/gallery/wagyu-stack.jpg"
                  alt="La Wagyu de PACOMERALGO, corte con queso suizo y bacon crujiente"
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-4 -left-4 rounded-full border-2 border-ink bg-pink px-4 py-2 font-scribble text-lg text-cream shadow-[4px_4px_0_0_var(--color-ink)] sm:-left-8">
                hecho en Tegus
              </span>
            </div>
          </Reveal>
        </div>

        {/* Editorial food grid — horizontal scroll on mobile, bento on desktop */}
        <div className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 lg:mt-20 lg:grid lg:snap-none lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0">
          {FEATURED.map((item, i) => (
            <Reveal
              key={item.name}
              delay={0.05 * i}
              className={`w-[78%] shrink-0 snap-center lg:w-auto ${
                item.wide ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper transition-transform duration-300 hover:-translate-y-1.5">
                <div
                  className={`relative w-full overflow-hidden ${
                    item.wide ? "aspect-[4/3]" : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} — ${item.description}`}
                    fill
                    sizes={
                      item.wide
                        ? "(min-width: 1024px) 620px, 78vw"
                        : "(min-width: 1024px) 300px, 78vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.tag && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border-2 border-ink bg-pink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-cream">
                      <FlameIcon className="h-3 w-3" />
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl uppercase leading-none sm:text-2xl">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-display text-lg text-pink">
                      L{item.price}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-start">
          <Link
            href="/menu"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
          >
            Ver menú completo
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
