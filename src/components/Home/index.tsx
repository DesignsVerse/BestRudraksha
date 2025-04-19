import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Rudraksha";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import Rudraksha from "./Rudraksha";
import Blog from "./Blog";
import Gemstone from "./Gemstone";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <Gemstone/>
      {/* <PromoBanner /> */}
      <BestSeller />
      <Rudraksha/>
      <Testimonials />
      <Blog/>
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
