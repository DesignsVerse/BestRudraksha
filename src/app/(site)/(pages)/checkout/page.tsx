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