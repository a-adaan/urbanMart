import Image from "next/image";
import FilterItem from "./FilterItem";
import AddtoCart from "../lib/AddtoCart";
import { FaStar, FaStarHalf } from "react-icons/fa";
import NameBtn from "../lib/NameBtn";

export default function SearchProduct({ products }) {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      <div className="container grid md:grid-cols-4 grid-cols-1 gap-6 pt-4 pb-16 items-start">
        <FilterItem />
        {/* <!-- products --> */}
        {products ? (
          products.map((product) => (
            <div
              key={product?.id}
              className="bg-white shadow rounded overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative">
                <Image
                  src={`${product?.image[0]}/${product?.id}`}
                  alt={product?.name}
                  className="w-full h-64 object-cover"
                  width={700}
                  height={700}
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
                    ({product?.reviewsNumber})
                  </div>
                </div>
              </div>
              <AddtoCart cart={true} card={true} />
            </div>
          ))
        ) : (
          <h3>Product Not found.</h3>
        )}

        {/* <!-- ./products --> */}
      </div>
    </>
  );
}
