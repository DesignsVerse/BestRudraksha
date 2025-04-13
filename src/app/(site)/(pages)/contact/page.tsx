import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BestRudraksha.com - Asli Rudraksha Support India",
  description:
    "BestRudraksha.com se asli Rudraksha beads, malas ya spiritual accessories ke baare mein poocho! India bhar mein humse contact karein for expert support aur guidance.",
  keywords: [
    "Rudraksha contact",
    "asli Rudraksha support",
    "BestRudraksha contact",
    "Rudraksha shop India",
    "spiritual support India",
    "buy Rudraksha online contact",
    "Rudraksha guidance",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow", // Contact page ko index karenge for trust
  openGraph: {
    title: "Contact Us | BestRudraksha.com - Rudraksha Support India",
    description:
      "Poocho asli Rudraksha ke baare mein BestRudraksha.com se! India ke liye expert support aur spiritual guidance.",
    url: "https://bestrudraksha.com/contact",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/contact-og-image.jpg", // Contact vibe ki photo daal
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
    title: "Contact Us | BestRudraksha.com - Rudraksha Support",
    description:
      "BestRudraksha.com se Rudraksha ke liye support lo! India mein asli Rudraksha guidance ke liye contact karein.",
    images: ["https://bestrudraksha.com/images/contact-twitter-image.jpg"], // Photo daal
    site: "@BestRudraksha", // Apna Twitter handle daal ya hata de
  },
  alternates: {
    canonical: "https://bestrudraksha.com/contact",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629", // India ke coordinates
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