"use client";
import data from "./categoryData";
import SingleItem from "./SingleItem";

const Categories = () => {
  return (
    <section className="overflow-hidden pt-[70px] bg-[#FFFAF5]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-[60px] border-b border-gray-300">
        <div className="categories-container">
          {/* Section title */}
          <div className="mb-10 text-center">
          <span className="flex items-center justify-center gap-2.5 font-medium text-[#800000]">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 3V9M16 3V9M8 15V21M16 15V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  Categories
</span>
            <h2 className="font-semibold text-xl xl:text-[32px] text-[#000000]">
              Browse by Category
            </h2>
          </div>

          {/* Centered Grid for all screens */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[900px]">
              {data.map((item) => (
                <SingleItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;