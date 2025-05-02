import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import { ClerkProvider } from '@clerk/nextjs';

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
  title: "Demo E-Commerce",
  description: "Buy your favorite products online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
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
          <CallButton phoneNumber="+919153164444" label="Contact Us"/>
        </body>
      </html>
    </ClerkProvider>
  );
}
