"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HeroCarousel = () => {
  // Image sources for desktop and mobile
  const desktopSlides = [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.png",
  ];
  const mobileSlides = [
    "/images/hero/mobile-hero-1.png",
    "/images/hero/mobile-hero-2.png",
    "/images/hero/mobile-hero-3.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile view for screens < 768px
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % desktopSlides.length);
    }, 5000); // Change slide every 2.5 seconds

    return () => clearInterval(interval);
  }, [desktopSlides.length]);

  // Scroll to active slide
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
    }
  }, [activeIndex, isMobile]); // Added isMobile to handle resize

  // Handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Select slides based on device
  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <div
      className={`hero-carousel w-full ${
        isMobile ? "mt-4 h-[500px]" : "h-[500px]"
      } relative overflow-hidden`}
    >
      <style jsx>{`
        .carousel-inner {
          display: flex;
          height: 100%;
          transition: transform 0.5s ease;
        }
        .carousel-slide {
          flex: 0 0 100%;
          height: 100%;
        }
        .pagination {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          
          opacity: 0.7;
          cursor: pointer;
        }
        .dot.active {
          opacity: 1;
          background: #800000;

        }
        @media (max-width: 767px) {
          .carousel-slide img {
            object-fit: cover; /* Ensure mobile images fit properly */
          }
        }
      `}</style>
      <div className="carousel-inner" ref={carouselRef}>
        {slides.map((src, index) => (
          <div key={index} className="carousel-slide">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`headphone-${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes={isMobile ? "100vw" : "100vw"}
                onError={() => console.error(`Failed to load image ${src}`)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;