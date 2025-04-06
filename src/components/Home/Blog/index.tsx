"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import blogData from "@/data/blogData.json";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

const Blog = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden py-16 mb-10 bg-[#FFFAF5]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative">
        {/* Section Title - Centered */}
        <div className="mb-10 text-center">
          <span className="flex items-center justify-center gap-2.5 font-medium text-amber-700 mb-3">
            <Image
              src="/images/icons/icon-08.svg"
              alt="icon"
              width={20}
              height={20}
            />
            Latest Insights
          </span>
          <h2 className="font-semibold text-3xl xl:text-4xl text-gray-800 tracking-wide">
            Rudraksha Wisdom
          </h2>
        </div>

        <div className="relative">
          <Swiper
            ref={sliderRef}
            slidesPerView={3}
            spaceBetween={30}
        
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {blogData.map((blog, key) => (
              <SwiperSlide key={key} >
                <div className="bg-white rounded-lg shadow-lg mb-10 p-5 transform hover:scale-105 transition-all duration-300">
                  <Link href={`/blog/${blog.slug}`} className="block rounded-lg overflow-hidden">
                    <Image
                      src={blog.img}
                      alt="blog"
                      className="rounded-lg w-full h-30 object-cover"
                      width={330}
                      height={210}
                    />
                  </Link>

                  <div className="mt-6">
                    <span className="flex items-center justify-center gap-3 mb-3 text-sm text-gray-600">
                      <span>{blog.date}</span>
                      <span className="block w-px h-4 bg-amber-300"></span>
                      <span>{blog.views} Views</span>
                    </span>

                    <h2 className="font-medium text-lg sm:text-xl text-gray-800 mb-4 hover:text-amber-600 transition-colors text-center">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-sm flex items-center justify-center gap-2 py-2 text-amber-700 hover:text-amber-900 transition-colors"
                    >
                      Explore More
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.1023 4.10225C10.3219 3.88258 10.6781 3.88258 10.8977 4.10225L15.3977 8.60225C15.6174 8.82192 15.6174 9.17808 15.3977 9.39775L10.8977 13.8977C10.6781 14.1174 10.3219 14.1174 10.1023 13.8977C9.88258 13.6781 9.88258 13.3219 10.1023 13.1023L13.642 9.5625H3C2.68934 9.5625 2.4375 9.31066 2.4375 9C2.4375 8.68934 2.68934 8.4375 3 8.4375H13.642L10.1023 4.89775C9.88258 4.67808 9.88258 4.32192 10.1023 4.10225Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide >
            ))}
          </Swiper>

          {/* Navigation Buttons - Positioned on Left and Right */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full shadow-md hover:bg-amber-700 transition-colors z-10"
          >
            <svg
              className="fill-current"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
                fill="white"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full shadow-md hover:bg-amber-700 transition-colors z-10"
          >
            <svg
              className="fill-current"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;