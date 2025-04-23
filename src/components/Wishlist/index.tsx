"use client";
import React from "react";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import Breadcrumb from "../Common/Breadcrumb";
import SingleItem from "./SingleItem";
import Link from "next/link";
import Image from "next/image";
import { addItemToCart } from "@/redux/features/cart-slice";
import { removeItemFromWishlist } from "@/redux/features/wishlist-slice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />
      <section className="overflow-hidden py-10 md:py-20 bg-[#FFFAF5]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
            <h2 className="font-medium text-dark text-xl md:text-2xl">Your Wishlist</h2>
          </div>

          <div className="bg-white rounded-[10px] shadow-1">
            {wishlistItems.length === 0 ? (
              <div className="py-10 text-center text-dark-2">
                <p className="text-base md:text-lg">Your wishlist is empty.</p>
                <Link
                  href="/shop"
                  className="mt-2 inline-block text-blue hover:underline text-sm md:text-base"
                >
                  Browse products
                </Link>
              </div>
            ) : (
              <div className="w-full">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
  <div className="min-w-[1170px]">
    <div className="flex items-center py-5.5 px-6 md:px-10">
      <div className="min-w-[83px]"></div>
      <div className="min-w-[440px]">
        <p className="text-dark">Product</p>
      </div>
      <div className="min-w-[205px]">
        <p className="text-dark">Unit Price</p>
      </div>
      <div className="min-w-[265px]">
        <p className="text-dark">Stock Status</p>
      </div>
      <div className="min-w-[90px]">
        <p className="text-dark text-right">Action</p>
      </div>
    </div>

    {wishlistItems.map((item) => (
      <SingleItem item={item} key={item.id} />
    ))}
  </div>
</div>

                {/* Mobile List View */}
                <div className="md:hidden">
                  {wishlistItems.map((item) => (
                    <MobileSingleItem item={item} key={item.id} />
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

// Mobile-specific component
const MobileSingleItem = ({ item }: { item: WishListItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  const regularSize = item.sizes?.[0] || {
    price: item.price,
    discountedPrice: item.discountedPrice,
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item.id));
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: item.id,
        title: item.title,
        slug: item.slug,
        price: regularSize.price,
        discountedPrice: regularSize.discountedPrice || regularSize.price,
        quantity: 1,
        imgs: item.imgs,
      })
    );
  };

  return (
    <div className="border-b border-gray-3 p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex-shrink-0 w-16 h-16 bg-gray-2 rounded-[5px] flex items-center justify-center">
            <Image
              src={item.imgs?.thumbnails?.[0] || "/images/placeholder.png"}
              alt={item.title}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-dark line-clamp-2">
              <Link href={`/shop/${item.slug}`}>{item.title}</Link>
            </h3>
            <div className="mt-1">
              <span className="text-sm font-medium text-dark">
                ₹{regularSize.price.toLocaleString("en-IN")}
              </span>
              {regularSize.discountedPrice &&
                regularSize.discountedPrice !== regularSize.price && (
                  <span className="text-xs text-dark-4 line-through ml-1">
                    ₹{regularSize.discountedPrice.toLocaleString("en-IN")}
                  </span>
                )}
            </div>
          </div>
        </div>
        <button
          onClick={handleRemoveFromWishlist}
          aria-label="Remove from wishlist"
          className="text-red p-1"
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.19509 8.22222C8.92661 7.95374 8.49131 7.95374 8.22282 8.22222C7.95433 8.49071 7.95433 8.92601 8.22282 9.1945L10.0284 11L8.22284 12.8056C7.95435 13.074 7.95435 13.5093 8.22284 13.7778C8.49133 14.0463 8.92663 14.0463 9.19511 13.7778L11.0006 11.9723L12.8061 13.7778C13.0746 14.0463 13.5099 14.0463 13.7784 13.7778C14.0469 13.5093 14.0469 13.074 13.7784 12.8055L11.9729 11L13.7784 9.19451C14.0469 8.92603 14.0469 8.49073 13.7784 8.22224C13.5099 7.95376 13.0746 7.95376 12.8062 8.22224L11.0006 10.0278L9.19509 8.22222Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1.5">
          {item.status === "available" ? (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                  fill="#22AD5C"
                />
                <path
                  d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                  fill="#22AD5C"
                />
              </svg>
              <span className="text-xs text-green">In Stock</span>
            </>
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99935 14.7917C10.3445 14.7917 10.6243 14.5119 10.6243 14.1667V9.16669C10.6243 8.82151 10.3445 8.54169 9.99935 8.54169C9.65417 8.54169 9.37435 8.82151 9.37435 9.16669V14.1667C9.37435 14.5119 9.65417 14.7917 9.99935 14.7917Z"
                  fill="#F23030"
                />
                <path
                  d="M9.99935 5.83335C10.4596 5.83335 10.8327 6.20645 10.8327 6.66669C10.8327 7.12692 10.4596 7.50002 9.99935 7.50002C9.53911 7.50002 9.16602 7.12692 9.16602 6.66669C9.16602 6.20645 9.53911 5.83335 9.99935 5.83335Z"
                  fill="#F23030"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.04102 10C1.04102 5.05247 5.0518 1.04169 9.99935 1.04169C14.9469 1.04169 18.9577 5.05247 18.9577 10C18.9577 14.9476 14.9469 18.9584 9.99935 18.9584C5.0518 18.9584 1.04102 14.9476 1.04102 10ZM9.99935 2.29169C5.74215 2.29169 2.29102 5.74283 2.29102 10C2.29102 14.2572 5.74215 17.7084 9.99935 17.7084C14.2565 17.7084 17.7077 14.2572 17.7077 10C17.7077 5.74283 14.2565 2.29169 9.99935 2.29169Z"
                  fill="#F23030"
                />
              </svg>
              <span className="text-xs text-red">Out of Stock</span>
            </>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={item.status !== "available"}
          className="text-xs bg-blue text-white py-1.5 px-4 rounded-md disabled:bg-gray-4 disabled:text-dark-4 disabled:cursor-not-allowed"
          aria-label="Add to cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Wishlist;