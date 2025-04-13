import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | BestRudraksha.com - Asli Rudraksha India",
  description:
    "BestRudraksha.com ki refund policy janiye. Asli Rudraksha beads, malas ke liye easy returns aur refunds India mein. Apki satisfaction guaranteed!",
  keywords: [
    "Rudraksha refund policy",
    "asli Rudraksha returns",
    "BestRudraksha refund",
    "Rudraksha shop India",
    "spiritual shopping refund",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Refund Policy | BestRudraksha.com",
    description:
      "BestRudraksha.com pe asli Rudraksha ke liye easy refund policy. India mein secure returns aur satisfaction!",
    url: "https://bestrudraksha.com/refund-policy",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/refund-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestRudraksha Refund Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | BestRudraksha.com",
    description:
      "Janiye BestRudraksha.com ki refund policy - asli Rudraksha ke liye easy returns. India ke liye trusted!",
    images: ["https://bestrudraksha.com/images/refund-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/refund-policy",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const RefundPolicy: React.FC = () => {
  return (
    <>
      <Breadcrumb title={"Refund Policy"} pages={["refund-policy"]} />

      <section className="overflow-hidden py-20 bg-orange-50">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-orange-600 p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              Refund Policy
            </h1>
            <p className="text-gray-600 mb-4 italic">
              Last Updated: April 02, 2025
            </p>

            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  1. Our Commitment
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At BestRudraksha.com, we strive to provide you with authentic Rudraksha beads and spiritual products of the highest quality. We understand the sacred value of these items and are dedicated to ensuring your satisfaction. This Refund Policy outlines the conditions under which refunds, returns, or exchanges are available.
                </p>
              </div>

              {/* Eligibility for Refunds */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  2. Eligibility for Refunds
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We offer refunds under the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    <strong>Damaged or Defective Products:</strong> If your Rudraksha beads or other items arrive damaged, cracked, or defective, you are eligible for a refund or replacement.
                  </li>
                  <li>
                    <strong>Incorrect Items:</strong> If you receive an item different from what you ordered (e.g., wrong bead type or size).
                  </li>
                  <li>
                    <strong>Non-Delivery:</strong> If your order does not arrive within the estimated delivery timeframe due to an error on our part.
                  </li>
                  <li>
                    <strong>Change of Mind:</strong> Refunds for change of mind are accepted within 7 days of delivery, provided the item is unused, unstrung, and in its original packaging.
                  </li>
                </ul>
                <p className="text-gray-700 mt-2 italic">
                  Note: Due to the spiritual nature of Rudraksha, items that have been consecrated, worn, or used in rituals are not eligible for return unless defective.
                </p>
              </div>

              {/* Refund Process */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  3. How to Request a Refund
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To initiate a refund, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 mt-2 text-gray-700">
                  <li>
                    <strong>Contact Us:</strong> Email us at{" "}
                    <a
                      href="mailto:support@bestrudraksha.com"
                      className="text-orange-600 hover:underline"
                    >
                      support@bestrudraksha.com
                    </a>{" "}
                    or call +91 98765 43210 within 7 days of receiving your order.
                  </li>
                  <li>
                    <strong>Provide Details:</strong> Include your order number, a description of the issue, and photos (if applicable) of the product.
                  </li>
                  <li>
                    <strong>Return the Item:</strong> Ship the item back to us at BestRudraksha, 123 Spiritual Lane, Varanasi, UP 221001, India, using a trackable courier service. Shipping costs for returns are borne by the customer unless the item is defective or incorrect.
                  </li>
                  <li>
                    <strong>Processing:</strong> Once we receive and inspect the returned item, we will notify you via email about the approval or rejection of your refund.
                  </li>
                </ol>
              </div>

              {/* Refund Timeline */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  4. Refund Timeline
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Refunds are processed as follows:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    <strong>Approval:</strong> Within 3-5 business days of receiving your return.
                  </li>
                  <li>
                    <strong>Payment:</strong> Refunds will be credited to your original payment method within 7-10 business days, depending on your bank or payment provider.
                  </li>
                  <li>
                    <strong>Partial Refunds:</strong> May apply if the returned item is not in its original condition (excluding defective items).
                  </li>
                </ul>
              </div>

              {/* Non-Refundable Items */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  5. Non-Refundable Items
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The following items are not eligible for refunds:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>Customized or consecrated Rudraksha products.</li>
                  <li>Items damaged due to misuse or improper handling.</li>
                  <li>Products returned after 7 days (unless defective).</li>
                  <li>Gift cards or digital services (e.g., online consultations).</li>
                </ul>
              </div>

              {/* Exchanges */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  6. Exchanges
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you prefer an exchange over a refund (e.g., for a different Rudraksha bead type), please contact us within 7 days of delivery. Exchanges are subject to availability, and you may need to cover additional shipping costs.
                </p>
              </div>

              {/* Shipping Costs */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  7. Shipping Costs
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Original shipping costs are non-refundable unless the return is due to our error (e.g., defective or incorrect items). For defective products, we will reimburse reasonable return shipping costs upon approval.
                </p>
              </div>

              {/* Cancellations */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  8. Order Cancellations
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You may cancel your order before it is shipped by contacting us at{" "}
                  <a
                    href="mailto:support@bestrudraksha.com"
                    className="text-orange-600 hover:underline"
                  >
                    support@bestrudraksha.com
                  </a>. If the order has already shipped, standard return policies apply.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For any questions or assistance with refunds, please reach out to:
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

            {/* Back to Top Button */}
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

export default RefundPolicy;