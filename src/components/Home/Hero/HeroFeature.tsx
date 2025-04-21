import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Guarantee of Purity",
    description: "100% Natural & Certified",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Ethically Sourced",
    description: "Responsibly harvested",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Free Shipping",
    description: "On all orders over ₹1k",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Support",
    description: "Dedicated customer care",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between md:gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-3 p-2" key={key}>
            <Image 
              src={item.img} 
              alt={item.title} 
              width={40} 
              height={40}
              className="shrink-0"
            />
            <div>
              <h3 className="font-medium text-sm md:text-lg text-dark">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;