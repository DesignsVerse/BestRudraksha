import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import RashiRudraksha from "@/components/Shop-Filter/RashiRudraksha";

export const metadata: Metadata = {
  title: "Rashi Rudraksha",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const Rashi= () => {
  return (
    <main>
        <RashiRudraksha/>
    </main>
  );
};

export default Rashi;
