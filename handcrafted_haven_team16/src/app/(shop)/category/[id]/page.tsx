import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default async function Admin({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "Mens",
    women: "Woman",
    kid: "Kids",
    unisex: "All",
  };
  // if (id === "kids") {
  //   notFound();
  // }

  if (!labels[id]) {
    notFound();
  }
  return (
    <>
      <Title
        title={`Articles for ${labels[id]}`}
        subtitle="Welcome to our store"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
