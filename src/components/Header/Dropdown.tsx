"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "@/types/Menu";

interface DropdownProps {
  menuItem: Menu;
  stickyMenu: boolean;
  mobile?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ menuItem, stickyMenu, mobile }) => {
  const [isOpen, setIsOpen] = useState(false); // Default false rakha hai

  return (
    <li
      className={`relative group ${mobile ? "w-full" : ""}`}
      onMouseEnter={() => !mobile && setIsOpen(true)} // Desktop hover pe open
      onMouseLeave={() => !mobile && setIsOpen(false)} // Desktop hover hatne pe close
    >
      <div
        className={`text-[#800000] hover:text-[#800000]/80 text-custom-sm font-medium flex items-center cursor-pointer ${
          stickyMenu ? "xl:py-4" : "xl:py-6"
        } ${mobile ? "py-2" : ""}`}
        onClick={() => mobile && setIsOpen(!isOpen)} // Mobile mein click pe toggle
      >
        <Link href={menuItem.path}>{menuItem.title}</Link>
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && ( // Sirf jab isOpen true ho tab submenu dikhe
        <ul
          className={`${
            mobile
              ? "pl-4"
              : "absolute left-0 top-full bg-[#FFFAF5] shadow-lg border border-[#800000]/20 rounded-md"
          } w-max`}
        >
          {menuItem.submenu?.map((subItem) => (
            <li key={subItem.id} className="w-full">
              <Link
                href={subItem.path}
                className="text-[#800000] hover:text-[#800000]/80 text-custom-sm font-medium block py-2 px-4 w-full"
                onClick={() => mobile && setIsOpen(false)} // Mobile mein click pe band ho
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;