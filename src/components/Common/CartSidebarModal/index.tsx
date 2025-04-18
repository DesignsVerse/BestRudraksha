"use client";
import React, { useEffect } from "react";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import { removeItemFromCart, selectTotalPrice,addItemToCart } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";
import Link from "next/link";
import EmptyCart from "./EmptyCart";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CartSidebarModal = () => {
  const { isCartModalOpen, closeCartModal } = useCartModalContext();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const items = JSON.parse(savedCart);
      items.forEach((item) => {
        if (!cartItems.find((i) => i.id === item.id)) {
          dispatch(addItemToCart(item));
        }
      });
    }
  }, []);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closeCartModal();
      }
    }

    if (isCartModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isCartModalOpen, closeCartModal]);



  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity z-[998] ${
          isCartModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeCartModal}
      />
      
      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[999] transition-transform duration-300 ${
          isCartModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-[#FFFAF5] shadow-xl modal-content">
          {/* Header */}
          <div className="sticky top-0 bg-[#FFFAF5] z-10 flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Your Sacred Cart</h2>
            <button
              onClick={closeCartModal}
              aria-label="Close cart"
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-6">
              {cartItems.length > 0 ? (
                cartItems.map((item, key) => (
                  <SingleItem
                    key={key}
                    item={item}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="sticky bottom-0 bg-[#FFFAF5] border-t border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-lg font-medium text-gray-900">Subtotal:</p>
                <p className="text-xl font-bold text-[#800000]">₹{totalPrice.toLocaleString()}</p>              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  onClick={closeCartModal}
                  href="/cart"
                  className="flex justify-center items-center px-6 py-3 rounded-md font-medium text-white bg-[#800000] hover:bg-[#600000] transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  onClick={closeCartModal}
                  href="/checkout"
                  className="flex justify-center items-center px-6 py-3 rounded-md font-medium text-white bg-[#000000] hover:bg-gray-900 transition-colors"
                >
                  Checkout
                </Link>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={closeCartModal}
                  className="text-sm font-medium text-[#800000] hover:underline transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebarModal;