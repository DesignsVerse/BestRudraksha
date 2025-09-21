import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | BestRudraksha.com - Support for Rudraksha & Spiritual Items",
  description:
    "Get in touch with BestRudraksha.com for inquiries about authentic Rudraksha, gemstones, malas, and yantras. Trusted spiritual guidance and support in India!",
  keywords: [
    "contact BestRudraksha",
    "Rudraksha customer support",
    "BestRudraksha contact",
    "spiritual guidance India",
    "Rudraksha inquiries",
    "gemstones inquiries",
    "mala inquiries",
    "yantra inquiries",
    "buy Rudraksha online support",
    "authentic Rudraksha contact",
    "BestRudraksha customer service",
    "Rudraksha shop India contact",
    "spiritual products support",
    "Rudraksha guidance",
    "contact for Rudraksha benefits",
    "Rudraksha purchase help",
    "gemstones purchase support",
    "mala purchase inquiries",
    "yantra purchase support",
    "Rudraksha authenticity queries",
    "BestRudraksha phone number",
    "BestRudraksha email",
    "spiritual products customer care",
    "Rudraksha for astrology support",
    "Rudraksha for zodiac signs inquiries",
    "BestRudraksha store India",
    "contact Rudraksha experts",
    "Rudraksha wearing rules support",
    "Rudraksha cleaning method inquiries",
    "Rudraksha energizing process help",
    "real vs fake Rudraksha queries",
    "BestRudraksha contact number",
    "BestRudraksha support India",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | BestRudraksha.com",
    description:
      "Reach out to BestRudraksha.com for support with Rudraksha, gemstones, malas, and yantras. Trusted spiritual guidance in India!",
    url: "https://www.bestrudraksha.com/contact",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestRudraksha Contact Support",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | BestRudraksha.com",
    description:
      "Contact BestRudraksha.com for inquiries about authentic Rudraksha and spiritual products. India’s trusted store!",
    images: ["https://www.bestrudraksha.com/images/contact-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com/contact",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;