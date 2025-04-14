import React from "react";
import { Metadata } from "next";
import Mukhi from "@/components/product-filter/mukhi";

export const metadata: Metadata = {
  title: "All Mukhi Rudraksha | BestRudraksha.com - Asli Rudraksha India",
  description:
    "Explore all Mukhi Rudraksha beads at BestRudraksha.com. Authentic, certified Rudraksha from 1 to 21 Mukhi for spiritual growth. Shop now in India!",
  keywords: [
    "all Mukhi Rudraksha",
    "asli Rudraksha beads",
    "BestRudraksha Mukhi",
    "Rudraksha shop India",
    "1 to 21 Mukhi Rudraksha",
    "spiritual Rudraksha",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "All Mukhi Rudraksha | BestRudraksha.com",
    description:
      "Discover authentic Rudraksha beads from 1 to 21 Mukhi at BestRudraksha.com. Trusted spiritual shopping in India!",
    url: "https://bestrudraksha.com/shop-filter/1-14-mukhi-rudraksha",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/mukhi-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "All Mukhi Rudraksha Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Mukhi Rudraksha | BestRudraksha.com",
    description:
      "Shop authentic 1 to 21 Mukhi Rudraksha beads at BestRudraksha.com. India’s trusted spiritual store!",
    images: ["https://bestrudraksha.com/images/mukhi-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/shop-filter/1-14-mukhi-rudraksha",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const MukhiFilterPage = () => {
  return (
    <main>
      <Mukhi />
    </main>
  );
};

export default MukhiFilterPage;