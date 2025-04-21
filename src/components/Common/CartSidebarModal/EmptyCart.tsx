import React from "react";
import Link from "next/link";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  const { closeCartModal } = useCartModalContext();

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 sm:p-8 text-center">
      <div className="mb-6 p-4 bg-gray-100 rounded-full animate-pulse">
        <FaShoppingBag className="w-12 h-12 text-gray-400" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Spiritual Cart Awaits</h3>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">
        Your journey with sacred rudraksh begins here. Explore our divine collection to find the perfect beads for your spiritual practice.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
        <Link
          href="/shop-with-sidebar"
          onClick={closeCartModal}
          className="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#600000] text-white py-3 px-6 rounded-md transition-colors duration-200 font-medium"
        >
          Browse Rudraksh Collection
          <FaArrowRight className="w-4 h-4" />
        </Link>
        
        <button
          onClick={closeCartModal}
          className="text-sm text-gray-600 hover:text-[#800000] transition-colors duration-200 mt-2 sm:mt-0"
        >
          Close Window
        </button>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 w-full max-w-xs">
        <p className="text-sm text-gray-500 mb-2">Need guidance choosing?</p>
        <Link 
          href="/contact" 
          onClick={closeCartModal}
          className="text-[#800000] hover:underline font-medium text-sm"
        >
          Contact our spiritual advisors
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;