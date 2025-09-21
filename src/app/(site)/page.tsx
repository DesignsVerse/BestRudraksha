import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BestRudraksha.com | Asli Rudraksha Beads & Malas Online India",
  description:
    "Kharido asli Rudraksha beads, malas aur spiritual accessories BestRudraksha.com se. Certified, high-quality Rudraksha for peace, prosperity, aur spiritual growth in India.",
  keywords: [
    "Rudraksha",
    "asli Rudraksha",
    "Rudraksha mala",
    "buy Rudraksha online",
    "Rudraksha price India",
    "certified Rudraksha",
    "5 Mukhi Rudraksha",
    "Rudraksha benefits",
    "spiritual store India",
    "best Rudraksha online",
    "rudraksha", "rudraksha benefits", "original rudraksha", "1 mukhi rudraksha", "rudraksha for health", "rudraksha for meditation", "5 mukhi rudraksha", "rudraksha for students", "rudraksha for success", "rudraksha bracelet", "rudraksha mala", "nepali rudraksha", "rudraksha price", "rudraksha types", "rudraksha for money", "rudraksha for love", "rudraksha for career", "ek mukhi rudraksha", "rudraksha wearing rules", "rudraksha side effects", "rudraksha for peace", "rudraksha beads", "buy rudraksha online", "rudraksha for zodiac signs", "best rudraksha for job", "rudraksha for stress relief", "rudraksha for energy", "how to wear rudraksha", "rudraksha mantra", "rudraksha astrology", "rudraksha bracelet for men", "rudraksha bracelet for women", "rudraksha in hindi", "rudraksha cleaning method", "rudraksha for anxiety", "real vs fake rudraksha", "rudraksha for blood pressure", "rudraksha for focus", "rudraksha for protection", "rudraksha for healing", "rudraksha for spirituality", "rudraksha for mental health", "rudraksha for students benefits", "rudraksha energize process", "rudraksha for daily use", "rudraksha for sleep", "rudraksha and chakras", "rudraksha and vastu", "rudraksha for negative energy", "rudraksha pehnne ke faayde", "rudraksha kya hota hai", "rudraksha mala kaise pehne", "rudraksha price in India", "rudraksha aur health", "rudraksha aur meditation", "best rudraksha for success", "rudraksha for love and peace", "rudraksha for career growth", "rudraksha for mental peace", "rudraksha benefits for anxiety", "original vs fake rudraksha", "rudraksha price check", "rudraksha for job promotion", "kaise pehne rudraksha", "rudraksha and spiritual growth", "rudraksha kaise saf karen", "rudraksha for blood pressure control", "rudraksha for positivity", "rudraksha healing process", "rudraksha for stress free life", "rudraksha for protection from negativity"

  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "BestRudraksha.com | Asli Rudraksha Beads & Malas Online",
    description:
      "India ka trusted Rudraksha store! BestRudraksha.com se asli Rudraksha beads aur malas ke saath apni spiritual journey shuru karo.",
    url: "https://www.bestrudraksha.com",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/hero/home-gemstone.png",
        width: 1200,
        
        height: 630,
        alt: "Asli Rudraksha Beads aur Malas",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestRudraksha.com | Asli Rudraksha Online India",
    description:
      "Asli Rudraksha beads aur malas kharido BestRudraksha.com se. India ke spiritual shoppers ka favorite!",
    images: ["https://www.bestrudraksha.com/images/hero/home-gemstone.png"],
    site: "@BestRudraksha", // Apna Twitter handle
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}