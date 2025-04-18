"use client";
import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shopData from "@/components/Shop/shopData";

const BestSeller = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#FFFAF5] py-12">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <Image
              src="/images/icons/icon-07.svg"
              alt="icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <div>
              <span className="text-lg font-semibold text-gray-800">
                This Month
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Best Sellers
              </h2>
            </div>
          </div>
          <Link
            href="/shop-without-sidebar"
            className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#800000] rounded-lg shadow-md hover:bg-[#600000] transition-all duration-300"
          >
            View All
          </Link>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <Slider {...sliderSettings} className="best-seller-slider">
            {shopData.slice(11,19).map((item, key) => (
              <div key={key} className="px-2 focus:outline-none">
                <div className="transition-transform duration-300 hover:scale-[1.02]">
                  <SingleItem item={item} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;