import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import SpecialRudraksha from "@/components/Shop-Filter/SpecialRudraksha";

export const metadata: Metadata = {
  title: "Special Rudraksha ",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const Special= () => {
  return (
    <main>
        <SpecialRudraksha/>
    </main>
  );
};

export default Special;
