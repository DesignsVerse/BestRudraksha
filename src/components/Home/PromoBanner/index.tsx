import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-12 bg-[#f8f3ee]">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main large promo banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5c3c1a] to-[#8b5a2b] py-10 lg:py-16 px-6 sm:px-10 lg:px-16 mb-6 shadow-lg">
          <div className="max-w-[500px] w-full z-10 relative">
            <span className="block font-medium text-lg text-[#f0e6d9] mb-3">
              Divine Rudraksha Mala
            </span>

            <h2 className="font-bold text-2xl lg:text-4xl xl:text-5xl text-white mb-4">
              UP TO 30% OFF
            </h2>

            <p className="text-[#f0e6d9]">
              Handcrafted with sacred 5-mukhi beads for peace and prosperity. 
              Energized with Vedic mantras for spiritual growth.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white bg-[#d4a76a] hover:bg-[#c2955a] py-3 px-10 rounded-lg transition duration-300 mt-6 shadow-md"
            >
              Shop Now
            </a>
          </div>

          <Image
            src="/images/products/a.png"
            alt="Rudraksha Mala"
            className="absolute bottom-0 right-0 lg:right-10 h-[90%] w-auto object-contain"
            width={300}
            height={400}
            priority
          />
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {/* First small promo banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a3c5c] to-[#2b5a8b] py-8 xl:py-12 px-6 sm:px-8 xl:px-10 shadow-lg">
            <Image
              src="/images/products/a.png"
              alt="Gemstone Pendant"
              className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 h-[70%] w-auto object-contain opacity-90"
              width={200}
              height={200}
            />

            <div className="text-right ml-auto max-w-[60%]">
              <span className="block text-lg text-[#f0e6d9] mb-2">
                Natural Gemstone Pendant
              </span>

              <h2 className="font-bold text-xl lg:text-2xl text-white mb-3">
                Divine Protection
              </h2>

              <p className="font-semibold text-[#d4a76a]">
                Flat 20% off
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-white bg-[#d4a76a] hover:bg-[#c2955a] py-2 px-8 rounded-lg transition duration-300 mt-8 shadow-md"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Second small promo banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3c1a5c] to-[#5a2b8b] py-8 xl:py-12 px-6 sm:px-8 xl:px-10 shadow-lg">
            <Image
              src="/images/products/a.png"
              alt="Sacred Yantra"
              className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 h-[70%] w-auto object-contain opacity-90"
              width={180}
              height={180}
            />

            <div className="max-w-[60%]">
              <span className="block text-lg text-[#f0e6d9] mb-2">
                Sacred Yantra Plate
              </span>

              <h2 className="font-bold text-xl lg:text-2xl text-white mb-3">
                Up to <span className="text-[#d4a76a]">40%</span> off
              </h2>

              <p className="text-[#f0e6d9] text-sm">
                Copper-made yantras energized with Vedic rituals for wealth, health, and spiritual growth.
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-white bg-[#d4a76a] hover:bg-[#c2955a] py-2 px-8 rounded-lg transition duration-300 mt-6 shadow-md"
              >
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;