"use client";

import useCartnQun from "@/utils/CartHook";
import { FaCartPlus } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import { ToastContainer } from "react-toastify";

export default function AddtoCart({
  cart,
  wishlist,
  card,
  productId,
  quantity,
}) {
  const { handleAddToCart, handleAddToWishlist } = useCartnQun(
    productId,
    quantity
  );

  return (
    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
      {cart && (
        <button
          className={`bg-primary border border-primary text-center text-white px-8 py-2 font-medium rounded uppercase flex items-center justify-center gap-2 hover:bg-transparent hover:text-primary transition ${
            card && "w-full"
          }`}
          onClick={handleAddToCart}
        >
          <FaCartPlus size={25} /> Add to cart
        </button>
      )}
      {wishlist && (
        <button
          onClick={handleAddToWishlist}
          className="border border-gray-300 text-gray-400 px-8 py-2 font-medium rounded uppercase flex items-center justify-center gap-2 hover:text-primary transition"
        >
          <TbJewishStarFilled size={25} /> Wishlist
        </button>
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}
