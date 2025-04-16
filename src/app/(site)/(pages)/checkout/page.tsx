import React from "react";
import Checkout from "@/components/Checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | BestRudraksha.com - Secure Rudraksha Checkout",
  description:
    "BestRudraksha.com pe apke asli Rudraksha beads, malas aur spiritual accessories ka secure checkout karo. India bhar mein fast delivery ke liye abhi order confirm karein!",
  keywords: [
    "Rudraksha checkout",
    "asli Rudraksha checkout",
    "BestRudraksha secure checkout",
    "buy Rudraksha online India",
    "spiritual shopping India",
    "rudraksha", "rudraksha benefits", "original rudraksha", "1 mukhi rudraksha", "rudraksha for health", "rudraksha for meditation", "5 mukhi rudraksha", "rudraksha for students", "rudraksha for success", "rudraksha bracelet", "rudraksha mala", "nepali rudraksha", "rudraksha price", "rudraksha types", "rudraksha for money", "rudraksha for love", "rudraksha for career", "ek mukhi rudraksha", "rudraksha wearing rules", "rudraksha side effects", "rudraksha for peace", "rudraksha beads", "buy rudraksha online", "rudraksha for zodiac signs", "best rudraksha for job", "rudraksha for stress relief", "rudraksha for energy", "how to wear rudraksha", "rudraksha mantra", "rudraksha astrology", "rudraksha bracelet for men", "rudraksha bracelet for women", "rudraksha in hindi", "rudraksha cleaning method", "rudraksha for anxiety", "real vs fake rudraksha", "rudraksha for blood pressure", "rudraksha for focus", "rudraksha for protection", "rudraksha for healing", "rudraksha for spirituality", "rudraksha for mental health", "rudraksha for students benefits", "rudraksha energize process", "rudraksha for daily use", "rudraksha for sleep", "rudraksha and chakras", "rudraksha and vastu", "rudraksha for negative energy", "rudraksha pehnne ke faayde", "rudraksha kya hota hai", "rudraksha mala kaise pehne", "rudraksha price in India", "rudraksha aur health", "rudraksha aur meditation", "best rudraksha for success", "rudraksha for love and peace", "rudraksha for career growth", "rudraksha for mental peace", "rudraksha benefits for anxiety", "original vs fake rudraksha", "rudraksha price check", "rudraksha for job promotion", "kaise pehne rudraksha", "rudraksha and spiritual growth", "rudraksha kaise saf karen", "rudraksha for blood pressure control", "rudraksha for positivity", "rudraksha healing process", "rudraksha for stress free life", "rudraksha for protection from negativity"

  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow", // Checkout ko search mein nahi dikhayenge
  openGraph: {
    title: "Checkout | BestRudraksha.com - Secure Rudraksha Checkout",
    description:
      "BestRudraksha.com pe apke Rudraksha beads aur malas ka secure checkout karo. India ke liye fast delivery guaranteed!",
    url: "https://bestrudraksha.com/checkout",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/checkout-og-image.jpg", // Checkout vibe ki photo daal
        width: 1200,
        height: 630,
        alt: "Secure Rudraksha Checkout",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout | BestRudraksha.com - Rudraksha Checkout",
    description:
      "Apke Rudraksha ka order confirm karo BestRudraksha.com pe. Secure aur fast checkout India ke liye!",
    images: ["https://bestrudraksha.com/images/checkout-twitter-image.jpg"], // Photo daal
    site: "@BestRudraksha", // Apna Twitter handle daal ya hata de
  },
  alternates: {
    canonical: "https://bestrudraksha.com/checkout",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629", // India ke coordinates
    "ICBM": "20.5937, 78.9629",
  },
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;