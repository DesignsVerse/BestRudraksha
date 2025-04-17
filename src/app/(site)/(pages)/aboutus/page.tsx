// src/app/(site)/(pages)/aboutus/page.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Common/Breadcrumb';

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>About BestRudraksha - Authentic Rudraksha Beads & Spiritual Products</title>
        <meta name="description" content="Discover our journey at BestRudraksha - purveyors of authentic, high-quality Rudraksha beads and spiritual products since 2010." />
      </Head>
      
      <Breadcrumb title="About Us" pages={["About Us"]} />
      <div className="min-h-screen bg-[#FFFAF5] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Spiritual Journey
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Connecting you with authentic Rudraksha beads since 2010
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  The BestRudraksha Story
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2010, BestRudraksha began as a small family enterprise with a mission to bring authentic, high-quality Rudraksha beads to spiritual seekers worldwide. What started as a humble endeavor has now blossomed into a trusted name in the spiritual community.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our founder, a lifelong devotee and Rudraksha expert, personally sources each bead from sacred locations, ensuring their purity and spiritual potency. We take pride in our meticulous authentication process that guarantees you receive only genuine Rudraksha beads.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we serve thousands of satisfied customers across the globe, helping them on their spiritual journeys with our premium products and expert guidance.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-96 w-full">
                  <Image 
                    src="/images/blog/blog-1.webp" 
                    alt="Rudraksha farming and harvesting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm italic">"Each bead carries the blessings of the Himalayas"</p>
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
                  <svg className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  Every Rudraksha bead undergoes rigorous testing and certification to ensure its genuineness and quality.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#800000]/10 mx-auto mb-4">
                  <svg className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spiritual Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest spiritual standards in sourcing and handling our sacred products.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#800000]/10 mx-auto mb-4">
                  <svg className="h-8 w-8 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Enlightenment</h3>
                <p className="text-gray-600">
                  We\'re committed to educating our customers about proper Rudraksha selection, care, and spiritual practices.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Our Rigorous Process
            </h2>
            <div className="relative max-w-7xl mx-auto">
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#800000] transform -translate-x-1/2"></div>
              <div className="space-y-16 md:space-y-8">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Sacred Sourcing</h3>
                      <p className="text-gray-600">
                        We personally visit Rudraksha farms in Nepal, Indonesia, and India to select the finest beads from trusted growers.
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
                          alt="Rudraksha sourcing process" 
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
                          alt="Rudraksha authentication process" 
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Authentication</h3>
                      <p className="text-gray-600">
                        Each bead is examined by our team of experts for mukhi count, natural markings, and spiritual energy before being certified.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Spiritual Consecration</h3>
                      <p className="text-gray-600">
                        Selected beads undergo traditional purification rituals and blessings by learned priests to enhance their spiritual potency.
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
                          alt="Rudraksha consecration ceremony" 
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
              Meet Our Spiritual Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/blog/blog-1.webp" 
                    alt="Founder of BestRudraksha" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Harish Sharma</h3>
                  <p className="text-[#800000] font-medium mb-3">Founder & Spiritual Guide</p>
                  <p className="text-gray-600">
                    With over 25 years of experience in Rudraksha studies, Harish ensures every bead meets our highest standards.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/blog/blog-1.webp" 
                    alt="Lead Authenticator" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Priya Patel</h3>
                  <p className="text-[#800000] font-medium mb-3">Lead Authenticator</p>
                  <p className="text-gray-600">
                    Priya\'s keen eye and deep knowledge help identify genuine Rudraksha beads from imitations.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/blog/blog-1.webp" 
                    alt="Customer Care Head" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Rajiv Malhotra</h3>
                  <p className="text-[#800000] font-medium mb-3">Customer Care Head</p>
                  <p className="text-gray-600">
                    Rajiv ensures every customer receives personalized guidance in selecting the right Rudraksha for their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#800000] to-[#600000] rounded-xl shadow-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Begin Your Spiritual Journey With Authentic Rudraksha
            </h2>
            <p className="text-[#FFFAF5] mb-6 max-w-2xl mx-auto">
              Discover the perfect Rudraksha bead for your spiritual needs, backed by our authenticity guarantee and expert guidance.
            </p>
            <Link 
              href="/shop" 
              className="inline-block bg-[#FFFAF5] text-[#800000] font-bold py-3 px-8 rounded-lg hover:bg-white transition duration-200"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;