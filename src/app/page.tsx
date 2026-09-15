import { Hero } from "@/components/home/hero";
import { FeaturedFood } from "@/components/home/featured-food";
import { Catering } from "@/components/home/catering";
import { Location } from "@/components/home/location";
import { GambosTeaser } from "@/components/home/gambos-teaser";
import { Gallery } from "@/components/home/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedFood />
      <Catering />
      <Location />
      <GambosTeaser />
      <Gallery />
    </>
  );
}
