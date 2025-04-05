import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import Mukhi from "@/components/product-filter/mukhi";

export const metadata: Metadata = {
  title: "blog",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const filter = () => {
  return (
    <main>
        <Mukhi/>
      {/* <ShopDetails /> */}
    </main>
  );
};

export default filter;
