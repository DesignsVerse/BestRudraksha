"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SearchForm from "@/components/Blog/SearchForm";
import LatestPosts from "@/components/Blog/LatestPosts";
import LatestProducts from "@/components/Blog/LatestProducts";
import Image from "next/image";
import shopData from "@/components/Shop/shopData";
import blogData from "@/data/blogData.json";
import { useParams } from "next/navigation";

const BlogDetailsWithSidebar = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeSection, setActiveSection] = useState<string>("");

  const blog = blogData.find((b) => b.slug === slug);

  if (!slug) {
    return <p className="text-center text-red-500">No slug found in URL</p>;
  }

  if (!blog) {
    return <p className="text-center text-red-500">No blog found for slug: {slug}</p>;
  }

  // Extract headings for Table of Contents
  const toc = blog.content
    .map((paragraph, index) => {
      const parts = paragraph.split("  \n");
      return index > 0 && parts[0] ? { id: `section-${index}`, title: parts[0] } : null;
    })
    .filter(Boolean);

  // Render content dynamically
  const renderContent = (paragraph: string, index: number) => {
    const parts = paragraph.split("  \n");
    const hasHeading = parts.length > 1 || index === 0;

    if (index === 0 && parts.length === 1) {
      return (
        <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
          {paragraph}
        </p>
      );
    } else if (hasHeading) {
      const heading = parts[0];
      const description = parts[1] || "";
      return (
        <div key={index} id={`section-${index}`} className="mb-10 scroll-mt-20">
          <h3 className="text-2xl font-bold text-dark mb-4 tracking-tight">{heading}</h3>
          {description && (
            <p className="text-gray-600 leading-relaxed text-base">{description}</p>
          )}
        </div>
      );
    } else {
      return (
        <p key={index} className="mb-6 text-gray-600 leading-relaxed text-base">
          {paragraph}
        </p>
      );
    }
  };

  return (
    <>
      <Breadcrumb title={blog.title} pages={["blog details sidebar"]} />
      <section className="overflow-hidden py-0 bg-[#FFFAF5]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
            {/* Blog Details */}
            <div className="lg:max-w-[750px] w-full">
              <div className="rounded-[10px] overflow-hidden mb-10">
                <Image
                  className="rounded-[10px] w-full object-cover"
                  src={blog.img}
                  alt="details"
                  width={750}
                  height={477}
                  priority
                />
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="mb-10 p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-dark mb-4">Table of Contents</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`text-gray-600 hover:text-blue transition-colors duration-200 ${
                            activeSection === item.id ? "text-blue font-semibold" : ""
                          }`}
                          onClick={() => setActiveSection(item.id)}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                  <a href="#" className="hover:text-blue transition-colors duration-200">
                    {blog.date}
                  </a>
                  <span className="block w-px h-4 bg-gray-4"></span>
                  <a href="#" className="hover:text-blue transition-colors duration-200">
                    {blog.views} Views
                  </a>
                </span>

                <h2 className="font-bold text-dark text-2xl lg:text-3xl xl:text-4xl mb-8 tracking-tight">
                  {blog.title}
                </h2>

                {blog.content.map((paragraph, index) => renderContent(paragraph, index))}

                <div className="rounded-xl bg-white pt-7.5 pb-6 px-4 sm:px-7.5 my-10 shadow-sm">
                  <p className="italic text-dark text-center text-lg">"{blog.quote}"</p>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-3 mt-5.5"
                  >
                    <div className="flex w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={blog.author.avatar}
                        alt="user"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h4 className="text-dark text-base font-semibold">{blog.author.name}</h4>
                      <p className="text-sm text-gray-600">{blog.author.role}</p>
                    </div>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-10 mt-10">
                  <div className="flex flex-wrap items-center gap-5">
                    <p className="font-medium text-gray-700">Popular Tags:</p>
                    <ul className="flex flex-wrap items-center gap-3.5">
                      {blog.tags.map((tag) => (
                        <li key={tag}>
                          <a
                            className="inline-flex text-gray-700 border border-gray-3 bg-white py-2 px-4 rounded-md transition-all duration-200 hover:bg-blue hover:text-white hover:border-blue"
                            href="#"
                          >
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#BD081C] transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_190_5507)">
                          <path
                            d="M0.47827 8.52675C0.531395 10.9971 1.67359 13.4674 3.61264 14.9549C4.22357 15.4064 4.88764 15.6721 5.57826 15.9642C5.28607 14.0783 6.00326 12.1924 6.4017 10.333C6.45482 10.1471 6.48139 9.93456 6.48139 9.72206C6.48139 9.42987 6.37514 9.13769 6.29545 8.8455C6.21576 8.36737 6.26889 7.86269 6.48139 7.41112C6.77357 6.80019 7.4642 6.32206 8.07514 6.56112C8.63295 6.77362 8.84545 7.51737 8.7392 8.10175C8.63295 8.71269 8.3142 9.24394 8.15482 9.82831C7.96889 10.4127 7.99545 11.1299 8.42045 11.5283C8.81889 11.9002 9.45639 11.9267 9.96107 11.7142C10.7048 11.3955 11.1829 10.6517 11.4751 9.908C12.0064 8.52675 11.9001 6.77362 10.8111 5.76425C10.3595 5.31269 9.72201 5.0205 9.03139 4.91425C7.86264 4.72831 6.58764 5.07362 5.7642 5.92362C4.94076 6.77362 4.56889 8.07519 4.9142 9.19081C5.02045 9.56269 5.23295 9.93456 5.31264 10.3064C5.39232 10.6783 5.36576 11.1564 5.10014 11.4221C5.07358 11.4486 5.04701 11.4752 4.99389 11.5017C4.94076 11.5283 4.86107 11.4752 4.80795 11.4486C4.30326 11.1299 3.90482 10.6252 3.66576 10.0939C2.92201 8.47362 3.29389 6.45487 4.46264 5.12675C5.63139 3.79862 7.51732 3.16112 9.27045 3.40019C10.9173 3.61269 12.5376 4.5955 13.2283 6.10956C13.6533 7.01269 13.7329 8.04862 13.5736 9.03144C13.4142 10.0408 13.0158 10.9971 12.3517 11.7674C11.6876 12.5377 10.7314 13.0689 9.72201 13.1221C8.89857 13.1752 8.02201 12.883 7.59701 12.1924C7.33139 13.6267 6.8267 15.0346 6.08295 16.283C6.05639 16.3361 7.78295 16.708 7.94232 16.708C9.90795 16.8674 12.0064 16.0971 13.547 14.8752C17.797 11.5017 17.3454 5.04706 13.1486 1.85957C10.9704 0.186128 8.39389 -0.132622 5.84389 0.770504C5.07357 1.03613 4.35639 1.48769 3.69232 1.96582C2.62983 2.76269 1.77983 3.79862 1.22202 4.99394C0.664207 6.083 0.451707 7.30487 0.47827 8.52675Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_190_5507">
                            <rect width="17" height="17" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    {/* Add more social links as needed */}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="lg:max-w-[370px] w-full">
              <SearchForm />
              <LatestPosts blogs={blogData} />
              <LatestProducts products={shopData} />

              <div className="shadow-1 bg-white rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
                  <h2 className="font-medium text-lg text-dark">Tags</h2>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-3.5">
                    {blogData
                      .flatMap((b) => b.tags)
                      .filter((tag, index, self) => self.indexOf(tag) === index)
                      .map((tag) => (
                        <a
                          key={tag}
                          className="inline-flex text-gray-700 border border-gray-3 py-2 px-4 rounded-md transition-all duration-200 hover:bg-blue hover:text-white hover:border-blue"
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

export default BlogDetailsWithSidebar;