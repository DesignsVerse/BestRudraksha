import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Common/Breadcrumb';


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BestRudraksha.com - Authentic Rudraksha & Spiritual Products",
  description:
    "Learn about BestRudraksha.com, India’s trusted source for authentic Rudraksha, gemstones, malas, and yantras. Discover our mission to provide spiritual guidance and quality products!",
  keywords: [
    "about BestRudraksha",
    "BestRudraksha mission",
    "BestRudraksha India",
    "authentic Rudraksha",
    "spiritual products India",
    "Rudraksha shop about",
    "gemstones shop about",
    "mala shop about",
    "yantra shop about",
    "BestRudraksha story",
    "Rudraksha authenticity",
    "BestRudraksha team",
    "spiritual guidance India",
    "Rudraksha experts",
    "BestRudraksha values",
    "Rudraksha for spirituality",
    "gemstones for astrology",
    "mala for meditation",
    "yantra for prosperity",
    "BestRudraksha quality",
    "Rudraksha benefits about",
    "BestRudraksha history",
    "trusted Rudraksha store",
    "BestRudraksha spiritual products",
    "Rudraksha shop India",
    "BestRudraksha customer trust",
    "about Rudraksha authenticity",
    "BestRudraksha brand",
    "spiritual products mission",
    "Rudraksha for zodiac signs about",
    "BestRudraksha expertise",
    "Rudraksha wearing rules about",
    "Rudraksha cleaning method about",
    "real vs fake Rudraksha about",
    "BestRudraksha spiritual guidance",
    "BestRudraksha store India",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "About BestRudraksha.com | Spiritual Excellence",
    description:
      "Discover BestRudraksha.com’s mission to deliver authentic Rudraksha, gemstones, malas, and yantras. Trusted spiritual guidance from India!",
    url: "https://bestrudraksha.com/aboutus",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestRudraksha About Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BestRudraksha.com | Spiritual Excellence",
    description:
      "Learn about BestRudraksha.com, your trusted source for Rudraksha and spiritual products in India!",
    images: ["https://bestrudraksha.com/images/about-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/aboutus",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};



const AboutUs: React.FC = () => {
  return (
    <>
      

      <Breadcrumb title="About Us" pages={["About Us"]} />
      <div className="min-h-screen bg-[#FFFAF5] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Spiritual Mission
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Empowering your spiritual journey with authentic products since 2024
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  The Best Rudraksha Story
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Established in 2024, Best Rudraksha is a trusted name in spiritual e-commerce, dedicated to providing authentic Rudraksha beads, gemstones, malas, and yantras to seekers worldwide. Our journey began with a vision to make high-quality spiritual products accessible to all.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  At Best Rudraksha, we source our products with care, ensuring each item meets strict standards of authenticity and spiritual significance. Our commitment to trust and quality has earned us a growing community of satisfied customers.
                </p>
                <p className="text-lg text-gray-600">
                  We combine traditional wisdom with modern convenience, offering expert guidance to help you choose the right products for your spiritual needs.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-96 w-full">
                  <Image
                    src="/images/about/1.png"
                    alt="Authentic Rudraksha and spiritual products"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm italic">{"Crafted with devotion, sourced with trust"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#800000]/10 mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-[#800000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Authenticity</h3>
                <p className="text-gray-600">
                  Every product is rigorously tested and certified to ensure its genuineness and spiritual value.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#800000]/10 mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-[#800000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spiritual Excellence</h3>
                <p className="text-gray-600">
                  We uphold the highest standards in sourcing and handling our sacred products.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#800000]/10 mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-[#800000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Guidance</h3>
                <p className="text-gray-600">
                  We empower our customers with knowledge about selecting and using spiritual products effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Our Quality Process
            </h2>
            <div className="relative max-w-7xl mx-auto">
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#800000] transform -translate-x-1/2"></div>
              <div className="space-y-16 md:space-y-8">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Sourcing</h3>
                      <p className="text-gray-600">
                        We source Rudraksha, gemstones, malas, and yantras from trusted suppliers in sacred regions, ensuring ethical practices.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-5 w-5 rounded-full bg-[#800000] border-4 border-white"></div>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-64 w-full">
                        <Image
                          src="/images/blog/blog-1.webp"
                          alt="Sourcing spiritual products"
                          fill
                          className="rounded-md object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 order-1 md:order-none mb-6 md:mb-0">
                    <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-64 w-full">
                        <Image
                          src="/images/blog/blog-1.webp"
                          alt="Product authentication"
                          fill
                          className="rounded-md object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-5 w-5 rounded-full bg-[#800000] border-4 border-white"></div>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Verification</h3>
                      <p className="text-gray-600">
                        Our team of astrologers and experts verifies each product for authenticity, quality, and spiritual potency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Spiritual Energization</h3>
                      <p className="text-gray-600">
                        Products undergo traditional rituals to enhance their spiritual energy, ensuring they resonate with your intentions.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-5 w-5 rounded-full bg-[#800000] border-4 border-white"></div>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-64 w-full">
                        <Image
                          src="/images/blog/blog-1.webp"
                          alt="Spiritual energization ceremony  ceremony"
                          fill
                          className="rounded-md object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Meet Our Astrologers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/blog/blog-1.webp"
                    alt="Deepak Goutam, Astrologer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Deepak Goutam</h3>
                  <p className="text-[#800000] font-medium mb-3">Astrologer & Spiritual Guide</p>
                  <p className="text-gray-600">
                    Deepak brings decades of astrological expertise, guiding customers to select the perfect spiritual products.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/blog/blog-1.webp"
                    alt="Prakhar Sharma, Astrologer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Prakhar Sharma</h3>
                  <p className="text-[#800000] font-medium mb-3">Astrologer & Advisor</p>
                  <p className="text-gray-600">
                    Prakhar&apos;s deep knowledge of Vedic astrology ensures personalized recommendations for every customer.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/blog/blog-1.webp"
                    alt="Ganesh Sharma, Astrologer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Ganesh Sharma</h3>
                  <p className="text-[#800000] font-medium mb-3">Astrologer & Consultant</p>
                  <p className="text-gray-600">
                    Ganesh provides spiritual insights, helping customers align their purchases with their cosmic goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#800000] to-[#600000] rounded-xl shadow-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Discover Authentic Spiritual Products
            </h2>
            <p className="text-[#FFFAF5] mb-6 max-w-2xl mx-auto">
              Explore our curated collection of Rudraksha, gemstones, malas, and yantras, backed by our trusted astrologers guidance.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#FFFAF5] text-[#800000] font-bold py-3 px-8 rounded-lg hover:bg-white transition duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;