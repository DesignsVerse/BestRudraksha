"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import CustomSelect from "../ShopWithSidebar/CustomSelect";
import shopData from "@/components/Shop/shopData";
const Gemstones= () => {
  const [productStyle, setProductStyle] = useState("grid");
  const itemsToShow = 3; // Set the number of items you want to show (change this to 5-10 as needed)

  const options = [
    { label: "Latest Products", value: "0" },
    { label: "Best Selling", value: "1" },
    { label: "Old Products", value: "2" },
  ];

  return (
    <>
      <Breadcrumb
        title={"Explore All Gemstones"}
        pages={["shop", "/", "shop without sidebar"]}
      />
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#FFFAF5]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            <div className="w-full">
              <div className="rounded-lg bg-white shadow-md px-4 py-3 mb-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <CustomSelect />
                    </div>
                    <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                      <span>{itemsToShow} Products</span>
                      <span className="mx-1">•</span>
                      <span>Sorted by: Newest</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setProductStyle("grid")}
                      aria-label="Grid view"
                      className={`p-2 rounded-md transition-colors duration-200 ${
                        productStyle === "grid" 
                          ? "bg-blue-100 text-blue-600" 
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {/* Grid SVG remains same */}
                      <svg className="w-5 h-5" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG paths remain same */}
                      </svg>
                    </button>
                    <button
                      onClick={() => setProductStyle("list")}
                      aria-label="List view"
                      className={`p-2 rounded-md transition-colors duration-200 ${
                        productStyle === "list" 
                          ? "bg-blue-100 text-blue-600" 
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {/* List SVG remains same */}
                      <svg className="w-5 h-5" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG paths remain same */}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Modified Products Display */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
              >
                {shopData
                  .slice(2, itemsToShow) // Show only first 'itemsToShow' items
                  .map((item, key) =>
                    productStyle === "grid" ? (
                      <SingleGridItem item={item} key={key} />
                    ) : (
                      <SingleListItem item={item} key={key} />
                    )
                  )}
              </div>

              {/* Removed pagination since we're showing limited items */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gemstones;