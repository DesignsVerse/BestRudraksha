import React from "react";
import { Metadata } from "next";
import SpecialRudraksha from "@/components/Shop-Filter/SpecialRudraksha";

export const metadata: Metadata = {
  title: "Special Rudraksha | BestRudraksha.com - Rare Rudraksha India",
  description:
    "Shop authentic Special Rudraksha at BestRudraksha.com. Certified rare beads like Gauri Shankar, Trijuti, and high-Mukhi Rudraksha for spirituality and healing. Buy now in India!",
  keywords: [
    "Special Rudraksha",
    "rare Rudraksha",
    "BestRudraksha Special",
    "Rudraksha shop India",
    "authentic Rudraksha",
    "Gauri Shankar Rudraksha",
    "Trijuti Rudraksha",
    "Savar Rudraksha",
    "high Mukhi Rudraksha",
    "14 Mukhi Rudraksha",
    "15 Mukhi Rudraksha",
    "16 Mukhi Rudraksha",
    "Rudraksha for spirituality",
    "Rudraksha for healing",
    "Rudraksha benefits",
    "original Rudraksha",
    "Rudraksha price",
    "Rudraksha for wealth",
    "Rudraksha for health",
    "Rudraksha for peace",
    "Rudraksha for success",
    "Rudraksha for protection",
    "Rudraksha for meditation",
    "buy Rudraksha online",
    "Rudraksha for astrology",
    "Rudraksha for energy",
    "Rudraksha for positivity",
    "Rudraksha for mental peace",
    "Rudraksha for stress relief",
    "Rudraksha for spiritual growth",
    "Rudraksha for prosperity",
    "Rudraksha wearing rules",
    "Rudraksha cleaning method",
    "real vs fake Rudraksha",
    "Rudraksha energizing process",
    "Rudraksha for negative energy",
    "Rudraksha price in India",
    "Rudraksha for career",
    "Rudraksha for love",
    "Rudraksha for focus",
    "Rudraksha and chakras",
    "Rudraksha for mental health",
    "rare Rudraksha benefits",
    "Gauri Shankar Rudraksha benefits",
    "Trijuti Rudraksha benefits",
    "high Mukhi Rudraksha benefits",
    "Rudraksha for divine connection",
    "Rudraksha for balance",
    "Rudraksha for zodiac signs",
    "best Rudraksha for spirituality",
    "Rudraksha for planetary effects",
    "Rudraksha for horoscope",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Special Rudraksha | BestRudraksha.com",
    description:
      "Discover certified rare Rudraksha beads like Gauri Shankar and Trijuti at BestRudraksha.com. Trusted spiritual shopping in India!",
    url: "https://www.bestrudraksha.com/shop-filter/special-rudraksha",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/special-rudraksha-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rare Rudraksha Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Rudraksha | BestRudraksha.com",
    description:
      "Shop authentic rare Rudraksha beads at BestRudraksha.com. India’s trusted spiritual store!",
    images: ["https://www.bestrudraksha.com/images/special-rudraksha-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com/shop-filter/special-rudraksha",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const SpecialRudrakshaPage = () => {
  return (
    <main>
      <SpecialRudraksha />
    </main>
  );
};

export default SpecialRudrakshaPage;