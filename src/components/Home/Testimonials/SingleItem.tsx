import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="shadow-testimonial bg-white rounded-[10px] p-6 w-full">
      {/* Author image - keeping original path */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#800000]">
        <Image
          src={testimonial.authorImg}  // Keeping original author image path
          alt={testimonial.authorName}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 5-star rating - keeping original star icon path */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/images/icons/icon-star.svg"  // Keeping original star icon path
            alt="star icon"
            width={16}
            height={16}
          />
        ))}
      </div>

      {/* Name and chat icon */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h3 className="font-medium text-dark text-lg">
          {testimonial.authorName}
        </h3>
        <Image
          src="/images/icons/icon-07.svg"  // Using your existing icon path
          alt="chat icon"
          width={20}
          height={20}
        />
      </div>

      {/* Review text */}
      <p className="text-dark-2 mb-4 text-center px-2">
        "{testimonial.review}"
      </p>

      {/* Author role */}
      <p className="text-custom-sm text-center text-gray-500">
        {testimonial.authorRole}
      </p>
    </div>
  );
};

export default SingleItem;