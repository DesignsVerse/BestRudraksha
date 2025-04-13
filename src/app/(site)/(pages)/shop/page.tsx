import React from "react";
import { Metadata } from "next";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

export const metadata: Metadata = {
  title: "Shop | BestRudraksha.com - Asli Rudraksha Beads India",
  description:
    "BestRudraksha.com pe asli Rudraksha beads, malas aur spiritual accessories kharido. India ke liye authentic, certified Rudraksha online shop!",
  keywords: [
    "Rudraksha shop",
    "asli Rudraksha",
    "Rudraksha mala",
    "buy Rudraksha online India",
    "certified Rudraksha",
    "Rudraksha beads",
    "spiritual accessories India",
    "Rudraksha store",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Shop | BestRudraksha.com - Asli Rudraksha Online",
    description:
      "India ka trusted Rudraksha shop! BestRudraksha.com se asli Rudraksha beads aur malas kharido.",
    url: "https://bestrudraksha.com/shop",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/shop-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asli Rudraksha Beads Shop",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | BestRudraksha.com - Rudraksha Beads",
    description:
      "Kharido asli Rudraksha beads BestRudraksha.com se. India ke liye authentic spiritual store!",
    images: ["https://bestrudraksha.com/images/shop-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/shop",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopDetailsPage;