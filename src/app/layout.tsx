import type { Metadata } from "next";
import { Anton, Epilogue, Caveat } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyOrderBar } from "@/components/layout/sticky-order-bar";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PACOMERALGO — Las burgers que rompieron el internet en Tegucigalpa",
    template: "%s | PACOMERALGO",
  },
  description:
    "Hamburguesas smash en Tegucigalpa. PACOMERALGO en Padel Club Honduras, Piso 7, La Galería. Pedí por WhatsApp o PedidosYa. Catering para eventos y también GAMBOS, nuestro seafood boil.",
  keywords: [
    "hamburguesas Tegucigalpa",
    "burgers Tegucigalpa",
    "restaurantes Tegucigalpa",
    "hamburguesas Honduras",
    "catering Tegucigalpa",
    "Padel Club Honduras",
    "La Galería Tegucigalpa",
    "PACOMERALGO",
    "smash burgers Honduras",
  ],
  authors: [{ name: "PACOMERALGO" }],
  openGraph: {
    title: "PACOMERALGO — The burgers that smashed the internet.",
    description:
      "Hamburguesas smash en Tegucigalpa. Pedí por WhatsApp o PedidosYa. Piso 7, La Galería — Padel Club Honduras.",
    url: siteConfig.url,
    siteName: "PACOMERALGO",
    locale: "es_HN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PACOMERALGO — The burgers that smashed the internet.",
    description: "Hamburguesas smash en Tegucigalpa. Piso 7, La Galería.",
  },
  icons: {
    icon: "/logo/pacomeralgo-icon.jpg",
    apple: "/logo/pacomeralgo-icon.jpg",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "PACOMERALGO",
  description:
    "Hamburguesas smash en Tegucigalpa, Honduras. The burgers that smashed the internet.",
  image: `${siteConfig.url}/images/gallery/wagyu-stack.jpg`,
  servesCuisine: ["Burgers", "American", "Fast Casual"],
  priceRange: "L 40 - L 1100",
  telephone: `+${siteConfig.contact.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Padel Club Honduras, Piso 7, La Galería",
    addressLocality: "Tegucigalpa",
    addressCountry: "HN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:30",
    closes: "20:00",
  },
  sameAs: [siteConfig.contact.instagram],
  url: siteConfig.url,
  hasMenu: `${siteConfig.url}/menu`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-HN"
      className={`${anton.variable} ${epilogue.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyOrderBar />
      </body>
    </html>
  );
}
