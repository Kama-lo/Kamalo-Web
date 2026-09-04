export type ProductCategory = "Scooter" | "Bike" | "Gift Card" | "Recharge & Bills";

export type UtilityIcon = "smartphone" | "zap" | "tv" | "wifi";

export type ProductTile =
  | { kind: "logo"; name: string; logo: string; illustration: string }
  | { kind: "icon"; name: string; bg: string; fg: string; icon: UtilityIcon; illustration: string };

export type EvStats = {
  range: string;
  speed: string;
  power: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  price: number;
  mrp: number;
  rewardPercent: number;
  rating: number;
  reviews: number;
  image?: string;
  tile?: ProductTile;
  stats?: EvStats;
  denominations?: number[];
  badge?: "Bestseller" | "New" | "Limited";
  description: string;
  highlights: { label: string; value: string }[];
};

export const products: Product[] = [
  // — Electric vehicles (one product per real photo, no duplicates) —
  {
    id: "me-fury",
    name: "ME Fury",
    tagline: "An aggressive pulse for the city",
    category: "Bike",
    price: 184999,
    mrp: 199999,
    rewardPercent: 3,
    rating: 4.7,
    reviews: 1502,
    image: "/Bikes/1bike.webp",
    badge: "Bestseller",
    stats: { range: "130 KM", speed: "65 KM/H", power: "1500W" },
    description:
      "Fury is the bike that does everything well — confident on the highway, easy in traffic, and comfortable enough for the long weekend ride out of town.",
    highlights: [
      { label: "Range", value: "130 km / charge" },
      { label: "Top speed", value: "65 km/h" },
      { label: "Motor power", value: "1500W" },
      { label: "Charge time", value: "4.5 hrs (0–80%)" },
    ],
  },
  {
    id: "me-fusion",
    name: "ME Fusion",
    tagline: "Where the future comes together",
    category: "Scooter",
    price: 94999,
    mrp: 104999,
    rewardPercent: 4,
    rating: 4.6,
    reviews: 1284,
    image: "/Bikes/1scooters.webp",
    badge: "Bestseller",
    stats: { range: "150 KM", speed: "70 KM/H", power: "1800W" },
    description:
      "Fusion is built for the daily grind — a light, agile electric scooter that gets you through city traffic without breaking a sweat, or the bank.",
    highlights: [
      { label: "Range", value: "150 km / charge" },
      { label: "Top speed", value: "70 km/h" },
      { label: "Motor power", value: "1800W" },
      { label: "Battery", value: "3.2 kWh, removable" },
    ],
  },
  {
    id: "me-crown",
    name: "ME Crown",
    tagline: "Performance that feels regal",
    category: "Scooter",
    price: 118999,
    mrp: 129999,
    rewardPercent: 3,
    rating: 4.8,
    reviews: 431,
    image: "/Bikes/3scooters.webp",
    badge: "Limited",
    stats: { range: "180 KM", speed: "85 KM/H", power: "2500W" },
    description:
      "Crown sits at the top of the lineup — a bigger battery, quicker charging, and a firmer suspension setup for the days you push further.",
    highlights: [
      { label: "Range", value: "180 km / charge" },
      { label: "Top speed", value: "85 km/h" },
      { label: "Motor power", value: "2500W" },
      { label: "Battery", value: "4.1 kWh, removable" },
    ],
  },
  {
    id: "me-thunder",
    name: "ME Thunder",
    tagline: "A pure jolt of electric power",
    category: "Scooter",
    price: 102999,
    mrp: 112999,
    rewardPercent: 4,
    rating: 4.5,
    reviews: 567,
    image: "/Bikes/frontside1scooter.webp",
    badge: "New",
    stats: { range: "145 KM", speed: "100 KM/H", power: "4200W" },
    description:
      "Thunder is tuned for riders who want more — a reinforced frame, sharper acceleration, and enough headroom to keep up with anything else on the road.",
    highlights: [
      { label: "Range", value: "145 km / charge" },
      { label: "Top speed", value: "100 km/h" },
      { label: "Motor power", value: "4200W" },
      { label: "Battery", value: "3.6 kWh, removable" },
    ],
  },

  // — Gift cards (real brand logos, served locally from /public/logos) —
  {
    id: "amazon-gift-card",
    name: "Amazon Gift Card",
    tagline: "Redeemable across millions of products",
    category: "Gift Card",
    price: 1000,
    mrp: 1000,
    rewardPercent: 2,
    rating: 4.8,
    reviews: 9241,
    tile: {
      kind: "logo",
      name: "Amazon",
      logo: "/logos/amazon.svg",
      illustration: "/Illustrations/Gift_card.svg",
    },
    denominations: [250, 500, 1000, 2500, 5000],
    badge: "Bestseller",
    description:
      "A digital gift card credited straight to the recipient's Amazon.in account. No physical delivery, no expiry rush — pick an amount and it lands in minutes.",
    highlights: [
      { label: "Delivery", value: "Instant, by email" },
      { label: "Validity", value: "No expiry" },
      { label: "Redeemable at", value: "Amazon.in" },
      { label: "Denominations", value: "₹250 – ₹5,000" },
    ],
  },
  {
    id: "flipkart-gift-card",
    name: "Flipkart Gift Card",
    tagline: "One card, the whole Flipkart catalog",
    category: "Gift Card",
    price: 1000,
    mrp: 1000,
    rewardPercent: 2,
    rating: 4.7,
    reviews: 5108,
    tile: {
      kind: "logo",
      name: "Flipkart",
      logo: "/logos/flipkart.png",
      illustration: "/Illustrations/Gift_card.svg",
    },
    denominations: [250, 500, 1000, 2500, 5000],
    description:
      "Send or use a Flipkart e-gift card for electronics, fashion, home essentials and more — delivered instantly and valid for a year from purchase.",
    highlights: [
      { label: "Delivery", value: "Instant, by email" },
      { label: "Validity", value: "12 months" },
      { label: "Redeemable at", value: "Flipkart.com" },
      { label: "Denominations", value: "₹250 – ₹5,000" },
    ],
  },
  {
    id: "zomato-gift-card",
    name: "Zomato Gift Card",
    tagline: "For the next order, on the house",
    category: "Gift Card",
    price: 500,
    mrp: 500,
    rewardPercent: 3,
    rating: 4.6,
    reviews: 3872,
    tile: {
      kind: "logo",
      name: "Zomato",
      logo: "/logos/zomato.png",
      illustration: "/Illustrations/Gift_card.svg",
    },
    denominations: [200, 500, 1000, 2000],
    badge: "New",
    description:
      "Load a Zomato gift card for food delivery and dining out. Instant delivery to any email or phone number — a fast way to treat someone, or yourself.",
    highlights: [
      { label: "Delivery", value: "Instant, by email" },
      { label: "Validity", value: "6 months" },
      { label: "Redeemable at", value: "Zomato app & web" },
      { label: "Denominations", value: "₹200 – ₹2,000" },
    ],
  },

  // — Recharge & bills —
  {
    id: "mobile-recharge",
    name: "Mobile Recharge",
    tagline: "Any operator, instant top-up",
    category: "Recharge & Bills",
    price: 299,
    mrp: 299,
    rewardPercent: 2,
    rating: 4.7,
    reviews: 6120,
    tile: {
      kind: "icon",
      name: "Mobile Recharge",
      bg: "color-mix(in oklab, var(--primary) 22%, var(--surface-2))",
      fg: "var(--foreground)",
      icon: "smartphone",
      illustration:
        "/Illustrations/vecteezy_currency-icons-set-stock-market-bill-mobile-payment_20172538.jpg",
    },
    denominations: [199, 299, 499, 999],
    badge: "Bestseller",
    description:
      "Top up any prepaid number, on any major operator, in seconds. No app switching, no separate login — just the plan amount and a confirmation.",
    highlights: [
      { label: "Delivery", value: "Instant" },
      { label: "Operators", value: "All major networks" },
      { label: "Mode", value: "Prepaid & postpaid" },
      { label: "Confirmation", value: "SMS on completion" },
    ],
  },
  {
    id: "electricity-bill",
    name: "Electricity Bill Payment",
    tagline: "Clear your power bill in seconds",
    category: "Recharge & Bills",
    price: 1500,
    mrp: 1500,
    rewardPercent: 1,
    rating: 4.5,
    reviews: 2210,
    tile: {
      kind: "icon",
      name: "Electricity Bill",
      bg: "color-mix(in oklab, var(--reward) 26%, var(--surface-2))",
      fg: "var(--foreground)",
      icon: "zap",
      illustration:
        "/Illustrations/vecteezy_laptop-credit-card-bill-receipt-paper-and-coins-design_1822931.jpg",
    },
    denominations: [500, 1000, 2000, 5000],
    description:
      "Pay your electricity board bill directly through KAMALO — enter your consumer number once and settle the month's bill without leaving the app.",
    highlights: [
      { label: "Delivery", value: "Instant" },
      { label: "Boards supported", value: "All major state boards" },
      { label: "Receipt", value: "Emailed instantly" },
      { label: "Late fee", value: "Avoided on-time payment" },
    ],
  },
  {
    id: "dth-recharge",
    name: "DTH Recharge",
    tagline: "Keep your channels running",
    category: "Recharge & Bills",
    price: 600,
    mrp: 600,
    rewardPercent: 2,
    rating: 4.4,
    reviews: 1348,
    tile: {
      kind: "icon",
      name: "DTH Recharge",
      bg: "color-mix(in oklab, var(--primary) 32%, var(--surface-2))",
      fg: "var(--foreground)",
      icon: "tv",
      illustration: "/Illustrations/dth.png",
    },
    denominations: [300, 600, 900, 1500],
    description:
      "Recharge your DTH subscription across all major providers. Pick your plan amount, confirm, and your connection stays active — no interruption.",
    highlights: [
      { label: "Delivery", value: "Instant" },
      { label: "Providers", value: "All major DTH operators" },
      { label: "Mode", value: "Prepaid subscription" },
      { label: "Confirmation", value: "SMS on completion" },
    ],
  },
  {
    id: "broadband-bill",
    name: "Broadband Bill Payment",
    tagline: "One tap, bill cleared",
    category: "Recharge & Bills",
    price: 800,
    mrp: 800,
    rewardPercent: 1.5,
    rating: 4.5,
    reviews: 964,
    tile: {
      kind: "icon",
      name: "Broadband Bill",
      bg: "color-mix(in oklab, var(--reward) 34%, var(--surface-2))",
      fg: "var(--foreground)",
      icon: "wifi",
      illustration: "/Illustrations/recharge_mobiles.jpg",
    },
    denominations: [500, 800, 1200, 2000],
    badge: "New",
    description:
      "Pay your home broadband bill through KAMALO with your account ID — instant confirmation, and no risk of a mid-month disconnection.",
    highlights: [
      { label: "Delivery", value: "Instant" },
      { label: "ISPs supported", value: "All major broadband providers" },
      { label: "Receipt", value: "Emailed instantly" },
      { label: "Billing cycle", value: "Monthly" },
    ],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
