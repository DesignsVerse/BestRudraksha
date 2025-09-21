import React from "react";
import { Metadata } from "next";
import RashiRudraksha from "@/components/Shop-Filter/RashiRudraksha";

export const metadata: Metadata = {
  title: "Rashi Rudraksha | BestRudraksha.com - Zodiac-Based Rudraksha India",
  description:
    "Shop authentic Rashi Rudraksha at BestRudraksha.com. Certified zodiac-based Rudraksha beads for astrology, spirituality, and balance. Buy now in India!",
  keywords: [
    "Rashi Rudraksha",
    "zodiac Rudraksha",
    "BestRudraksha Rashi",
    "Rudraksha shop India",
    "astrological Rudraksha",
    "Rudraksha for zodiac signs",
    "authentic Rudraksha",
    "Rudraksha for Aries",
    "Rudraksha for Taurus",
    "Rudraksha for Gemini",
    "Rudraksha for Cancer",
    "Rudraksha for Leo",
    "Rudraksha for Virgo",
    "Rudraksha for Libra",
    "Rudraksha for Scorpio",
    "Rudraksha for Sagittarius",
    "Rudraksha for Capricorn",
    "Rudraksha for Aquarius",
    "Rudraksha for Pisces",
    "Rudraksha benefits",
    "original Rudraksha",
    "Rudraksha price",
    "Rudraksha for astrology",
    "Rudraksha for spirituality",
    "Rudraksha for health",
    "Rudraksha for wealth",
    "Rudraksha for peace",
    "Rudraksha for success",
    "buy Rudraksha online",
    "Rudraksha for mental peace",
    "Rudraksha for stress relief",
    "Rudraksha for positivity",
    "Rudraksha for protection",
    "Rudraksha for balance",
    "Rudraksha wearing rules",
    "Rudraksha for meditation",
    "Rudraksha for energy",
    "Rudraksha and chakras",
    "Rudraksha for negative energy",
    "Rudraksha price in India",
    "Rudraksha for career",
    "Rudraksha for love",
    "Rudraksha for focus",
    "Rudraksha for healing",
    "Rudraksha for spiritual growth",
    "real vs fake Rudraksha",
    "Rudraksha cleaning method",
    "Rudraksha energizing process",
    "Rudraksha for daily use",
    "Rudraksha astrology",
    "Rudraksha for mental health",
    "Rudraksha for zodiac benefits",
    "best Rudraksha for astrology",
    "Rudraksha for planetary effects",
    "Rudraksha for horoscope",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Rashi Rudraksha | BestRudraksha.com",
    description:
      "Discover certified zodiac-based Rudraksha beads for astrology and spirituality at BestRudraksha.com. Trusted spiritual shopping in India!",
    url: "https://www.bestrudraksha.com/shop-filter/rashi-rudraksha",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/rashi-rudraksha-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zodiac-Based Rudraksha Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashi Rudraksha | BestRudraksha.com",
    description:
      "Shop authentic Rashi Rudraksha for zodiac signs at BestRudraksha.com. India’s trusted spiritual store!",
    images: ["https://www.bestrudraksha.com/images/rashi-rudraksha-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com/shop-filter/rashi-rudraksha",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const RashiRudrakshaPage = () => {
  return (
    <main>
      <RashiRudraksha />
    </main>
  );
};

export default RashiRudrakshaPage;