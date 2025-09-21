import "../css/euclid-circular-a-font.css";
import "../css/style.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";
import ScrollToTop from "@/components/Common/ScrollToTop";
import NavigationBar from "@/components/Common/NavigationBar";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import CallButton from "@/components/Common/WhatsAppButton";
export const metadata: Metadata = {
  title: "BestRudraksha.com | Authentic Rudraksha, Gemstones, Malas & Yantras",
  description:
    "Shop authentic Rudraksha, gemstones, malas, and yantras at BestRudraksha.com. Trusted spiritual products for astrology, meditation, and wellness in India!",
  keywords: [
    "BestRudraksha",
    "authentic Rudraksha",
    "Rudraksha shop India",
    "spiritual products",
    "gemstones India",
    "mala beads",
    "yantra for spirituality",
    "Rudraksha online",
    "buy Rudraksha",
    "authentic gemstones",
    "spiritual guidance India",
    "Rudraksha benefits",
    "gemstones for astrology",
    "mala for meditation",
    "yantra for prosperity",
    "Rudraksha for health",
    "Rudraksha for wealth",
    "spiritual products India",
    "trusted Rudraksha store",
    "Rudraksha authenticity",
    "gemstones online",
    "mala online",
    "yantra online",
    "Rudraksha for zodiac signs",
    "spiritual wellness India",
    "BestRudraksha store",
    "Rudraksha for spirituality",
    "gemstones for healing",
    "mala for chanting",
    "yantra for protection",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "BestRudraksha.com | Trusted Spiritual Products",
    description:
      "Explore authentic Rudraksha, gemstones, malas, and yantras at BestRudraksha.com. India’s trusted store for spiritual wellness!",
    url: "https://www.bestrudraksha.com",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/hero/home-gemstone.png",
        width: 1200,
        height: 630,
        alt: "BestRudraksha Spiritual Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestRudraksha.com | Trusted Spiritual Products",
    description:
      "Shop Rudraksha, gemstones, malas, and yantras at BestRudraksha.com. Trusted spiritual store in India!",
    images: ["https://www.bestrudraksha.com/images/hero/home-gemstone.png"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <CartModalProvider>
            <ModalProvider>
              <PreviewSliderProvider>
                <Header />
                {children}
                <QuickViewModal />
                <CartSidebarModal />
                <PreviewSliderModal />
              </PreviewSliderProvider>
            </ModalProvider>
          </CartModalProvider>
        </ReduxProvider>

        <ScrollToTop />
        <Footer />
        <NavigationBar />
        <WhatsAppButton phoneNumber="+919153164444" label="Chat with Us" />
        <CallButton phoneNumber="+919153164444" label="Contact Us" />
      </body>
    </html>
  );
}