// Categories.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import data from "./categoryData";
import "swiper/css";
import "swiper/css/navigation";
import SingleItem from "./SingleItem";

const Categories = () => {
  const sliderRef = useRef<any>(null); // Swiper ref type

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden pt-[70px] bg-[#FFFAF5]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-[60px] border-b border-gray-300">
        <div className="categories-container">
          {/* Section title */}
          <div className="mb-10 text-center">
            <span className="flex items-center justify-center gap-2.5 font-medium text-[#800000] mb-1.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                  fill="currentColor"
                />
              </svg>
              Categories
            </span>
            <h2 className="font-semibold text-xl xl:text-[32px] text-[#800000]">
              Browse by Category
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="md:hidden flex justify-end items-center gap-3 mb-6">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>

          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              ref={sliderRef}
              slidesPerView={2}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
              }}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <SingleItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {data.map((item) => (
              <SingleItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;