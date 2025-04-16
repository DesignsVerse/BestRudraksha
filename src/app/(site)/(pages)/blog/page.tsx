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
    "rudraksha", "rudraksha benefits", "original rudraksha", "1 mukhi rudraksha", "rudraksha for health", "rudraksha for meditation", "5 mukhi rudraksha", "rudraksha for students", "rudraksha for success", "rudraksha bracelet", "rudraksha mala", "nepali rudraksha", "rudraksha price", "rudraksha types", "rudraksha for money", "rudraksha for love", "rudraksha for career", "ek mukhi rudraksha", "rudraksha wearing rules", "rudraksha side effects", "rudraksha for peace", "rudraksha beads", "buy rudraksha online", "rudraksha for zodiac signs", "best rudraksha for job", "rudraksha for stress relief", "rudraksha for energy", "how to wear rudraksha", "rudraksha mantra", "rudraksha astrology", "rudraksha bracelet for men", "rudraksha bracelet for women", "rudraksha in hindi", "rudraksha cleaning method", "rudraksha for anxiety", "real vs fake rudraksha", "rudraksha for blood pressure", "rudraksha for focus", "rudraksha for protection", "rudraksha for healing", "rudraksha for spirituality", "rudraksha for mental health", "rudraksha for students benefits", "rudraksha energize process", "rudraksha for daily use", "rudraksha for sleep", "rudraksha and chakras", "rudraksha and vastu", "rudraksha for negative energy", "rudraksha pehnne ke faayde", "rudraksha kya hota hai", "rudraksha mala kaise pehne", "rudraksha price in India", "rudraksha aur health", "rudraksha aur meditation", "best rudraksha for success", "rudraksha for love and peace", "rudraksha for career growth", "rudraksha for mental peace", "rudraksha benefits for anxiety", "original vs fake rudraksha", "rudraksha price check", "rudraksha for job promotion", "kaise pehne rudraksha", "rudraksha and spiritual growth", "rudraksha kaise saf karen", "rudraksha for blood pressure control", "rudraksha for positivity", "rudraksha healing process", "rudraksha for stress free life", "rudraksha for protection from negativity"

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