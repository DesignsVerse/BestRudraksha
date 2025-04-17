'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  });

  // Set countdown to 3 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 0);
  
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();
      
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
  // Format time units to always show 2 digits
  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <section className="overflow-hidden py-12 bg-gradient-to-b from-[#FFF9F0] to-[#FFFAF5]">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Promo Banner */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#DAA520] py-8 px-6 sm:py-10 sm:px-8 mb-8 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/dot-pattern.png')] bg-[length:40px_40px]" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFD700] rounded-full filter blur-[80px] opacity-20" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#8B4513] rounded-full filter blur-[100px] opacity-20" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="max-w-[600px] w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="inline-block font-medium text-sm sm:text-base text-[#FFE8C2] mb-2 px-3 py-1 bg-[#5A3410]/50 rounded-full">
                  Limited Time Offer
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                  Sacred <span className="text-[#FFD700]">Rudraksha Mala</span>
                </h2>
                <p className="text-[#FFF5E1] text-base sm:text-lg mb-6">
                  Handcrafted with genuine 5-Mukhi Rudraksha beads, energized with Vedic mantras to enhance meditation and attract prosperity.
                </p>
              </motion.div>

              {/* Countdown Timer */}
              <motion.div
                className="flex gap-3 sm:gap-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-[#5A3410]/60 px-3 py-2 sm:px-4 sm:py-3 rounded-lg backdrop-blur-sm">
                      <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        {formatTime(value)}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#FFE8C2] mt-1 block capitalize">
                      {unit}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <motion.a
                  href="/products/rudraksha-mala"
                  className="relative overflow-hidden inline-flex items-center justify-center font-medium text-[#5A3410] bg-gradient-to-r from-[#FFD700] to-[#FFC107] hover:from-[#FFC107] hover:to-[#FFB800] py-3 px-8 sm:px-10 rounded-lg transition-all duration-300 shadow-lg group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Shop Rudraksha Mala"
                >
                  <span className="relative z-10">Claim Your 30% Discount</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#FFE8C2]">Free Shipping & Puja Certificate</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative w-full lg:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-full max-w-[450px] mx-auto lg:mx-0">
                <Image
                  src="/images/blog/blog-1.png"
                  alt="Rudraksha Mala"
                  width={350}
                  height={350}
                  className="w-full h-auto object-contain"
                  priority
                />
                {/* Discount badge */}
                <div className="absolute -top-4 -right-4 bg-[#FF3333] text-white font-bold text-lg w-16 h-16 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                  30% OFF
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Secondary Promo Banners */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {/* Gemstone Pendant Banner */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2E4A7D] via-[#3A5A8A] to-[#4A90E2] p-6 sm:p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/images/cross-pattern.png')] bg-[length:30px_30px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4A90E2] rounded-full filter blur-[80px] opacity-20" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/blog/blog-1.webp"
                  alt="Gemstone Pendant"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain drop-shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#FFD700] text-[#5A3410] font-bold text-xs px-2 py-1 rounded">
                  -20%
                </div>
              </motion.div>
              
              <div className="text-center sm:text-left">
                <span className="block text-sm text-[#C8DFFF] mb-1">
                  Natural Gemstones
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                  Divine Protection Pendants
                </h3>
                <p className="text-[#C8DFFF] text-sm mb-4">
                  Energized with planetary blessings for health and prosperity
                </p>
                <motion.a
                  href="/products/gemstone-pendants"
                  className="inline-flex items-center font-medium text-white bg-[#FFD700]/90 hover:bg-[#FFD700] py-2 px-6 rounded-full transition duration-300 shadow-md text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Yantra Plate Banner */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4B2E7D] via-[#5A3A8C] to-[#7B4AE2] p-6 sm:p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/images/diamond-pattern.png')] bg-[length:30px_30px]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9B6BFF] rounded-full filter blur-[80px] opacity-20" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left order-2 sm:order-1">
                <span className="block text-sm text-[#E2D1FF] mb-1">
                  Sacred Geometry
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                  Energized Yantra Plates
                </h3>
                <p className="text-[#E2D1FF] text-sm mb-4">
                  Copper yantras for wealth, health and spiritual growth
                </p>
                <motion.a
                  href="/products/sacred-yantras"
                  className="inline-flex items-center font-medium text-white bg-[#9B6BFF] hover:bg-[#8A5AEE] py-2 px-6 rounded-full transition duration-300 shadow-md text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
              
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 order-1 sm:order-2"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/blog/blog-1.webp"
                  alt="Sacred Yantra"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain drop-shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -top-2 -left-2 bg-[#FFD700] text-[#4B2E7D] font-bold text-xs px-2 py-1 rounded">
                  -40%
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;