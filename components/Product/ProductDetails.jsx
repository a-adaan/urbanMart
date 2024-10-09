import Image from "next/image";
import RelatedProduct from "./RelatedProduct";
import { getProductById } from "@/db/query";
import { FaStar, FaStarHalf } from "react-icons/fa";
import SocialShare from "../lib/SocialShare";
import CounterNCart from "../lib/CounterNCart";

export default async function ProductDetails({ id }) {
  const product = await getProductById(id);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>

      {/* Product Details Section */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          <Image
            src={`${product?.image[0]}/${product?.id}`}
            alt="product"
            className="w-full"
            width={700}
            height={700}
          />
          <div className="grid grid-cols-5 gap-2 sm:gap-4 mt-4">
            {product?.image.map((url, index) => (
              <Image
                key={url}
                src={`${url}/${product?.id}${index}`}
                alt="product-thumbnail"
                className="w-full cursor-pointer border border-primary"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium uppercase mb-2">
            {product?.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStarHalf size={20} />
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
            <p className="text-xl sm:text-2xl text-primary font-semibold">
              ${product?.discount_price}
            </p>
            <p className="text-base sm:text-lg text-gray-400 line-through">
              ${product?.price}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product?.description}</p>

          {/* Product Counter & Add to Cart */}
          <CounterNCart productId={product?.id} stock={product?.stock} />

          {/* Social Share */}
          <SocialShare url={id} />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-full sm:w-4/5 md:w-3/5 pt-6">
          <div className="text-gray-600 space-y-2">
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

      {/* Related Products */}
      <RelatedProduct category={product?.category} skipId={product?.id} />
    </>
  );
}
