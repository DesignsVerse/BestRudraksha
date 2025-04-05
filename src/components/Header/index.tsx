"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { menuData } from "./menuData";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { openCartModal } = useCartModalContext();
  const product = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleOpenCartModal = () => openCartModal();
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Icons (unchanged)
  const SearchIcon = () => (
    <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 16.5L12.875 12.875M14.5 8.25C14.5 11.7018 11.7018 14.5 8.25 14.5C4.79822 14.5 2 11.7018 2 8.25C2 4.79822 4.79822 2 8.25 2C11.7018 2 14.5 4.79822 14.5 8.25Z" stroke="#800000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black hover:text-[#800000] transition-colors duration-200">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black hover:text-[#800000] transition-colors duration-200">
      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 bg-[#FFFAF5] transition-all ease-in-out duration-300 ${
        stickyMenu && "shadow-lg border-b border-[#800000]/20"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div
          className={`flex items-center justify-between ease-out duration-200 ${
            stickyMenu ? "py-4" : "py-6"
          }`}
        >
          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              id="Toggle"
              aria-label="Toggler"
              className="block mr-4"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <svg
                className="fill-current text-[#800000]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="filter brightness-75 text-2xl text-[#800000] contrast-125">
                Best Rudraksha
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden xl:flex flex-grow justify-center items-center">
            <nav>
              <ul className="flex items-center gap-8">
                {menuData.map((menuItem) =>
                  menuItem.submenu ? (
                    <Dropdown
                      key={menuItem.id}
                      menuItem={menuItem}
                      stickyMenu={stickyMenu}
                    />
                  ) : (
                    <li
                      key={menuItem.id}
                      className="group relative before:w-0 before:h-[3px] before:bg-[#800000] before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full"
                    >
                      <Link
                        href={menuItem.path}
                        className={`text-[#800000] hover:text-[#800000]/80 text-custom-sm font-medium flex ${
                          stickyMenu ? "xl:py-4" : "xl:py-6"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <Link href="/search" className="flex items-center">
              <SearchIcon />
            </Link>
            <Link href="/wishlist" className="flex items-center relative">
              <UserIcon />
              {product.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#800000] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {product.length}
                </span>
              )}
            </Link>
            <button
              onClick={handleOpenCartModal}
              className="flex items-center group relative"
            >
              <CartIcon />
              {product.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#800000] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {product.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`w-full absolute left-0 top-full xl:hidden ${
              navigationOpen
                ? "visible bg-[#FFFAF5] shadow-lg border border-[#800000]/20 h-auto max-h-[400px] overflow-y-auto rounded-b-md"
                : "invisible h-0"
            } transition-all duration-300 ease-in-out`}
          >
            <nav className="p-5">
              <ul className="flex flex-col gap-4">
                {menuData.map((menuItem) =>
                  menuItem.submenu ? (
                    <Dropdown
                      key={menuItem.id}
                      menuItem={menuItem}
                      stickyMenu={stickyMenu}
                      mobile
                    />
                  ) : (
                    <li key={menuItem.id} className="w-full">
                      <Link
                        href={menuItem.path}
                        className="text-[#800000] hover:text-[#800000]/80 text-custom-sm font-medium block py-2 w-full"
                        onClick={() => setNavigationOpen(false)}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;