'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useRef } from 'react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import blogData from '@/data/blogData.json';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';

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
    <section className="overflow-hidden py-12 sm:py-20 bg-[#FFFAF5]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative">
        {/* Section Title - Centered */}
        <div className="mb-8 text-center">
          <span className="flex items-center justify-center gap-2.5 font-medium text-[#800000] mb-3">
            <Image
              src="/images/icons/icon-08.svg"
              alt="icon"
              width={20}
              height={20}
            />
            Latest Insights
          </span>
          <h2 className="font-semibold text-2xl sm:text-3xl xl:text-4xl text-[#000000] tracking-wide">
            Rudraksha Wisdom
          </h2>
        </div>

        <div className="relative">
          <Swiper
            ref={sliderRef}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Autoplay]} // Add Autoplay module
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            className="pb-12" // Add padding-bottom for navigation buttons
          >
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-white mt-5 mb-5 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 flex flex-col h-[300px] sm:h-[340px]">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="block rounded-lg overflow-hidden relative h-36 sm:h-48"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      className="rounded-lg w-full h-full object-cover"
                      width={330}
                      height={210}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  <div className="mt-3 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
                        <span>{blog.date}</span>
                        <span className="block w-px h-3 sm:h-4 bg-amber-300"></span>
                        <span>{blog.views} Views</span>
                      </span>

                      <h2 className="font-medium text-base sm:text-xl text-gray-800 mt-2 mb-3 hover:text-amber-600 transition-colors text-center line-clamp-2">
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                      </h2>
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-xs sm:text-sm flex items-center justify-center gap-2 py-1 sm:py-2 text-amber-700 hover:text-amber-900 transition-colors"
                    >
                      Explore More
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 sm:-left-12 transform -translate-y-1/2 bg-amber-600  bg-white   p-2 sm:p-3 rounded-full shadow-md hover:bg-amber-700 transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 sm:-right-12 transform -translate-y-1/2 bg-amber-600 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-amber-700 transition-colors z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;