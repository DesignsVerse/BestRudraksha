import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="shadow-testimonial bg-white rounded-[10px] p-6 w-full">
      {/* Author image - Standardized size and responsive */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#800000]">
        <Image
          src={testimonial.authorImg}
          alt={testimonial.authorName}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 5-star rating - Consistent star size */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/images/icons/icon-star.svg"
            alt="star icon"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        ))}
      </div>

      {/* Name and chat icon - Balanced layout */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h3 className="font-semibold text-dark text-lg leading-tight">
          {testimonial.authorName}
        </h3>
        <Image
          src="/images/icons/icon-07.svg"
          alt="chat icon"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      </div>

      {/* Review text - Improved readability */}
      <p className="text-dark-2 mb-4 text-center px-2 text-base leading-relaxed">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* Author role - Cleaner styling */}
      <p className="text-sm text-center text-gray-500 leading-tight">
        {testimonial.authorRole}
      </p>
    </div>
  );
};

export default SingleItem;