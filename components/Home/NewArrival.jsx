import { getNewProduct } from "@/db/query";
import Image from "next/image";
import AddtoCart from "../lib/AddtoCart";
import { FaStar, FaStarHalf } from "react-icons/fa";
import NameBtn from "../lib/NameBtn";

export default async function NewArrival() {
  const newProducts = await getNewProduct();
  // console.log(newProducts);

  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {newProducts.map((product) => (
          <div
            key={product?.id}
            className="bg-white shadow rounded overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative">
              <Image
                src={`${product?.image[0]}/${product?.id}`}
                alt="product 1"
                className="w-full h-64 object-cover"
                width={400}
                height={400}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition "
              >
                <AddtoCart wishlist={true} />
              </div>
            </div>
            <div className="pt-4 pb-3 px-4 flex-grow">
              <NameBtn id={product?.id} name={product?.name} />
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">
                  ${product?.discount_price}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  ${product?.price}
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <FaStar size={25} />
                  </span>
                  <span>
                    <FaStarHalf size={25} />
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">
                  {product?.reviewsNumber}
                </div>
              </div>
            </div>
            <AddtoCart cart={true} card={true} productId={product?.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
