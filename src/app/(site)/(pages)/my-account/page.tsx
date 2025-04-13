import MyAccount from "@/components/MyAccount";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account | BestRudraksha.com - Your Rudraksha Profile",
  description:
    "BestRudraksha.com pe apna account manage karein - asli Rudraksha beads, malas ke orders, wishlist, aur spiritual journey ko track karein. India ke liye secure aur easy access!",
  keywords: [
    "Rudraksha account",
    "asli Rudraksha profile",
    "BestRudraksha account",
    "Rudraksha orders India",
    "spiritual shopping account",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "noindex, nofollow", // Account page ko search mein nahi dikhayenge
  openGraph: {
    title: "My Account | BestRudraksha.com - Your Rudraksha Profile",
    description:
      "Apne Rudraksha orders aur wishlist ko BestRudraksha.com pe manage karein. India ke liye secure account access!",
    url: "https://bestrudraksha.com/my-account",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/account-og-image.jpg", // Account vibe ki photo daal
        width: 1200,
        height: 630,
        alt: "Your Rudraksha Account",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Account | BestRudraksha.com - Rudraksha Profile",
    description:
      "BestRudraksha.com pe apna Rudraksha account check karein - orders, wishlist, aur more. India ke liye secure!",
    images: ["https://bestrudraksha.com/images/account-twitter-image.jpg"], // Photo daal
    site: "@BestRudraksha", // Apna Twitter handle daal ya hata de
  },
  alternates: {
    canonical: "https://bestrudraksha.com/my-account",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629", // India ke coordinates
    "ICBM": "20.5937, 78.9629",
  },
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;