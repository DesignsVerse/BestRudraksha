import React from "react";
import Cart from "@/components/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | BestRudraksha.com - Apka Asli Rudraksha Cart",
  description:
    "BestRudraksha.com ke cart mein apke asli Rudraksha beads, malas aur spiritual accessories dekho. India bhar mein secure aur fast checkout ke liye ready ho jao!",
  keywords: [
    "Rudraksha cart",
    "asli Rudraksha cart",
    "BestRudraksha checkout",
    "buy Rudraksha online India",
    "spiritual shopping cart India",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow", // Cart ko search mein nahi dikhayenge
  openGraph: {
    title: "Cart | BestRudraksha.com - Apka Rudraksha Cart",
    description:
      "Apke Rudraksha beads aur malas cart mein hain BestRudraksha.com pe. India ke liye secure checkout abhi karo!",
    url: "https://bestrudraksha.com/cart",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/cart-og-image.jpg", // Rudraksha cart ki photo daal
        width: 1200,
        height: 630,
        alt: "Asli Rudraksha Shopping Cart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cart | BestRudraksha.com - Rudraksha Cart",
    description:
      "BestRudraksha.com pe apka Rudraksha cart ready hai! Secure checkout ke saath India mein kharidari complete karo.",
    images: ["https://bestrudraksha.com/images/cart-twitter-image.jpg"], // Photo daal
    site: "@BestRudraksha", // Apna Twitter handle daal ya hata de
  },
  alternates: {
    canonical: "https://bestrudraksha.com/cart",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629", // India ke coordinates
    "ICBM": "20.5937, 78.9629",
  },
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;