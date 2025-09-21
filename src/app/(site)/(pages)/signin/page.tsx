import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin | BestRudraksha.com - Asli Rudraksha India",
  description:
    "BestRudraksha.com pe signin karein aur asli Rudraksha beads, malas ke exclusive offers paayein. India ke liye spiritual shopping shuru karein!",
  keywords: [
    "Rudraksha signin",
    "asli Rudraksha login",
    "BestRudraksha signin",
    "Rudraksha shop India",
    "spiritual shopping login",
    "rudraksha", "rudraksha benefits", "original rudraksha", "1 mukhi rudraksha", "rudraksha for health", "rudraksha for meditation", "5 mukhi rudraksha", "rudraksha for students", "rudraksha for success", "rudraksha bracelet", "rudraksha mala", "nepali rudraksha", "rudraksha price", "rudraksha types", "rudraksha for money", "rudraksha for love", "rudraksha for career", "ek mukhi rudraksha", "rudraksha wearing rules", "rudraksha side effects", "rudraksha for peace", "rudraksha beads", "buy rudraksha online", "rudraksha for zodiac signs", "best rudraksha for job", "rudraksha for stress relief", "rudraksha for energy", "how to wear rudraksha", "rudraksha mantra", "rudraksha astrology", "rudraksha bracelet for men", "rudraksha bracelet for women", "rudraksha in hindi", "rudraksha cleaning method", "rudraksha for anxiety", "real vs fake rudraksha", "rudraksha for blood pressure", "rudraksha for focus", "rudraksha for protection", "rudraksha for healing", "rudraksha for spirituality", "rudraksha for mental health", "rudraksha for students benefits", "rudraksha energize process", "rudraksha for daily use", "rudraksha for sleep", "rudraksha and chakras", "rudraksha and vastu", "rudraksha for negative energy", "rudraksha pehnne ke faayde", "rudraksha kya hota hai", "rudraksha mala kaise pehne", "rudraksha price in India", "rudraksha aur health", "rudraksha aur meditation", "best rudraksha for success", "rudraksha for love and peace", "rudraksha for career growth", "rudraksha for mental peace", "rudraksha benefits for anxiety", "original vs fake rudraksha", "rudraksha price check", "rudraksha for job promotion", "kaise pehne rudraksha", "rudraksha and spiritual growth", "rudraksha kaise saf karen", "rudraksha for blood pressure control", "rudraksha for positivity", "rudraksha healing process", "rudraksha for stress free life", "rudraksha for protection from negativity"

  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Signin | BestRudraksha.com",
    description:
      "Signin karein BestRudraksha.com pe aur asli Rudraksha ke offers paayein. India ke liye trusted spiritual shopping!",
    url: "https://www.bestrudraksha.com/signin",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/signin-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestRudraksha Signin",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signin | BestRudraksha.com",
    description:
      "BestRudraksha.com pe signin karein aur Rudraksha shopping jari rakhein. India ke liye asli products!",
    images: ["https://www.bestrudraksha.com/images/signin-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com/signin",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;