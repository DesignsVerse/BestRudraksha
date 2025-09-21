import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist | BestRudraksha.com - Your Asli Rudraksha Picks",
  description:
    "BestRudraksha.com pe apni pasand ke asli Rudraksha beads aur malas wishlist mein dekhein. India ke liye spiritual shopping ab aur asaan!",
  keywords: [
    "Rudraksha wishlist",
    "asli Rudraksha wishlist",
    "BestRudraksha wishlist",
    "Rudraksha beads India",
    "spiritual shopping wishlist",
    "rudraksha",
    "rudraksha benefits",
    "original rudraksha",
    "1 mukhi rudraksha",
    "rudraksha for health",
    "rudraksha for meditation",
    "5 mukhi rudraksha",
    "rudraksha for students",
    "rudraksha for success",
    "rudraksha bracelet",
    "rudraksha mala",
    "nepali rudraksha",
    "rudraksha price",
    "rudraksha types",
    "rudraksha for money",
    "rudraksha for love",
    "rudraksha for career",
    "ek mukhi rudraksha",
    "rudraksha wearing rules",
    "rudraksha side effects",
    "rudraksha for peace",
    "rudraksha beads",
    "buy rudraksha online",
    "rudraksha for zodiac signs",
    "best rudraksha for job",
    "rudraksha for stress relief",
    "rudraksha for energy",
    "how to wear rudraksha",
    "rudraksha mantra",
    "rudraksha astrology",
    "rudraksha bracelet for men",
    "rudraksha bracelet for women",
    "rudraksha in hindi",
    "rudraksha cleaning method",
    "rudraksha for anxiety",
    "real vs fake rudraksha",
    "rudraksha for blood pressure",
    "rudraksha for focus",
    "rudraksha for protection",
    "rudraksha for healing",
    "rudraksha for spirituality",
    "rudraksha for mental health",
    "rudraksha for students benefits",
    "rudraksha energize process",
    "rudraksha for daily use",
    "rudraksha for sleep",
    "rudraksha and chakras",
    "rudraksha and vastu",
    "rudraksha for negative energy",
    "rudraksha pehnne ke faayde",
    "rudraksha kya hota hai",
    "rudraksha mala kaise pehne",
    "rudraksha price in India",
    "rudraksha aur health",
    "rudraksha aur meditation",
    "best rudraksha for success",
    "rudraksha for love and peace",
    "rudraksha for career growth",
    "rudraksha for mental peace",
    "rudraksha benefits for anxiety",
    "original vs fake rudraksha",
    "rudraksha price check",
    "rudraksha for job promotion",
    "kaise pehne rudraksha",
    "rudraksha and spiritual growth",
    "rudraksha kaise saf karen",
    "rudraksha for blood pressure control",
    "rudraksha for positivity",
    "rudraksha healing process",
    "rudraksha for stress free life",
    "rudraksha for protection from negativity",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Wishlist | BestRudraksha.com",
    description:
      "Apki pasand ke Rudraksha beads aur malas BestRudraksha.com ki wishlist mein. India ke liye easy shopping!",
    url: "https://www.bestrudraksha.com/wishlist",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/wishlist-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestRudraksha Wishlist",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishlist | BestRudraksha.com",
    description:
      "BestRudraksha.com pe apni Rudraksha wishlist dekhein. India ke liye asli spiritual products!",
    images: ["https://www.bestrudraksha.com/images/wishlist-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com/wishlist",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    ICBM: "20.5937, 78.9629",
  },
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
