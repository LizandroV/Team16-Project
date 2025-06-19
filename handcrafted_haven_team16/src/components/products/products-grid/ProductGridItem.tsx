"use client";

import React, { useState } from "react";
import { Product } from "../../../interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md">
      <div className="relative w-full aspect-square">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={`/products/${displayImage}`}
            alt={product.title}
            fill
            className="object-cover"
            onMouseEnter={() => setDisplayImage(product.images[1])}
            onMouseLeave={() => setDisplayImage(product.images[0])}
          />
        </Link>
      </div>

      <div className="flex flex-col p-4 text-black">
        <Link
          href={`/product/${product.slug}`}
          className="text-lg font-semibold hover:text-blue-600"
        >
          {product.title}
        </Link>
        <span className="font-bold text-gray-700">${product.price}</span>
      </div>
    </div>
  );
};
