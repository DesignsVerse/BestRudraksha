import React from "react";
import BlogGridWithSidebar from "@/components/BlogGridWithSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rudraksha Blogs | BestRudraksha.com - Spiritual Gyaan India",
  description:
    "Padho Rudraksha ke benefits, spiritual practices, aur asli Rudraksha ke baare mein blogs BestRudraksha.com pe. India ke liye expert gyaan on Rudraksha malas, meditation, aur more!",
  keywords: [
    "Rudraksha blog",
    "Rudraksha benefits",
    "spiritual blogs India",
    "asli Rudraksha gyaan",
    "Rudraksha mala guide",
    "Rudraksha meditation",
    "spiritual gyaan",
    "best Rudraksha blog",
    "Rudraksha tips India",
    "spiritual practices",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Rudraksha Blogs | BestRudraksha.com - Spiritual Gyaan",
    description:
      "BestRudraksha.com ke blogs se jaano Rudraksha beads, malas, aur spirituality ke raaz. India ka trusted source!",
    url: "https://bestrudraksha.com/blog",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/blog-og-image.jpg", // Blog vibe ki photo
        width: 1200,
        height: 630,
        alt: "Rudraksha Blogs aur Spiritual Gyaan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraksha Blogs | BestRudraksha.com",
    description:
      "Rudraksha ke benefits aur spiritual gyaan ke liye padho BestRudraksha.com ke blogs. India ke liye perfect!",
    images: ["https://bestrudraksha.com/images/blog-twitter-image.jpg"], // Photo daal
    site: "@BestRudraksha",
  },
  alternates: {
    canonical: "https://bestrudraksha.com/blog",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const Blog = () => {
  return (
    <main>
      <BlogGridWithSidebar />
    </main>
  );
};

export default Blog;