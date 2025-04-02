"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel w-full h-full " // Added h-full for full height
    >
      <SwiperSlide>
        <div className="relative w-full h-full min-h-[450px]"> {/* Adjust min-height as needed */}
          <Image
            src="/images/hero/new.png"
            alt="headphone"
            fill
            className="object-cover"
            priority
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full min-h-[450px]"> {/* Adjust min-height as needed */}
          <Image
            src="/images/hero/banner.jpg"
            alt="headphone"
            fill
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full min-h-[450px]"> {/* Adjust min-height as needed */}
          <Image
            src="/images/hero/hero-2.webp"
            alt="headphone"
            fill
            className="object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;