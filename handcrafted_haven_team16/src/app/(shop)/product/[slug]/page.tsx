import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import {
  ProductMobileSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { ProductSlideshow } from "../../../../components/product/slideShow/ProductSlideshow";

interface Props {
  params: {
    slug: string;
  };
}

export default function Admin({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid gap-3 mt-5 mb-20 md:grid-cols-3">
      {/* Slide Show */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        ></ProductMobileSlideshow>
        {/* Desktop */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        ></ProductSlideshow>
      </div>
      {/* Details */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="mb-5 text-lg">${product.price}</p>
        {/* Select Size */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        ></SizeSelector>
        {/* Select Quantity */}
        <QuantitySelector quantity={1}></QuantitySelector>
        {/* Add to Cart */}
        <button className="my-5 btn-primary">Add to Cart</button>
        {/* Description */}
        <h3 className="text-sm font-bold">Description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
