import React from "react";
import { Metadata } from "next";
import Mukhi from "@/components/Shop-Filter/mukhi";

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
    "rudraksha", "rudraksha benefits", "original rudraksha", "1 mukhi rudraksha", "rudraksha for health", "rudraksha for meditation", "5 mukhi rudraksha", "rudraksha for students", "rudraksha for success", "rudraksha bracelet", "rudraksha mala", "nepali rudraksha", "rudraksha price", "rudraksha types", "rudraksha for money", "rudraksha for love", "rudraksha for career", "ek mukhi rudraksha", "rudraksha wearing rules", "rudraksha side effects", "rudraksha for peace", "rudraksha beads", "buy rudraksha online", "rudraksha for zodiac signs", "best rudraksha for job", "rudraksha for stress relief", "rudraksha for energy", "how to wear rudraksha", "rudraksha mantra", "rudraksha astrology", "rudraksha bracelet for men", "rudraksha bracelet for women", "rudraksha in hindi", "rudraksha cleaning method", "rudraksha for anxiety", "real vs fake rudraksha", "rudraksha for blood pressure", "rudraksha for focus", "rudraksha for protection", "rudraksha for healing", "rudraksha for spirituality", "rudraksha for mental health", "rudraksha for students benefits", "rudraksha energize process", "rudraksha for daily use", "rudraksha for sleep", "rudraksha and chakras", "rudraksha and vastu", "rudraksha for negative energy", "rudraksha pehnne ke faayde", "rudraksha kya hota hai", "rudraksha mala kaise pehne", "rudraksha price in India", "rudraksha aur health", "rudraksha aur meditation", "best rudraksha for success", "rudraksha for love and peace", "rudraksha for career growth", "rudraksha for mental peace", "rudraksha benefits for anxiety", "original vs fake rudraksha", "rudraksha price check", "rudraksha for job promotion", "kaise pehne rudraksha", "rudraksha and spiritual growth", "rudraksha kaise saf karen", "rudraksha for blood pressure control", "rudraksha for positivity", "rudraksha healing process", "rudraksha for stress free life", "rudraksha for protection from negativity"

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