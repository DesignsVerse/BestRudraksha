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
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Signin | BestRudraksha.com",
    description:
      "Signin karein BestRudraksha.com pe aur asli Rudraksha ke offers paayein. India ke liye trusted spiritual shopping!",
    url: "https://bestrudraksha.com/signin",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/signin-og-image.jpg",
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
    images: ["https://bestrudraksha.com/images/signin-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/signin",
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