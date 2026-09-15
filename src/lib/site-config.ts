// Centralized restaurant configuration.
// Keep every external URL / contact detail here so it only needs to change in one place.

export const siteConfig = {
  name: "PACOMERALGO",
  tagline: "The burgers that smashed the internet.",
  taglineEs: "Las burgers que rompieron el internet.",
  url: "https://pacomeralgo.hn",

  location: {
    name: "Padel Club Honduras",
    line1: "Piso 7, La Galería",
    line2: "Tegucigalpa, Honduras",
    full: "Padel Club Honduras, Piso 7, La Galería, Tegucigalpa, Honduras",
  },

  hours: {
    days: "Lunes a Domingo",
    daysEn: "Monday – Sunday",
    time: "11:30 AM – 8:00 PM",
  },

  contact: {
    whatsappNumber: "50487667779", // digits only, for wa.me links
    whatsappDisplay: "+504 8766-7779",
    instagram: "https://www.instagram.com/pacomeralgo.hn",
    instagramHandle: "@pacomeralgo.hn",
  },

  // TODO: paste the real PedidosYa restaurant URL here once available.
  // Until then, ordering CTAs fall back to WhatsApp automatically.
  pedidosYaUrl: "",

  // TODO: paste a Google Maps / Waze share link here once available.
  mapsUrl: "",
  wazeUrl: "",

  credit: {
    name: "FStudio",
  },

  gambos: {
    name: "GAMBOS",
    description: "Seafood boil como nunca antes lo haz probado TGU.",
    instagram: "https://www.instagram.com/gambos_hn",
    instagramHandle: "@gambos_hn",
    schedule: "Next Batch: Jueves a domingo",
    leadTime: "Pedidos con un día de anticipación",
    fulfillment: "Delivery o Pickup — no hay dine-in",
    // GAMBOS has its own dedicated ordering line, separate from PACOMERALGO.
    whatsappNumber: "50489324789",
    whatsappDisplay: "+504 8932-4789",
  },
} as const;

export const whatsappMessages = {
  order: "Hola PACOMERALGO 👋 Quiero hacer un pedido.",
  catering:
    "Hola PACOMERALGO 👋 Me gustaría recibir información sobre el servicio de catering.",
  general: "Hola PACOMERALGO 👋",
  gambosOrder: "Hola GAMBOS 👋 Quiero hacer un pedido.",
} as const;

export function buildWhatsAppUrl(message: string, number: string = siteConfig.contact.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
