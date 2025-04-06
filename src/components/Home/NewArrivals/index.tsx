"use client";
import React from "react";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

const NewArrival = () => {
  return (
    <section className="overflow-hidden py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Title - Centered with Rudraksha Theme */}
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <span className="flex items-center gap-2.5 font-medium text-amber-700 mb-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11826 15.4622C4.11794 16.6668 5.97853 16.6668 9.69971 16.6668H10.3007C14.0219 16.6668 15.8825 16.6668 16.8821 15.4622M3.11826 15.4622C2.11857 14.2577 2.46146 12.429 3.14723 8.77153C3.63491 6.17055 3.87875 4.87006 4.8045 4.10175M3.11826 15.4622C3.11826 15.4622 3.11826 15.4622 3.11826 15.4622ZM16.8821 15.4622C17.8818 14.2577 17.5389 12.429 16.8532 8.77153C16.3655 6.17055 16.1216 4.87006 15.1959 4.10175M16.8821 15.4622C16.8821 15.4622 16.8821 15.4622 16.8821 15.4622ZM15.1959 4.10175C14.2701 3.33345 12.947 3.33345 10.3007 3.33345H9.69971C7.0534 3.33345 5.73025 3.33345 4.8045 4.10175M15.1959 4.10175C15.1959 4.10175 15.1959 4.10175 15.1959 4.10175ZM4.8045 4.10175C4.8045 4.10175 4.8045 4.10175 4.8045 4.10175Z"
                stroke="#800000"
                strokeWidth="1.5"
              />
              <path
                d="M7.64258 6.66678C7.98578 7.63778 8.91181 8.33345 10.0003 8.33345C11.0888 8.33345 12.0149 7.63778 12.3581 6.66678"
                stroke="#800000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            This Week’s
          </span>
          <h2 className="font-semibold text-2xl xl:text-4xl text-gray-800 tracking-wide">
            New Arrivals
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {shopData.slice(0, 4).map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>

        {/* View All Button - Centered */}
        <div className="mt-10 text-center">
          <Link
            href="/shop-with-sidebar"
            className="inline-flex font-medium text-sm py-3 px-8 rounded-full bg-amber-600 text-white border border-amber-600 ease-out duration-300 hover:bg-amber-700 hover:border-amber-700"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;