import { titleFont } from "@/config/fonts";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="px-5 mx-5 text-center">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="text-xl font-semibold">
          Whoops! Sorry, but this page does not exists
        </p>
        <p className="font-light">
          <span>You can go back to our </span>
          <Link href="/" className="font-normal transition-all hover:underline">
            Home Page
          </Link>
        </p>
      </div>
      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
