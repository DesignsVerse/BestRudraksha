import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogItem from "../Blog/BlogItem";
import blogData from "../../data/blogData.json"; // Import JSON file
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import Categories from "../Blog/Categories";
import shopData from "@/components/Shop/shopData";

const BlogGridWithSidebar = () => {
  const categories = [
    { name: "Desktop", products: 10 },
    { name: "Laptop", products: 12 },
    { name: "Monitor", products: 30 },
    { name: "UPS", products: 23 },
    { name: "Phone", products: 10 },
    { name: "Watch", products: 13 },
  ];

  return (
    <>
      <Breadcrumb title={"Blog Grid Sidebar"} pages={["blog grid sidebar"]} />

      <section className="overflow-hidden py-20 bg-[#FFFAF5]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5">
            {/* Blog Grid */}
            <div className="lg:max-w-[770px] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-7.5">
                {blogData.map((blog) => (
                  <BlogItem blog={blog} key={blog.id} />
                ))}
              </div>

              {/* Blog Pagination */}
              <div className="flex justify-center mt-15">
                <div className="bg-white shadow-1 rounded-md p-2">
                  <ul className="flex items-center">
                    <li>
                      <button
                        disabled
                        className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] disabled:text-gray-4"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-blue text-white hover:text-white hover:bg-blue"
                      >
                        1
                      </a>
                    </li>
                    {/* Add more pagination links dynamically if needed */}
                  </ul>
                </div>
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="lg:max-w-[370px] w-full">
              <SearchForm />
              <LatestPosts blogs={blogData} />
              <LatestProducts products={shopData} />
              <Categories categories={categories} />
              <div className="shadow-1 bg-white rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
                  <h2 className="font-medium text-lg text-dark">Tags</h2>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-3.5">
                    {blogData
                      .flatMap((blog) => blog.tags)
                      .filter((tag, index, self) => self.indexOf(tag) === index)
                      .map((tag) => (
                        <a
                          key={tag}
                          className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                          href="#"
                        >
                          {tag}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridWithSidebar;