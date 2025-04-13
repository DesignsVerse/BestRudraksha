import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import shopData from "@/components/Shop/shopData";

const BestSeller = () => {
  return (
    <section className="bg-[#FFF7F0] py-12">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <Image
              src="/images/icons/icon-07.svg"
              alt="icon"
              width={20}
              height={20}
            />
            <div>
              <span className="text-lg font-semibold text-gray-800">This Month</span>
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {shopData.slice(1, 7).map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;