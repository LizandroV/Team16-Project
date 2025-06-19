"use client";
import React from "react";
import {
  IoCloseOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoTicketOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoShirtOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import Link from "next/link";
import { useUiStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);
  return (
    <div>
      {/* Background Black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-30"></div>
      )}
      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed top-0 left-0 z-10 w-screen h-screen fade-in backdrop-filter backdrop-blur-sm"
        ></div>
      )}
      {/* SideMenu */}
      <nav
        className={clsx(
          "fixed top-0 right-0 p-5 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute cursor-pointer top-5 right-5"
          onClick={() => closeMenu()}
        ></IoCloseOutline>

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline
            size={20}
            className="absolute top-2 left-2"
          ></IoSearchOutline>
          <input
            type="text"
            placeholder="Buscar"
            className="w-full py-1 pl-10 pr-10 text-xl border-b-2 border-gray-200 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        <Link
          href="/"
          className="flex items-center p-2 mt-10 transition-all rounded hover:bg-gray-100"
        >
          <IoPersonOutline size={30}></IoPersonOutline>
          <span className="ml-3 text-xl">Perfil</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2 mt-10 transition-all rounded hover:bg-gray-100"
        >
          <IoTicketOutline size={30}></IoTicketOutline>
          <span className="ml-3 text-xl">Orders</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2 mt-10 transition-all rounded hover:bg-gray-100"
        >
          <IoLogInOutline size={30}></IoLogInOutline>
          <span className="ml-3 text-xl">Log In</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2 mt-10 transition-all rounded hover:bg-gray-100"
        >
          <IoLogOutOutline size={30}></IoLogOutOutline>
          <span className="ml-3 text-xl">Log Out</span>
        </Link>

        {/* Line Separator */}
        <div className="w-full h-px my-10 bg-gray-200"></div>

        <Link
          href="/"
          className="flex items-center p-2 mt-10 transition-all rounded hover:bg-gray-100"
        >
          <IoShirtOutline size={30}></IoShirtOutline>
          <span className="ml-3 text-xl">Products</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2 mt-10 transition-all rounded hover:bg-gray-100"
        >
          <IoTicketOutline size={30}></IoTicketOutline>
          <span className="ml-3 text-xl">Orders</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2 mt-10 transition-all rounded hover:bg-gray-100"
        >
          <IoPeopleOutline size={30}></IoPeopleOutline>
          <span className="ml-3 text-xl">Users</span>
        </Link>
      </nav>
    </div>
  );
};
