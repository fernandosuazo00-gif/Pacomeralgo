import type { Metadata } from "next";
import { menuCategories, menuCredit } from "@/lib/menu-data";
import { MenuNav } from "@/components/menu/menu-nav";
import { MenuSection } from "@/components/menu/menu-section";
import { InlineOrderCta } from "@/components/menu/inline-order-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "El menú completo de PACOMERALGO: smash burgers, loaded fries, chicken tenders, postres y promos. Precios en Lempiras. Pedí por WhatsApp o PedidosYa.",
};

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Menú PACOMERALGO",
  url: `${siteConfig.url}/menu`,
  inLanguage: "es-HN",
  hasMenuSection: menuCategories.map((category) => ({
    "@type": "MenuSection",
    name: category.title,
    hasMenuItem: category.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "HNL",
      },
    })),
  })),
};

export default function MenuPage() {
  return (
    <div className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <div className="relative overflow-hidden border-b-4 border-ink bg-ink pb-12 pt-32 text-cream sm:pb-16 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-pink/30 blur-[100px]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
          <div>
            <h1 className="font-display text-6xl uppercase leading-none sm:text-7xl">
              Menú
            </h1>
            <p className="mt-3 text-sm font-bold uppercase tracking-widest text-cream/70">
              {menuCredit}
            </p>
          </div>
          <p className="max-w-lg font-scribble text-2xl text-pink-light">
            Precios en Lempiras. Elegí, pedí, disfrutá.
          </p>
        </div>
      </div>

      <MenuNav categories={menuCategories} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {menuCategories.map((category, i) => (
          <div key={category.id}>
            <MenuSection category={category} />
            {category.id === "burgers" && (
              <InlineOrderCta text="¿Ya se te antojó? Pedí tu burger ahora." />
            )}
            {category.id === "promos" && (
              <InlineOrderCta text="Las promos vuelan. Asegurá la tuya." />
            )}
            {i === menuCategories.length - 1 && (
              <InlineOrderCta text="Eso es todo el menú. ¿Con qué arrancamos?" />
            )}
          </div>
        ))}
      </div>

      <div className="h-10" />
    </div>
  );
}
