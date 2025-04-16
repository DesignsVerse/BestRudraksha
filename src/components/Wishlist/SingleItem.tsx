"use client";
import React from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeItemFromWishlist } from "@/redux/features/wishlist-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import Image from "next/image";

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

const SingleItem = ({ item }: { item: WishListItem }) => {
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
    <div className="flex items-center border-t border-gray-3 py-5 px-6 md:px-10">
      <div className="min-w-[83px] hidden md:block">
        <button
          onClick={handleRemoveFromWishlist}
          aria-label="Remove from wishlist"
          className="flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-2 border border-gray-3 ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red"
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.19509 8.22222C8.92661 7.95374 8.49131 7.95374 8.22282 8.22222C7.95433 8.49071 7.95433 8.92601 8.22282 9.1945L10.0284 11L8.22284 12.8056C7.95435 13.074 7.95435 13.5093 8.22284 13.7778C8.49133 14.0463 8.92663 14.0463 9.19511 13.7778L11.0006 11.9723L12.8061 13.7778C13.0746 14.0463 13.5099 14.0463 13.7784 13.7778C14.0469 13.5093 14.0469 13.074 13.7784 12.8055L11.9729 11L13.7784 9.19451C14.0469 8.92603 14.0469 8.49073 13.7784 8.22224C13.5099 7.95376 13.0746 7.95376 12.8062 8.22224L11.0006 10.0278L9.19509 8.22222Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.04102 10C1.04102 5.05247 5.0518 1.04169 9.99935 1.04169C14.9469 1.04169 18.9577 5.05247 18.9577 10C18.9577 14.9476 14.9469 18.9584 9.99935 18.9584C5.0518 18.9584 1.04102 14.9476 1.04102 10ZM9.99935 2.29169C5.74215 2.29169 2.29102 5.74283 2.29102 10C2.29102 14.2572 5.74215 17.7084 9.99935 17.7084C14.2565 17.7084 17.7077 14.2572 17.7077 10C17.7077 5.74283 14.2565 2.29169 9.99935 2.29169Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="min-w-[387px]">
        <div className="flex items-center justify-between gap-5">
          <div className="w-full flex items-center gap-3 md:gap-5.5">
            <div className="flex items-center justify-center rounded-[5px] bg-gray-2 max-w-[60px] md:max-w-[80px] w-full h-[60px] md:h-17.5">
              <Image
                src={item.imgs?.thumbnails?.[0] || "/images/placeholder.png"}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="text-sm md:text-base text-dark ease-out duration-200 hover:text-blue">
                <a href={`/shop/${item.slug}`}>{item.title}</a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[205px] hidden md:block">
        <p className="text-dark">
          ₹{regularSize.price.toLocaleString("en-IN")}
          {regularSize.discountedPrice &&
            regularSize.discountedPrice !== regularSize.price && (
              <span className="text-dark-4 line-through ml-2">
                ₹{regularSize.discountedPrice.toLocaleString("en-IN")}
              </span>
            )}
        </p>
      </div>

      <div className="min-w-[265px] hidden md:block">
        <div className="flex items-center gap-1.5">
          {item.status === "available" ? (
            <>
              <svg
                width="20"
                height="20"
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
              <span className="text-green">In Stock</span>
            </>
          ) : (
            <>
              <svg
                width="20"
                height="20"
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
              <span className="text-red">Out of Stock</span>
            </>
          )}
        </div>
      </div>

      <div className="min-w-[150px] flex justify-end">
        <button
          onClick={handleAddToCart}
          disabled={item.status !== "available"}
          className="inline-flex text-sm md:text-base text-dark hover:text-white bg-gray-1 border border-gray-3 py-2 md:py-2.5 px-4 md:px-6 rounded-md ease-out duration-200 hover:bg-blue hover:border-gray-3 disabled:bg-gray-4 disabled:text-dark-4 disabled:cursor-not-allowed"
          aria-label="Add to cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;