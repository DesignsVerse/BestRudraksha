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
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "BestRudraksha.com | Asli Rudraksha Beads & Malas Online",
    description:
      "India ka trusted Rudraksha store! BestRudraksha.com se asli Rudraksha beads aur malas ke saath apni spiritual journey shuru karo.",
    url: "https://bestrudraksha.com",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/home-og-image.jpg", // Rudraksha ki photo daal
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
    images: ["https://bestrudraksha.com/images/home-twitter-image.jpg"], // Photo daal
    site: "@BestRudraksha", // Apna Twitter handle
  },
  alternates: {
    canonical: "https://bestrudraksha.com",
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