import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | BestRudraksha.com - Asli Rudraksha India",
  description:
    "BestRudraksha.com ke terms of use padhein. Asli Rudraksha beads aur spiritual services ke liye India mein hamari policies janiye!",
  keywords: [
    "Rudraksha terms of use",
    "asli Rudraksha terms",
    "BestRudraksha terms",
    "Rudraksha shop India",
    "spiritual shopping terms",
    "rudraksha", "rudraksha benefits", "original rudraksha", "1 mukhi rudraksha", "rudraksha for health", "rudraksha for meditation", "5 mukhi rudraksha", "rudraksha for students", "rudraksha for success", "rudraksha bracelet", "rudraksha mala", "nepali rudraksha", "rudraksha price", "rudraksha types", "rudraksha for money", "rudraksha for love", "rudraksha for career", "ek mukhi rudraksha", "rudraksha wearing rules", "rudraksha side effects", "rudraksha for peace", "rudraksha beads", "buy rudraksha online", "rudraksha for zodiac signs", "best rudraksha for job", "rudraksha for stress relief", "rudraksha for energy", "how to wear rudraksha", "rudraksha mantra", "rudraksha astrology", "rudraksha bracelet for men", "rudraksha bracelet for women", "rudraksha in hindi", "rudraksha cleaning method", "rudraksha for anxiety", "real vs fake rudraksha", "rudraksha for blood pressure", "rudraksha for focus", "rudraksha for protection", "rudraksha for healing", "rudraksha for spirituality", "rudraksha for mental health", "rudraksha for students benefits", "rudraksha energize process", "rudraksha for daily use", "rudraksha for sleep", "rudraksha and chakras", "rudraksha and vastu", "rudraksha for negative energy", "rudraksha pehnne ke faayde", "rudraksha kya hota hai", "rudraksha mala kaise pehne", "rudraksha price in India", "rudraksha aur health", "rudraksha aur meditation", "best rudraksha for success", "rudraksha for love and peace", "rudraksha for career growth", "rudraksha for mental peace", "rudraksha benefits for anxiety", "original vs fake rudraksha", "rudraksha price check", "rudraksha for job promotion", "kaise pehne rudraksha", "rudraksha and spiritual growth", "rudraksha kaise saf karen", "rudraksha for blood pressure control", "rudraksha for positivity", "rudraksha healing process", "rudraksha for stress free life", "rudraksha for protection from negativity"

  ],
  authors: [{ name: "BestRudraksha Team", url: "https://www.bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Use | BestRudraksha.com",
    description:
      "Janiye BestRudraksha.com ke terms of use. India mein asli Rudraksha ke liye trusted policies!",
    url: "https://www.bestrudraksha.com/terms-of-use",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://www.bestrudraksha.com/images/terms-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestRudraksha Terms of Use",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | BestRudraksha.com",
    description:
      "BestRudraksha.com ke terms of use - asli Rudraksha ke liye India mein clear policies!",
    images: ["https://www.bestrudraksha.com/images/terms-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bestrudraksha.com/terms-of-use",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const TermsOfUse: React.FC = () => {
  return (
    <>
      <Breadcrumb title={"Terms of Use"} pages={["terms-of-use"]} />

      <section className="overflow-hidden py-20 bg-orange-50">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-orange-600 p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              Terms of Use
            </h1>
            <p className="text-gray-600 mb-4 italic">
              Last Updated: April 02, 2025
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to BestRudraksha.com (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;). By accessing or using our website,
                  purchasing Rudraksha beads, or engaging with our spiritual
                  services, you agree to be bound by these Terms of Use
                  (&quot;Terms&quot;). If you do not agree with these
                  Terms, please refrain from using our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  2. Use of Services
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are intended for personal, non-commercial use
                  unless otherwise agreed. You agree to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    Use the website and products in accordance with applicable
                    laws.
                  </li>
                  <li>
                    Not misuse, modify, or resell Rudraksha products without
                    permission.
                  </li>
                  <li>
                    Provide accurate information during purchases or interactions.
                  </li>
                  <li>Respect the spiritual significance of Rudraksha beads.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  3. Account Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To purchase products or access certain features, you may need to
                  create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    Maintaining the confidentiality of your account credentials.
                  </li>
                  <li>
                    Notifying us immediately of any unauthorized use at{" "}
                    <a
                      href="mailto:support@bestrudraksha.com"
                      className="text-orange-600 hover:underline"
                    >
                      support@bestrudraksha.com
                    </a>.
                  </li>
                  <li>
                    Ensuring all information provided is accurate and up-to-date.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on our website, including text, images, logos, and
                  descriptions of Rudraksha products, is owned by
                  BestRudraksha.com or its licensors and protected by
                  intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    Reproduce, distribute, or modify our content without written
                    consent.
                  </li>
                  <li>
                    Use our trademarks (e.g., &quot;BestRudraksha&quot;)
                    for commercial purposes without permission.
                  </li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Limited use for personal, non-commercial purposes (e.g., sharing
                  product links) is permitted.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  5. Product Purchases
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When purchasing Rudraksha beads or other items:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    Prices are as listed, subject to change without notice.
                  </li>
                  <li>
                    Payment must be completed via accepted methods (e.g., credit
                    card, UPI).
                  </li>
                  <li>
                    Shipping terms are outlined at checkout; delays due to
                    external factors (e.g., customs) are not our responsibility.
                  </li>
                  <li>
                    Refunds and returns are governed by our{" "}
                    <a
                      href="/refund-policy"
                      className="text-orange-600 hover:underline"
                    >
                      Refund Policy
                    </a>.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    Our services and products are provided &quot;as is&quot;
                    without warranties beyond those expressly stated.
                  </li>
                  <li>
                    We are not liable for indirect, incidental, or consequential
                    damages arising from your use of our services.
                  </li>
                  <li>
                    Our liability is limited to the amount paid for the product or
                    service in question.
                  </li>
                </ul>
                <p className="text-gray-700 mt-2 italic">
                  Note: Rudraksha is a spiritual item; we do not guarantee
                  specific outcomes from its use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  7. Termination
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to terminate or suspend your access to our
                  services, without prior notice, if you:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>Violate these Terms.</li>
                  <li>Engage in fraudulent or illegal activities.</li>
                  <li>
                    Misuse our website or products in a way that harms
                    BestRudraksha.com or others.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  8. Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes
                  arising from your use of our services will be resolved in the
                  courts of Varanasi, Uttar Pradesh, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  9. Changes to These Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms periodically. Changes will be posted
                  here with an updated &quot;Last Updated&quot; date.
                  Continued use of our services after changes constitutes
                  acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions or concerns about these Terms, please contact:
                </p>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <strong>BestRudraksha Support Team</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:support@bestrudraksha.com"
                      className="text-orange-600 hover:underline"
                    >
                      support@bestrudraksha.com
                    </a>
                  </p>
                  <p>Phone: +91 98765 43210</p>
                  <p>
                    Address: BestRudraksha, 123 Spiritual Lane, Varanasi, UP
                    221001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#top"
                className="inline-flex items-center gap-2 font-medium text-white bg-orange-600 py-2 px-5 rounded-md ease-out duration-200 hover:bg-orange-700"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V4M8 4L4 8M8 4L12 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;