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
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Wishlist | BestRudraksha.com",
    description:
      "Apki pasand ke Rudraksha beads aur malas BestRudraksha.com ki wishlist mein. India ke liye easy shopping!",
    url: "https://bestrudraksha.com/wishlist",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/wishlist-og-image.jpg",
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
    images: ["https://bestrudraksha.com/images/wishlist-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/wishlist",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
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