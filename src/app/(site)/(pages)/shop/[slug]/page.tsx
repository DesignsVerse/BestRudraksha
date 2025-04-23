import ShopDetails from '@/components/Shop/slug';
import React from 'react';
import { Metadata } from 'next';
import shopData from '@/components/Shop/shopData';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata: Metadata = {
  title: `Shop Best Rudraksha Products `,
  description:
    "BestRudraksha.com pe asli Rudraksha beads, malas aur spiritual accessories kharido. India ke liye authentic, certified Rudraksha online shop!",
  keywords: [
    "Rudraksha shop",
    "asli Rudraksha",
    "Rudraksha mala",
    "buy Rudraksha online India",
    "certified Rudraksha",
    "Rudraksha beads",
    "spiritual accessories India",
    "Rudraksha store","rudraksha", "rudraksha benefits", "original rudraksha", "1 mukhi rudraksha", "rudraksha for health", "rudraksha for meditation", "5 mukhi rudraksha", "rudraksha for students", "rudraksha for success", "rudraksha bracelet", "rudraksha mala", "nepali rudraksha", "rudraksha price", "rudraksha types", "rudraksha for money", "rudraksha for love", "rudraksha for career", "ek mukhi rudraksha", "rudraksha wearing rules", "rudraksha side effects", "rudraksha for peace", "rudraksha beads", "buy rudraksha online", "rudraksha for zodiac signs", "best rudraksha for job", "rudraksha for stress relief", "rudraksha for energy", "how to wear rudraksha", "rudraksha mantra", "rudraksha astrology", "rudraksha bracelet for men", "rudraksha bracelet for women", "rudraksha in hindi", "rudraksha cleaning method", "rudraksha for anxiety", "real vs fake rudraksha", "rudraksha for blood pressure", "rudraksha for focus", "rudraksha for protection", "rudraksha for healing", "rudraksha for spirituality", "rudraksha for mental health", "rudraksha for students benefits", "rudraksha energize process", "rudraksha for daily use", "rudraksha for sleep", "rudraksha and chakras", "rudraksha and vastu", "rudraksha for negative energy", "rudraksha pehnne ke faayde", "rudraksha kya hota hai", "rudraksha mala kaise pehne", "rudraksha price in India", "rudraksha aur health", "rudraksha aur meditation", "best rudraksha for success", "rudraksha for love and peace", "rudraksha for career growth", "rudraksha for mental peace", "rudraksha benefits for anxiety", "original vs fake rudraksha", "rudraksha price check", "rudraksha for job promotion", "kaise pehne rudraksha", "rudraksha and spiritual growth", "rudraksha kaise saf karen", "rudraksha for blood pressure control", "rudraksha for positivity", "rudraksha healing process", "rudraksha for stress free life", "rudraksha for protection from negativity"

  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Shop | BestRudraksha.com - Asli Rudraksha Online",
    description:
      "India ka trusted Rudraksha shop! BestRudraksha.com se asli Rudraksha beads aur malas kharido.",
    url: "https://bestrudraksha.com/shop",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/shop-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asli Rudraksha Beads Shop",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | BestRudraksha.com - Rudraksha Beads",
    description:
      "Kharido asli Rudraksha beads BestRudraksha.com se. India ke liye authentic spiritual store!",
    images: ["https://bestrudraksha.com/images/shop-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/shop",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const Shop = ({ params }: PageProps) => {
  return (
    <div>
      <ShopDetails params={params} />
    </div>
  );
};

export default Shop;
