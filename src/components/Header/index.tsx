"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { menuData } from "./menuData";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import Image from "next/image";
import { Menu } from "@/types/Menu";
import shopData from "@/components/Shop/shopData";

const Header: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);
  const [stickyMenu, setStickyMenu] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { openCartModal } = useCartModalContext();
  const product = useAppSelector((state) => state.cartReducer.items);
  const wishlist = useAppSelector((state) => state.wishlistReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleOpenCartModal = (): void => openCartModal();
  const handleStickyMenu = (): void => {
    setStickyMenu(window.scrollY >= 80);
  };

  const handleScroll = (): void => {
    if (navigationOpen) setNavigationOpen(false);
    if (searchOpen) setSearchOpen(false);
    handleStickyMenu();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationOpen, searchOpen]);

  // Filter search results
  const searchResults = shopData
    ? shopData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Icons (unchanged)
  const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "text-black hover:text-[#800000] transition-colors duration-200"}
    >
      <path
        d="M21 21L15 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="10"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const HeartIcon: React.FC = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black hover:text-[#800000] transition-colors duration-200"
    >
      <path
        d="M20.84 4.61C20.3291 4.09904 19.7226 3.69347 19.0492 3.41325C18.3759 3.13303 17.6492 2.98312 16.91 2.973C15.14 2.973 13.54 3.893 12.73 5.293C11.92 3.893 10.32 2.973 8.55 2.973C7.81076 2.98312 7.08408 3.13303 6.41075 3.41325C5.73742 3.69347 5.13092 4.09904 4.62 4.61C1.86 7.37 2.27 11.91 6.55 15.99L12.73 22.17L18.91 15.99C23.19 11.91 23.6 7.37 20.84 4.61Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const UserIcon: React.FC = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black hover:text-[#800000] transition-colors duration-200"
    >
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CartIcon: React.FC = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black hover:text-[#800000] transition-colors duration-200"
    >
      <path
        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CloseIcon: React.FC = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#800000]"
    >
      <path
        d="M15 5L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L15 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const handleMenuItemClick = (): void => {
    setNavigationOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 bg-[#FFFAF5] transition-all ease-in-out duration-300 ${
        stickyMenu && "shadow-lg border-b border-[#800000]/20"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-7.5 xl:px-0 relative">
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
              className="block mr-4 z-50"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              {navigationOpen ? (
                <CloseIcon />
              ) : (
                <svg
                  className="fill-current text-[#800000]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-12 w-40">
                <Image
                  src="/images/logo/rudraksha-logo-1.png"
                  alt="Best Rudraksha Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden xl:flex flex-grow justify-center items-center">
            <nav>
              <ul className="flex items-center gap-8">
                {menuData.map((menuItem: Menu) =>
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
                        href={menuItem.path || "#"}
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
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center"
            >
              <SearchIcon />
            </button>

            <Link href="/wishlist" className="flex items-center relative">
              <HeartIcon />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#800000] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              href="/signin"
              className="hidden md:flex items-center relative"
            >
              <UserIcon />
            </Link>

            <button
              onClick={handleOpenCartModal}
              className="flex items-center relative"
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
            className={`fixed top-0 left-0 w-1/2 h-full bg-[#FFFAF5] xl:hidden transform transition-transform duration-300 ease-in-out shadow-lg ${
              navigationOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="pt-20 px-5 h-full overflow-y-auto">
              <ul className="flex flex-col gap-4">
                {menuData.map((menuItem: Menu) =>
                  menuItem.submenu ? (
                    <Dropdown
                      key={menuItem.id}
                      menuItem={menuItem}
                      stickyMenu={stickyMenu}
                      mobile={true}
                      onItemClick={handleMenuItemClick}
                    />
                  ) : (
                    <li key={menuItem.id}>
                      <Link
                        href={menuItem.path || "#"}
                        className="text-[#800000] text-base font-medium hover:text-[#800000]/80 block py-2"
                        onClick={handleMenuItemClick}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* Updated Search Bar */}
          {searchOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20">
              <div className="w-full max-w-[1160px] mx-auto px-4 sm:px-7.5 xl:px-0 bg-[#FFFAF5] shadow-lg border border-[#800000]/20 rounded-md">
                <div className="relative py-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full p-2 pl-10 border border-[#800000]/30 rounded-md focus:outline-none focus:border-[#800000] text-[#800000]"
                    autoFocus
                  />
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#800000]" />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#800000] hover:text-[#800000]/70"
                  >
                    <CloseIcon />
                  </button>
                </div>
                {searchQuery && (
                  <div className="max-h-[70vh] overflow-y-auto px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {searchResults.length > 0 ? (
                      searchResults.map((item) => {
                        // Use the first size (Regular) for pricing
                        const regularSize = item.sizes?.[0] || {
                          price: 0,
                          discountedPrice: undefined,
                        };
                        return (
                          <Link
                            key={item.id}
                            href={`/shop/${item.slug}`}
                            className="block p-4 border border-[#800000]/20 rounded-md hover:bg-[#800000]/10 transition-colors"
                            onClick={() => setSearchOpen(false)}
                          >
                            <div className="flex items-center gap-4">
                              <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                  src={item.imgs?.thumbnails?.[0] || "/images/placeholder.png"}
                                  alt={item.title}
                                  fill
                                  style={{ objectFit: "contain" }}
                                />
                              </div>
                              <div>
                                <h3 className="text-[#800000] font-medium text-sm">
                                  {item.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-[#800000] font-semibold">
                                    ₹{regularSize.price.toLocaleString("en-IN")}
                                  </span>
                                  {regularSize.discountedPrice &&
                                    regularSize.discountedPrice !== regularSize.price && (
                                      <span className="text-[#800000]/50 line-through text-xs">
                                        ₹{regularSize.discountedPrice.toLocaleString("en-IN")}
                                      </span>
                                    )}
                                </div>
                                <div className="text-[#800000]/70 text-xs mt-1">
                                  {item.reviews || 0} reviews
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })
                    ) : (
                      <div className="col-span-full py-4 text-center text-[#800000]/70">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;