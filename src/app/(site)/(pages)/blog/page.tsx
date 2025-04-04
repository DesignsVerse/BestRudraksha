import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import BlogGridWithSidebar from "@/components/BlogGridWithSidebar";

export const metadata: Metadata = {
  title: "blog",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const Blog = () => {
  return (
    <main>
        <BlogGridWithSidebar/>
      {/* <ShopDetails /> */}
    </main>
  );
};

export default Blog;
