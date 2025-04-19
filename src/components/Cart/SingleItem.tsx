"use client";
import React from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "@/redux/features/cart-slice";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

type CartItem = {
  id: number;
  title: string;
  slug: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  imgs: { thumbnails: string[]; previews: string[] };
};

const SingleItem = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item.id));
    toast.success("Removed from cart!");
  };

  const handleIncreaseQuantity = () => {
    dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex items-center border-t border-gray-300 py-5 px-4 md:px-7.5">
        <div className="min-w-[250px] md:min-w-[400px] flex items-center">
          <div className="flex items-center gap-5 w-full">
            <div className="flex items-center justify-center rounded-[5px] bg-gray-100 max-w-[80px] w-full h-[80px]">
              <Image
                width={80}
                height={80}
                src={item.imgs?.thumbnails?.[0] || "/images/placeholder.png"}
                alt={item.title}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base text-dark hover:text-blue transition-colors duration-200">
                <Link href={`/shop/${item.slug}`}>{item.title}</Link>
              </h3>
            </div>
          </div>
        </div>

        <div className="min-w-[100px] md:min-w-[180px] flex items-center justify-center">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-dark text-base">
              ₹{item.discountedPrice.toLocaleString("en-IN")}
            </span>
            {item.discountedPrice !== item.price && (
              <span className="text-gray-500 line-through text-sm">
                ₹{item.price.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        <div className="min-w-[150px] md:min-w-[275px] flex items-center justify-center">
          <div className="flex items-center rounded-md border border-gray-300">
            <button
              onClick={handleDecreaseQuantity}
              aria-label="Decrease quantity"
              disabled={item.quantity <= 1}
              className="flex items-center justify-center w-11 h-11 hover:text-blue transition-colors duration-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33301 10.0001C3.33301 9.53984 3.7061 9.16675 4.16634 9.16675H15.833C16.2932 9.16675 16.6663 9.53984 16.6663 10.0001C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10.0001Z"
                  fill=""
                />
              </svg>
            </button>
            <span className="flex items-center justify-center w-16 h-11 border-x border-gray-300 text-base">
              {item.quantity}
            </span>
            <button
              onClick={handleIncreaseQuantity}
              aria-label="Increase quantity"
              className="flex items-center justify-center w-11 h-11 hover:text-blue transition-colors duration-200"
            >
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z"
                  fill=""
                />
                <path
                  d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-w-[100px] md:min-w-[200px] flex items-center justify-center">
          <p className="text-dark text-base">
            ₹{(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
          </p>
        </div>

        <div className="min-w-[50px] flex items-center justify-end">
          <button
            onClick={handleRemoveFromCart}
            aria-label="Remove from cart"
            className="flex items-center justify-center w-9 h-9 bg-gray-100 border border-gray-300 rounded-lg hover:bg-red-100 hover:border-red-400 hover:text-red-600 transition-colors duration-200"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
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
      </div>

      {/* Mobile View */}
      <div className="md:hidden border-t border-gray-300 p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-[5px] flex items-center justify-center">
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
              <div className="mt-1 flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm font-medium text-[#800000]">
                  ₹{item.discountedPrice.toLocaleString("en-IN")}
                </span>
                {item.discountedPrice !== item.price && (
                  <span className="text-xs text-gray-500 line-through">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={handleRemoveFromCart}
            aria-label="Remove from cart"
            className="text-red-600 p-1"
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

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecreaseQuantity}
              disabled={item.quantity <= 1}
              className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md disabled:opacity-50"
              aria-label="Decrease quantity"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33301 10.0001C3.33301 9.53984 3.7061 9.16675 4.16634 9.16675H15.833C16.2932 9.16675 16.6663 9.53984 16.6663 10.0001C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10.0001Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <span className="w-10 text-center text-sm">{item.quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md"
              aria-label="Increase quantity"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z"
                  fill="currentColor"
                />
                <path
                  d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-sm font-medium">
            ₹{(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;