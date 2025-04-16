import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import Gemstones from "@/components/Shop-Filter/Gemstones";

export const metadata: Metadata = {
  title: "Gemstones",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const filter = () => {
  return (
    <main>
        <Gemstones/>
      {/* <ShopDetails /> */}
    </main>
  );
};

export default filter;
