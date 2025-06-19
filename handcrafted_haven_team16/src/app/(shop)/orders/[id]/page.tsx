import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function Admin({ params }: Props) {
  const { id } = params;

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Order #${id}`}></Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex",
                "items-center",
                "rounded-lg",
                "py-2",
                "px-3.5",
                "text-xs",
                "font-bold",
                "text-white",
                "mb-5",
                { "bg-red-500": false, "bg-green-500": true }
              )}
            >
              <IoCardOutline size={30}></IoCardOutline>
              {/* <span className="mx-2">Payment Pending</span> */}
              <span className="mx-2">Payment Done</span>
            </div>
            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>

                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Shipping Address</h2>
            <div className="mb-10">
              <p>Lizandro Vivanco</p>
              <p>My Address</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-5"></div>

            <h2 className="text-2xl mb-2">Order Summary</h2>
            <div className="grid grid-cols-2">
              <span>N° Item</span>
              <span className="text-right">3 Items</span>

              <span>SubTotal</span>
              <span className="text-right">$ 100</span>

              <span>Taxes(15%)</span>
              <span className="text-right">$ 15</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 115</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex",
                  "items-center",
                  "rounded-lg",
                  "py-2",
                  "px-3.5",
                  "text-xs",
                  "font-bold",
                  "text-white",
                  "mb-5",
                  { "bg-red-500": false, "bg-green-500": true }
                )}
              >
                <IoCardOutline size={30}></IoCardOutline>
                {/* <span className="mx-2">Payment Pending</span> */}
                <span className="mx-2">Payment Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
