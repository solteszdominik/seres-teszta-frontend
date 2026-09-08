import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "8 tojásos csigatészta",
    slug: "8-tojasos-csigateszta",
    description: "Klasszikus levesbetét hagyományos ízvilággal.",
    price: 990,
    packageSize: "500 g",
    imageUrl: "/images/products/csigateszta.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    name: "8 tojásos szélesmetélt",
    slug: "8-tojasos-szelesmetelt",
    description: "Szaftos és krémes ételekhez is kiváló választás.",
    price: 990,
    packageSize: "500 g",
    imageUrl: "/images/products/szelesmetelt.jpg",
    isFeatured: true,
  },
  {
    id: "3",
    name: "8 tojásos kockatészta",
    slug: "8-tojasos-kockateszta",
    description: "Klasszikus magyar fogások egyik alapdarabja.",
    price: 990,
    packageSize: "500 g",
    imageUrl: "/images/products/kockateszta.jpg",
    isFeatured: true,
  },
  {
    id: "4",
    name: "8 tojásos cérnametélt",
    slug: "8-tojasos-cernametelt",
    description: "Vékony, könnyű tészta levesekhez.",
    price: 990,
    packageSize: "500 g",
    imageUrl: "/images/products/cernametelt.jpg",
    isFeatured: true,
  },
];
