"use client"
import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

const FAQ: React.FC = () => {
  // State to manage open/closed accordion items
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ data
  const faqs: { question: string; answer: string }[] = [
    {
      question: "What is Rudraksha and its significance?",
      answer:
        "Rudraksha beads are sacred seeds from the Rudraksha tree, revered in Hinduism for their spiritual and healing properties. They are believed to connect the wearer to Lord Shiva, promoting peace, protection, and positivity.",
    },
    {
      question: "How do I choose the right Rudraksha for me?",
      answer:
        "The right Rudraksha depends on your spiritual goals and personal needs. We offer guidance based on Mukhi (facets) types—e.g., 5-Mukhi for general well-being, 1-Mukhi for enlightenment. Contact our support team for personalized advice.",
    },
    {
      question: "Are your Rudraksha beads authentic?",
      answer:
        "Yes, all Rudraksha beads sold by Rudrak are sourced from trusted suppliers in India and Nepal, tested for authenticity, and accompanied by a certificate of genuineness upon request.",
    },
    {
      question: "How do I care for my Rudraksha beads?",
      answer:
        "Clean your Rudraksha with water monthly, avoid chemicals, and store it in a clean, dry place. Consecrated beads should be treated with reverence and not worn during certain activities (e.g., bathing or sleeping).",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 7 days for unused, non-consecrated items. Defective or incorrect items are eligible for full refunds or exchanges. See our <a href='/refund-policy' class='text-orange-600 hover:underline'>Refund Policy</a> for details.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary by location. Check our shipping section at checkout for estimated timelines and fees.",
    },
    {
      question: "Can I customize my Rudraksha order?",
      answer:
        "Custom orders (e.g., specific threading or consecration) are available upon request. Contact us at <a href='mailto:support@rudrak.com' class='text-orange-600 hover:underline'>support@rudrak.com</a> to discuss your needs.",
    },
  ];

  // Toggle accordion
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Breadcrumb title={"Rudrak FAQ"} pages={["faq"]} />

      <section className="py-20 bg-gradient-to-b from-orange-100 to-orange-50">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Rudraksha, our products, and services. Can’t find what you’re looking for? Reach out to us!
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-orange-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-orange-700 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-orange-600 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 p-5" : "max-h-0"
                  }`}
                >
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our Rudrak Support Team is here to assist you with any inquiries.
            </p>
            <a
              href="mailto:support@rudrak.com"
              className="inline-flex items-center gap-2 font-medium text-white bg-orange-600 py-3 px-8 rounded-full ease-out duration-300 hover:bg-orange-700 shadow-md"
            >
              Contact Us
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;