import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

export const metadata: Metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopWithoutSidebar/>
      {/* <ShopDetails /> */}
    </main>
  );
};

export default ShopDetailsPage;
