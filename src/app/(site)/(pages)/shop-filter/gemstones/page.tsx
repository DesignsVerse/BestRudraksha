import React from "react";
import { Metadata } from "next";
import Gemstones from "@/components/Shop-Filter/Gemstones";

export const metadata: Metadata = {
  title: "All Gemstones | BestRudraksha.com - Authentic Gemstones India",
  description:
    "Explore authentic gemstones at BestRudraksha.com. Certified Ruby, Sapphire, Emerald, and more for astrology and spiritual growth. Shop now in India!",
  keywords: [
    "authentic gemstones",
    "BestRudraksha gemstones",
    "gemstones shop India",
    "astrological gemstones",
    "spiritual gemstones",
    "ruby gemstone",
    "sapphire gemstone",
    "emerald gemstone",
    "gemstones for astrology",
    "gemstones benefits",
    "original gemstones",
    "gemstones price",
    "gemstones for health",
    "gemstones for wealth",
    "gemstones for love",
    "gemstones for career",
    "buy gemstones online",
    "gemstones for zodiac signs",
    "best gemstones for success",
    "gemstones for stress relief",
    "gemstones for positivity",
    "gemstones for protection",
    "gemstones for healing",
    "gemstones for spirituality",
    "gemstones for mental health",
    "gemstones wearing rules",
    "gemstones for energy",
    "how to wear gemstones",
    "gemstones astrology",
    "gemstones bracelet",
    "gemstones necklace",
    "gemstones for men",
    "gemstones for women",
    "gemstones cleaning method",
    "real vs fake gemstones",
    "gemstones for focus",
    "gemstones for peace",
    "gemstones and chakras",
    "gemstones for negative energy",
    "gemstones price in India",
    "gemstones for job promotion",
    "gemstones for mental peace",
    "gemstones benefits for anxiety",
    "gemstones for spiritual growth",
    "gemstones for blood pressure control",
    "gemstones for stress free life",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "All Gemstones | BestRudraksha.com",
    description:
      "Discover certified gemstones like Ruby, Sapphire, and Emerald at BestRudraksha.com. Trusted spiritual shopping in India!",
    url: "https://www.bestrudraksha.com/shop-filter/gemstones",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/gemstones-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Authentic Gemstones Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Gemstones | BestRudraksha.com",
    description:
      "Shop authentic gemstones for astrology and spirituality at BestRudraksha.com. India’s trusted store!",
    images: ["https://www.bestrudraksha.com/images/gemstones-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com/shop-filter/gemstones",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const GemstonesPage = () => {
  return (
    <main>
      <Gemstones />
    </main>
  );
};

export default GemstonesPage;