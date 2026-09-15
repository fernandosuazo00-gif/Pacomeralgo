// Menu content transcribed directly from the GAMBOS menu screenshot (Gambos/Menu/IMG_3984.JPG).
// "The Gambo Effect by PACOMERALGO". Prices in Honduran Lempiras (L). Do not invent items or prices.

export type GambosItem = {
  name: string;
  size?: string;
  price: number;
  lobsterAddOn?: number;
  description?: string;
};

export const gambosHeadline = "The Gambo Effect";
export const gambosSubline = "by PACOMERALGO";
export const gambosFooterNote = "Todo acompañado de nuestra Cajun Butter";

const boilDescription =
  "Camarones jumbo, mejillones, chorizo, elote, papas al vapor en Louisiana Cajun style y pan artesanal";

export const gambosCombos: GambosItem[] = [
  {
    name: "Combo Individual",
    price: 460,
    lobsterAddOn: 150,
    description: boilDescription,
  },
  {
    name: "Dúo del Mar",
    price: 880,
    lobsterAddOn: 300,
    description: boilDescription,
  },
  {
    name: "Marea",
    size: "x4",
    price: 1740,
    lobsterAddOn: 600,
    description: boilDescription,
  },
  {
    name: "Marea",
    size: "x6",
    price: 2600,
    lobsterAddOn: 900,
    description: boilDescription,
  },
];

export const gambosExtras: { name: string; price: number }[] = [
  { name: "Libra de camarones", price: 320 },
  { name: "Libra de mejillones", price: 210 },
  { name: "Libra de langosta", price: 450 },
  { name: "Libra de King Crab", price: 300 },
  { name: "Libra de chorizo", price: 120 },
  { name: "Cajun Butter Cup", price: 220 },
  { name: "Elotes", price: 50 },
  { name: "Papa roja", price: 30 },
];
