"use client";
import Image from "next/image";
import AddtoCart from "../lib/AddtoCart";
import { useEffect, useState } from "react";
import { getWishlistProducts } from "@/db/query";

export default function WishList() {
  const [wishList, setWishList] = useState([]);
  const fetchWishlist = async () => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (savedWishlist.length) {
      // Fetch the product data from the server using the wishlist IDs

      const products = await getWishlistProducts(savedWishlist);

      setWishList(products);
    }
  };
  useEffect(() => {
    fetchWishlist();

    const handleStorageUpdate = () => {
      fetchWishlist();
    };

    window.addEventListener("storageUpdate", handleStorageUpdate);

    return () => {
      window.removeEventListener("storageUpdate", handleStorageUpdate);
    };
  }, []);
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <p className="text-gray-600 font-medium">WishList</p>
      </div>

      <div className="container gap-6 pt-4 pb-16">
        <div className="mx-auto space-y-4 max-w-6xl">
          {/* show items this section */}
          {wishList.length === 0 && (
            <p className="text-gray-600 font-semibold">
              {" "}
              No Product In WishList
            </p>
          )}
          {wishList.map((wish) => (
            <div
              key={wish.id}
              className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
            >
              <div className="w-28">
                <Image
                  src={`${wish?.image[0]}`}
                  width={400}
                  height={400}
                  alt="product 6"
                />
              </div>
              <div className="w-1/3">
                <h2 className="text-gray-800 text-xl font-medium uppercase">
                  {wish?.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  Availability:{" "}
                  <span className="text-green-600">
                    {wish?.availability ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
              </div>
              <div className="text-primary text-lg font-semibold">
                ${wish?.price}
              </div>
              <AddtoCart cart={true} productId={wish?.id} />

              <div className="text-gray-600 cursor-pointer hover:text-primary">
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
