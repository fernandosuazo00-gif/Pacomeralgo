// Menu content transcribed directly from PACOMERALGO's printed menu (Menu 1.jpg & Menu 2.jpg).
// Prices are in Honduran Lempiras (L). Do not invent items, descriptions, or prices here.

export type MenuItem = {
  name: string;
  price: number;
  description?: string;
  tag?: string;
  availability?: string;
  spicy?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuCredit = "By Chef Valerio & Chef Randall";

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    title: "Burgers",
    items: [
      {
        name: "La Trufada",
        price: 315,
        tag: "Best seller",
        description: "Carne Angus, bacon, mayonesa trufada, queso cheddar.",
      },
      {
        name: "Mac & Truffle",
        price: 330,
        description:
          "Carne Angus, queso cheddar, mac n cheese, mayonesa trufada y bacon.",
      },
      {
        name: "Cheeseburger",
        price: 260,
        description:
          "Carne Angus, queso cheddar, cebolla brûlé, mayo de ajo negro y cebollina.",
      },
      {
        name: "Mr. Bacon",
        price: 290,
        description: "Carne Angus, bacon, queso cheddar, burger sauce.",
      },
      {
        name: "La Wagyu",
        price: 380,
        tag: "Chef's favorite",
        description:
          "Wagyu, queso suizo, bacon crujiente, hongos portobello, cebolla crispy, salsa trufada y miel de maracuyá.",
      },
      {
        name: "La Glaseada",
        price: 360,
        tag: "Chef's favorite",
        description:
          "Pan Hokkaido glaseado, carne Angus, bacon glaseado, queso cheddar, cebolla caramelizada.",
      },
      {
        name: "La Argentina",
        price: 300,
        description:
          "Carne Angus, bacon, queso mozzarella, burger sauce, cebolla caramelizada y chimichurri.",
      },
      {
        name: "Chicken Sandwich",
        price: 290,
        description:
          "Pollo empanizado bañado en salsa chipotle, pepinillos, cebolla crispy y queso suizo.",
      },
      {
        name: "Club Burger",
        price: 340,
        description:
          "Carne Angus, portobello, bacon, queso suizo, cebolla brûlé.",
      },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        name: "Onion Rings",
        price: 220,
        description: "8 oz de aros de cebolla acompañados de salsa andaluza.",
      },
      {
        name: "Jalapeño Poppers",
        price: 240,
        spicy: true,
        description:
          "6 unidades de jalapeño poppers acompañados de salsa de cilantro.",
      },
      {
        name: "Chipotle Cheese Bombs",
        price: 260,
        description:
          "Queso mozzarella empanizado, acompañados de salsa chipotle.",
      },
      {
        name: "Mac and Cheese",
        price: 160,
        description: "Macarrones con salsa 3 quesos, bacon y chives.",
      },
    ],
  },
  {
    id: "loaded-fries",
    title: "Loaded Fries",
    items: [
      {
        name: "Truffle Fries",
        price: 310,
        tag: "Chef's pick",
        description:
          "Papas fritas bañadas con queso parmesano, jamón serrano, aceite de trufa y mayonesa de trufa picante.",
      },
      {
        name: "Animal Fries",
        price: 280,
        description:
          "Papas fritas bañadas en burger sauce, salsa andaluza, bacon, cheddar sauce y cebolla caramelizada.",
      },
      {
        name: "Belgian Fries",
        price: 300,
        description:
          "Papas fritas bañadas con mayonesa trufada, bacon crocante, miel de maracuyá, bourbon sauce y chives.",
      },
    ],
  },
  {
    id: "chicken-tenders",
    title: "Chicken Tenders",
    items: [
      {
        name: "Classic Chicken Tenders",
        price: 250,
        description:
          "Chicken tenders acompañados de mayonesa de reducción de ron y crujientes papas fritas.",
      },
      {
        name: "Honey Chipotle Tenders",
        price: 270,
        description:
          "Chicken tenders bañados en salsa chipotle y crujientes papas fritas.",
      },
      {
        name: "Nashville Hot Tenders",
        price: 260,
        spicy: true,
        description:
          "Chicken tenders bañados en salsa Nashville picante, pepinillos y crujientes papas fritas.",
      },
    ],
  },
  {
    id: "promos",
    title: "Promos",
    items: [
      {
        name: "Truffle Tuesday",
        price: 580,
        availability: "Disponible todos los martes",
        description: "2 hamburguesas trufadas acompañadas de truffle fries.",
      },
      {
        name: "Wild Wednesday",
        price: 500,
        availability: "Disponible todos los miércoles",
        description: "2 cheeseburgers acompañadas de animal fries.",
      },
      {
        name: "Burger Box",
        price: 1100,
        availability: "Disponible todos los días",
        description:
          "1 Wagyu burger, 1 cheese burger, 1 trufada, 1 chicken sandwich y animal fries en una sola caja.",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      {
        name: "Tiramisu",
        price: 145,
        description: "Postre italiano cremoso con café, mascarpone y cacao.",
      },
      {
        name: "Cinco Leches",
        price: 145,
        description: "Pastel esponjoso bañado en una mezcla de cinco leches.",
      },
    ],
  },
  {
    id: "kids",
    title: "Kids Menu",
    items: [
      {
        name: "Nuggets",
        price: 200,
        description: "6 nuggets acompañados de papas fritas y ketchup.",
      },
    ],
  },
  {
    id: "adicionales",
    title: "Adicionales",
    items: [
      { name: "Salsa", price: 40 },
      { name: "Papas Fritas", price: 60 },
      { name: "Bacon", price: 40 },
      { name: "Carne", price: 60 },
    ],
  },
];
