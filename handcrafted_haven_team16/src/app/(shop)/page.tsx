// import Image from "next/image";

import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
// import { titleFont } from "@/config/fonts";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Store" subtitle="Welcome to our store" className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
