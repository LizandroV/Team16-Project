"use client";

import { titleFont } from "@/config/fonts";
import { useUiStore } from "@/store";
import Link from "next/link";
import React from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  return (
    <nav className="flex items-center justify-between w-full px-5">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Handcrafted
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
          href="/category/men"
        >
          Men
        </Link>
        <Link
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
          href="/category/women"
        >
          Woman
        </Link>
        <Link
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
          href="/category/kid"
        >
          Kids
        </Link>
      </div>

      {/* Search Cart Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5"></IoSearchOutline>
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute px-1 text-xs font-bold text-white bg-blue-700 rounded-full -top-2 -right-2">
              3
            </span>
            <IoCartOutline className="w-5 h-5"></IoCartOutline>
          </div>
        </Link>
        <button
          onClick={openSideMenu}
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
