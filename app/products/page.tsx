


import { client } from "@/lib/sanity";
import ProductsGrid from "@/components/ProductsGrid"; // Client Component

export default async function ProductsPage() {
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    title,
    price,
    category,
    "imageUrl": image.asset->url,
    springLink
  }`);

  return <ProductsGrid products={products} />;
}
