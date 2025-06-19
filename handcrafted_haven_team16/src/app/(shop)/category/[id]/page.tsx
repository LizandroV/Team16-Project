import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

export default async function Admin({ params }: { params: { id: string } }) {
  const id = params.id as Category;

  const labels: Record<Category, string> = {
    men: "Mens",
    women: "Woman",
    kid: "Kids",
    unisex: "All",
  };

  if (!labels[id]) {
    notFound();
  }

  const products = seedProducts.filter((product) => product.gender === id);

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
