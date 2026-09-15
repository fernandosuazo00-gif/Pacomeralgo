"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { OrderTrigger } from "@/components/ui/order-trigger";
import { SmartVideo } from "@/components/ui/smart-video";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { ClockIcon, MapPinIcon, SparkleIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const WRAPPER_WORDS = [
  "SMASHED",
  "TRUFFLE",
  "BEST QUALITY",
  "CHEF VALERIO",
  "CHEF RANDALL",
  "100% ANGUS",
  "HECHO EN TGU",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink pb-0 pt-24 text-cream lg:pt-32"
    >
      {/* ambient pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-pink/30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-olive/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Video card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:order-2 lg:rotate-2 lg:max-w-none"
          >
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2.25rem] border-4 border-cream/15 bg-ink shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
              <SmartVideo
                src="/videos/hero-smash.mp4"
                poster="/videos/hero-smash-poster.jpg"
                alt="Burger PACOMERALGO recién armada, con queso derretido y salsa"
                className="relative h-full w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            </div>

            {/* sticker badges */}
            <motion.span
              initial={{ opacity: 0, y: -10, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -left-5 -top-5 flex items-center gap-1.5 rounded-full border-2 border-ink bg-pink px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-cream shadow-[4px_4px_0_0_var(--color-ink)] sm:-left-8"
            >
              <SparkleIcon className="h-3.5 w-3.5" />
              Smash burgers
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -bottom-4 -right-3 rounded-full border-2 border-ink bg-cream px-3.5 py-2 font-scribble text-lg text-pink shadow-[4px_4px_0_0_var(--color-ink)] sm:-right-6"
            >
              100% Angus 🔥
            </motion.span>
          </motion.div>

          {/* Copy column */}
          <div className="relative order-2 text-center lg:order-1 lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 bg-cream/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cream/80">
                Tegucigalpa · Piso 7 · La Galería
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[13vw] uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[5.2rem] xl:text-[5.6rem]">
                The burgers
                <br />
                that <span className="text-pink-light">smashed</span>
                <br />
                the internet.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-md font-scribble text-2xl text-olive lg:mx-0">
                Sí. Se ven así de buenas en persona.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <OrderTrigger variant="pink" label="Pedir ahora" />
                <Link
                  href="/menu"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-cream px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-ink"
                >
                  Ver menú
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-col items-center gap-2 text-sm text-cream/70 sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4 text-pink-light" />
                  {siteConfig.location.name}, {siteConfig.location.line1}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="h-4 w-4 text-pink-light" />
                  {siteConfig.hours.time}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative mt-14 border-y-2 border-cream/10 bg-cream/5 py-3 lg:mt-20">
        <Marquee>
          {WRAPPER_WORDS.map((word) => (
            <span
              key={word}
              className="mx-4 flex items-center gap-3 font-display text-sm uppercase tracking-[0.2em] text-cream/60"
            >
              {word}
              <SparkleIcon className="h-3 w-3 text-pink-light" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
