import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import RashiRudraksha from "@/components/Shop-Filter/RashiRudraksha";
import Mala from "@/components/Shop-Filter/mala-yantra";

export const metadata: Metadata = {
  title: "Mala and yantra",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const Malaandyantra= () => {
  return (
    <main>
        <Mala/>
    </main>
  );
};

export default Malaandyantra;
