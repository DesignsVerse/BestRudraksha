'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // For animations

const PromoBanner = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set countdown to 3 days from now (adjust as needed)
  useEffect(() => {
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden py-12 bg-[#FFFAF5]">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main large promo banner with parallax */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B4513] to-[#DAA520] py-6 lg:py-6 px-3 sm:px-5 lg:px-8 mb-8 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/rudraksha-pattern.png')] bg-repeat" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="max-w-[600px] w-full">
              <span className="block font-medium text-lg text-[#FFF5E1] mb-3 tracking-wide">
                Sacred Rudraksha Mala
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                UP TO <span className="text-[#FFD700]">30% OFF</span>
              </h2>
              <p className="text-[#FFF5E1] text-base sm:text-lg mb-6">
                Handcrafted 5-Mukhi Rudraksha beads, energized with Vedic mantras to enhance meditation and attract prosperity.
              </p>
              {/* Countdown Timer */}
              <div className="flex gap-4 mb-6 text-white font-mono">
                <div className="bg-[#4A2F0A]/50 px-4 py-2 rounded">
                  <span className="block text-2xl">{timeLeft.days}</span>
                  <span className="text-xs">Days</span>
                </div>
                <div className="bg-[#4A2F0A]/50 px-4 py-2 rounded">
                  <span className="block text-2xl">{timeLeft.hours}</span>
                  <span className="text-xs">Hours</span>
                </div>
                <div className="bg-[#4A2F0A]/50 px-4 py-2 rounded">
                  <span className="block text-2xl">{timeLeft.minutes}</span>
                  <span className="text-xs">Minutes</span>
                </div>
                <div className="bg-[#4A2F0A]/50 px-4 py-2 rounded">
                  <span className="block text-2xl">{timeLeft.seconds}</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
              <motion.a
                href="/products/rudraksha-mala"
                className="inline-flex font-medium text-white bg-gradient-to-r from-[#D4A76A] to-[#FFD700] hover:from-[#C2955A] hover:to-[#FFC107] py-3 px-10 rounded-lg transition duration-300 shadow-lg animate-pulse-slow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shop Rudraksha Mala"
              >
                Claim Your Discount
              </motion.a>
            </div>
            <motion.div
              className="relative w-full lg:w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/blog/blog-1.webp"
                alt="Rudraksha Mala"
                className="w-full lg:w-[300px] h-auto object-contain"
                width={300}
                height={400}
                priority
                quality={85}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {/* First small promo banner */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2E4A7D] to-[#4A90E2] py-8 sm:py-10 px-6 sm:px-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/blog/blog-1.webp"
                alt="Gemstone Pendant"
                className="h-[150px] sm:h-[200px] w-auto object-contain opacity-90"
                width={200}
                height={200}
                loading="lazy"
              />
            </motion.div>
            <div className="text-right ml-auto max-w-[60%] sm:max-w-[50%]">
              <span className="block text-base sm:text-lg text-[#FFF5E1] mb-2 tracking-wide">
                Natural Gemstone Pendant
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-white mb-3">
                Divine Protection
              </h2>
              <p className="font-semibold text-[#FFD700] text-lg">
                Flat 20% OFF
              </p>
              <motion.a
                href="/images/blog/blog-1.webp"
                className="inline-flex font-medium text-white bg-gradient-to-r from-[#D4A76A] to-[#FFD700] hover:from-[#C2955A] hover:to-[#FFC107] py-2 px-8 rounded-lg transition duration-300 mt-4 sm:mt-6 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Explore Gemstone Pendants"
              >
                Explore Now
              </motion.a>
            </div>
          </motion.div>

          {/* Second small promo banner */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4B2E7D] to-[#7B4AE2] py-8 sm:py-10 px-6 sm:px-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/blog/blog-1.webp"
                alt="Sacred Yantra"
                className="h-[150px] sm:h-[180px] w-auto object-contain opacity-90"
                width={180}
                height={180}
                loading="lazy"
              />
            </motion.div>
            <div className="max-w-[60%] sm:max-w-[50%]">
              <span className="block text-base sm:text-lg text-[#FFF5E1] mb-2 tracking-wide">
                Sacred Yantra Plate
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-white mb-3">
                Up to <span className="text-[#FFD700]">40% OFF</span>
              </h2>
              <p className="text-[#FFF5E1] text-sm sm:text-base">
                Energized copper yantras for wealth, health, and spiritual growth.
              </p>
              <motion.a
                href="/products/sacred-yantra"
                className="inline-flex font-medium text-white bg-gradient-to-r from-[#D4A76A] to-[#FFD700] hover:from-[#C2955A] hover:to-[#FFC107] py-2 px-8 rounded-lg transition duration-300 mt-4 sm:mt-6 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Discover Sacred Yantras"
              >
                Discover Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for animations and pattern */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default PromoBanner;