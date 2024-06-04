import Image from "next/image";
import RelatedProduct from "./RelatedProduct";
import { getProductById } from "@/db/query";
import { FaStar, FaStarHalf } from "react-icons/fa";
import ProductCounter from "../lib/ProductCounter";
import SocialShare from "../lib/SocialShare";
import AddtoCart from "../lib/AddtoCart";

export default async function ProductDetails({ id }) {
  const product = await getProductById(id);
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>

      <div className="container grid grid-cols-2 gap-6">
        <div>
          <Image
            src={`${product?.image[0]}/${product?.id}`}
            alt="product"
            className="w-full"
            width={700}
            height={700}
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            {product?.image.map((url, index) => (
              <Image
                key={url}
                src={`${url}/${product?.id}${index}`}
                alt="product2"
                className="w-full cursor-pointer border border-primary"
                width={700}
                height={700}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product?.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <FaStar size={25} />
              </span>
              <span>
                <FaStarHalf size={25} />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              {product?.reviewsNumber} Reviews
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{product?.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{product?.category}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              ${product?.discount_price}
            </p>
            <p className="text-base text-gray-400 line-through">
              ${product?.price}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product?.description}</p>

          <ProductCounter />

          <AddtoCart cart={true} wishlist={true} />

          <SocialShare url={id} />
        </div>
      </div>

      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>{product?.description}</p>
            {Object.keys(product?.details).map((key) => (
              <p key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                {product?.details[key]}
              </p>
            ))}
          </div>
        </div>
      </div>
      <RelatedProduct category={product?.category} skipId={product?.id} />
    </>
  );
}
