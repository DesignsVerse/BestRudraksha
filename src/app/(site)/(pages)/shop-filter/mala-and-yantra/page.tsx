import React from "react";
import { Metadata } from "next";
import Mala from "@/components/Shop-Filter/mala-yantra";

export const metadata: Metadata = {
  title: "Mala and Yantra | BestRudraksha.com - Authentic Spiritual Items India",
  description:
    "Shop authentic Mala and Yantra at BestRudraksha.com. Certified Rudraksha malas, gemstone malas, and powerful Yantras for meditation and spirituality. Buy now in India!",
  keywords: [
    "authentic Mala",
    "authentic Yantra",
    "BestRudraksha Mala",
    "BestRudraksha Yantra",
    "Mala shop India",
    "Yantra shop India",
    "Rudraksha Mala",
    "gemstone Mala",
    "Sri Yantra",
    "spiritual Mala",
    "spiritual Yantra",
    "Mala for meditation",
    "Yantra for astrology",
    "Mala benefits",
    "Yantra benefits",
    "original Mala",
    "original Yantra",
    "Mala price",
    "Yantra price",
    "buy Mala online",
    "buy Yantra online",
    "Mala for spirituality",
    "Yantra for prosperity",
    "Mala for peace",
    "Yantra for protection",
    "Mala for health",
    "Yantra for wealth",
    "Mala for chanting",
    "Yantra for success",
    "Rudraksha Mala benefits",
    "gemstone Mala benefits",
    "Sri Yantra benefits",
    "Mala wearing rules",
    "Yantra placement rules",
    "Mala for zodiac signs",
    "Yantra for zodiac signs",
    "Mala for stress relief",
    "Yantra for positive energy",
    "Mala for focus",
    "Yantra for spiritual growth",
    "Mala and Yantra combo",
    "Mala bracelet",
    "Yantra pendant",
    "Mala for men",
    "Yantra for women",
    "Mala cleaning method",
    "Yantra energizing method",
    "real vs fake Mala",
    "real vs fake Yantra",
    "Mala for mental health",
    "Yantra for mental peace",
    "Mala price in India",
    "Yantra price in India",
    "Mala for daily use",
    "Yantra for home",
    "Mala and chakras",
    "Yantra and vastu",
    "Mala for negative energy",
    "Yantra for negative energy removal",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Mala and Yantra | BestRudraksha.com",
    description:
      "Discover authentic Rudraksha malas, gemstone malas, and powerful Yantras at BestRudraksha.com. Trusted spiritual shopping in India!",
    url: "https://bestrudraksha.com/shop-filter/mala-yantra",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/mala-yantra-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Authentic Mala and Yantra Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mala and Yantra | BestRudraksha.com",
    description:
      "Shop certified Mala and Yantra for meditation and spirituality at BestRudraksha.com. India’s trusted store!",
    images: ["https://bestrudraksha.com/images/mala-yantra-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/shop-filter/mala-yantra",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const MalaAndYantra = () => {
  return (
    <main>
      <Mala />
    </main>
  );
};

export default MalaAndYantra;