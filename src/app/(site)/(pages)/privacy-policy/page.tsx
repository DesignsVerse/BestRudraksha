import React from "react";
import Breadcrumb from "../../../../components/Common/Breadcrumb"; // Assuming this is also typed in your project

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Breadcrumb title={"Rudrak Privacy Policy"} pages={["privacy-policy"]} />

      <section className="overflow-hidden py-20 bg-orange-50">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-orange-600 p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              Rudrak Privacy Policy
            </h1>
            <p className="text-gray-600 mb-4 italic">
              Last Updated: April 02, 2025
            </p>

            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Rudrak ("we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website, purchase Rudraksha beads, or engage with our spiritual services. By using our services, you agree to the terms outlined herein.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect information to provide you with the best possible experience. This includes:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, shipping address, and payment details when you place an order for Rudraksha products.
                  </li>
                  <li>
                    <strong>Spiritual Preferences:</strong> Information about your Rudraksha preferences or spiritual inquiries (e.g., specific bead types or consultation requests).
                  </li>
                  <li>
                    <strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website, collected via cookies and analytics tools.
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Details from emails, forms, or chats when you contact our Rudrak Support Team.
                  </li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information helps us serve you better in the following ways:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>Process and fulfill your Rudraksha orders.</li>
                  <li>Provide personalized spiritual guidance and product recommendations.</li>
                  <li>Communicate updates, offers, and newsletters (with your consent).</li>
                  <li>Improve our website and services through analytics.</li>
                  <li>Ensure compliance with legal obligations and prevent fraud.</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We respect your privacy and only share your data when necessary:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    <strong>Service Providers:</strong> With trusted partners (e.g., shipping companies, payment processors) to fulfill orders.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights.
                  </li>
                  <li>
                    <strong>No Third-Party Sales:</strong> We do not sell your personal information to third parties.
                  </li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>Essential cookies for website functionality.</li>
                  <li>Analytics cookies to understand user behavior.</li>
                  <li>Marketing cookies for personalized offers (optional, with consent).</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  You can manage cookie preferences through your browser settings.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  6. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement advanced security measures, including encryption and secure servers, to protect your data. However, no online system is 100% secure, and we encourage you to safeguard your account credentials.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  7. Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>Access, update, or delete your personal information.</li>
                  <li>Opt-out of marketing communications.</li>
                  <li>Request data portability where applicable.</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:support@rudrak.com" className="text-orange-600 hover:underline">
                    support@rudrak.com
                  </a>.
                </p>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  8. International Data Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As a business rooted in India, your data may be processed globally. We ensure compliance with applicable data protection laws, including GDPR and India’s Digital Personal Data Protection Act, where relevant.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically. Changes will be posted here with an updated "Last Updated" date. We encourage you to review this page regularly.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions or concerns about this Privacy Policy, reach out to:
                </p>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <strong>Rudrak Support Team</strong>
                  </p>
                  <p>Email: <a href="mailto:support@rudrak.com" className="text-orange-600 hover:underline">support@rudrak.com</a></p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: Rudrak Temple Complex, 123 Spiritual Lane, Varanasi, UP 221001, India</p>
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

export default PrivacyPolicy;