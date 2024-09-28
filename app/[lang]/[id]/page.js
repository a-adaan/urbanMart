import ProductDetails from "@/components/Product/ProductDetails";
import { Suspense } from "react";
import Loading from "../../loading";
import { getProductById } from "@/db/query";

export async function generateMetadata({ params }) {
  const id = params.id;

  const product = await getProductById(id);

  return {
    title: product?.name,
    description: product?.description,
    openGraph: {
      title: product?.name,
      description: product?.description,
      images: `${product?.image[0]}/${product?.id}`,
    },
  };
}

export default function SingleProduct({ params: { id } }) {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails id={id} />
    </Suspense>
  );
}
