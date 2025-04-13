"use client";
import React from "react";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import Breadcrumb from "../Common/Breadcrumb";
import SingleItem from "./SingleItem";
import Link from "next/link";

// Define WishListItem type for clarity (same as SingleItem.tsx)
type WishListItem = {
  id: number;
  title: string;
  slug: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  status: string;
  imgs: { thumbnails: string[]; previews: string[] };
  sizes?: { name: string; price: number; discountedPrice?: number }[];
};

export const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items) as WishListItem[];

  // Handle clear wishlist
 
  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />
      <section className="overflow-hidden py-20 bg-[#FFFAF5]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
            <h2 className="font-medium text-dark text-2xl">Your Wishlist</h2>
            
          </div>

          <div className="bg-white rounded-[10px] shadow-1">
            {wishlistItems.length === 0 ? (
              <div className="py-10 text-center text-dark-2">
                <p className="text-lg">Your wishlist is empty.</p>
                <Link
                  href="/shop"
                  className="mt-2 inline-block text-blue hover:underline"
                >
                  Browse products
                </Link>
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <div className="min-w-[1170px]">
                  {/* Table header */}
                  <div className="flex items-center py-5.5 px-10">
                    <div className="min-w-[83px]"></div>
                    <div className="min-w-[387px]">
                      <p className="text-dark">Product</p>
                    </div>
                    <div className="min-w-[205px]">
                      <p className="text-dark">Unit Price</p>
                    </div>
                    <div className="min-w-[265px]">
                      <p className="text-dark">Stock Status</p>
                    </div>
                    <div className="min-w-[150px]">
                      <p className="text-dark text-right">Action</p>
                    </div>
                  </div>

                  {/* Wishlist items */}
                  {wishlistItems.map((item, key) => (
                    <SingleItem item={item} key={item.id} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;