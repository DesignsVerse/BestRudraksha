import Signup from "@/components/Auth/Signup";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | BestRudraksha.com - Asli Rudraksha India",
  description:
    "BestRudraksha.com pe signup karein aur asli Rudraksha beads, malas ke exclusive offers paayein. India ke liye spiritual shopping shuru karein!",
  keywords: [
    "Rudraksha signup",
    "asli Rudraksha account",
    "BestRudraksha signup",
    "Rudraksha shop India",
    "spiritual shopping signup",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Signup | BestRudraksha.com",
    description:
      "Join BestRudraksha.com aur asli Rudraksha ke offers paayein. India ke liye trusted spiritual shopping!",
    url: "https://bestrudraksha.com/signup",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/signup-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestRudraksha Signup",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signup | BestRudraksha.com",
    description:
      "BestRudraksha.com pe signup karein aur Rudraksha shopping shuru karein. India ke liye asli products!",
    images: ["https://bestrudraksha.com/images/signup-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/signup",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;