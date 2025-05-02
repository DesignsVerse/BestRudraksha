"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import FilterSortSelects from "../Shop/FilterSortSelects"; // Your FilterSortSelects
import shopData from "@/components/Shop/shopData";

const Mala: React.FC = () => {
  const [productStyle, setProductStyle] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<"normal" | "low-to-high" | "high-to-low">("normal");
  const itemsPerPage = 12;

  // Filter shopData to show only products with IDs 46 to 49
  const specialRudrakshaBase = shopData.filter((item) => item.id >= 46 && item.id <= 50);

  // Sort data based on sizes[0]?.price
  const sortedGemstoneProducts = [...specialRudrakshaBase].sort((a: any, b: any) => {
    if (sortOption === "normal") return 0;
  
    // Use discountedPrice if available, otherwise use price
    const priceA = a.sizes[0]?.discountedPrice !== undefined ? a.sizes[0].discountedPrice : a.sizes[0]?.price ?? 0;
    const priceB = b.sizes[0]?.discountedPrice !== undefined ? b.sizes[0].discountedPrice : b.sizes[0]?.price ?? 0;
  
    return sortOption === "low-to-high" ? priceA - priceB : priceB - priceA;
  });


  // Pagination logic
  const totalItems = specialRudrakshaBase.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = specialRudrakshaBase.slice(startIndex, startIndex + itemsPerPage);

  // Handle sort change
  const handleSortChange = (value: "normal" | "low-to-high" | "high-to-low") => {
    setSortOption(value);
    setCurrentPage(1); // Reset to first page on sort change
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Breadcrumb title={"Explore All Mala and Yantra"} pages={["Mala and Yantra"]} />
      <section className="overflow-hidden relative pb-20 bg-[#FFFAF5]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            <div className="w-full">
              <div className="rounded-lg bg-white shadow-md px-4 py-3 mb-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <FilterSortSelects onSortChange={handleSortChange} />
                    </div>
                    <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                      <span>{totalItems} Products</span>
                      <span className="mx-1">•</span>
                      <span>
                        Sorted by:{" "}
                        {sortOption === "normal"
                          ? "Default"
                          : sortOption === "low-to-high"
                          ? "Price: Low to High"
                          : "Price: High to Low"}
                      </span>
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
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.25 6.75C2.25 5.09315 3.59315 3.75 5.25 3.75H6.75C8.40685 3.75 9.75 5.09315 9.75 6.75V9.75C9.75 11.4069 8.40685 12.75 6.75 12.75H5.25C3.59315 12.75 2.25 11.4069 2.25 9.75V6.75Z" />
                        <path d="M2.25 6.75C2.25 5.09315 3.59315 3.75 5.25 3.75H6.75C8.40685 3.75 9.75 5.09315 9.75 6.75V9.75C9.75 11.4069 8.40685 12.75 6.75 12.75H5.25C3.59315 12.75 2.25 11.4069 2.25 9.75V6.75Z" />
                        <path d="M11.25 6.75C11.25 5.09315 12.5931 3.75 14.25 3.75H15.75C17.4069 3.75 18.75 5.09315 18.75 6.75V9.75C18.75 11.4069 17.4069 12.75 15.75 12.75H14.25C12.5931 12.75 11.25 11.4069 11.25 9.75V6.75Z" />
                        <path d="M11.25 6.75C11.25 5.09315 12.5931 3.75 14.25 3.75H15.75C17.4069 3.75 18.75 5.09315 18.75 6.75V9.75C18.75 11.4069 17.4069 12.75 15.75 12.75H14.25C12.5931 12.75 11.25 11.4069 11.25 9.75V6.75Z" />
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
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.25 4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H13.5C14.7426 2.25 15.75 3.25736 15.75 4.5C15.75 5.74264 14.7426 6.75 13.5 6.75H4.5C3.25736 6.75 2.25 5.74264 2.25 4.5Z" />
                        <path d="M2.25 9C2.25 7.75736 3.25736 6.75 4.5 6.75H13.5C14.7426 6.75 15.75 7.75736 15.75 9C15.75 10.2426 14.7426 11.25 13.5 11.25H4.5C3.25736 11.25 2.25 10.2426 2.25 9Z" />
                        <path d="M2.25 13.5C2.25 12.2574 3.25736 11.25 4.5 11.25H13.5C14.7426 11.25 15.75 12.2574 15.75 13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Display */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-7.5 sm:gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
              >
                {paginatedProducts.map((item, key) =>
                  productStyle === "grid" ? (
                    <SingleGridItem item={item} key={key} />
                  ) : (
                    <SingleListItem item={item} key={key} />
                  )
                )}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === 1
                          ? "bg-[#800000] text-white cursor-not-allowed"
                          : "bg-[#800000] text-white hover:bg-blue-200"
                      }`}
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === page
                            ? "bg-[#800000] text-white"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages
                          ? "bg-[#800000] text-white cursor-not-allowed"
                          : "bg-[#800000] text-white hover:bg-blue-200"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mala;