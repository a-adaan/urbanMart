"use client";

import { getCartProducts } from "@/db/query";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartSideBar({ cart }) {
  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartIds = Array.isArray(cart)
      ? cart.map((item) => item.productId)
      : [];

    const fetchCartItems = async () => {
      try {
        const products = await getCartProducts(cartIds);
        if (products.length) {
          let calculatedTotal = 0;
          const updatedCartItems = cart.map((cartItem) => {
            const product = products.find(
              (prod) => prod.id === cartItem.productId
            );
            const subTotal = product?.price * Number(cartItem?.quantity) || 0;
            calculatedTotal += subTotal;
            return {
              ...cartItem,
              ...product,
              subTotal,
            };
          });
          setTotal(calculatedTotal);
          setCartItem(updatedCartItems);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [cart]);

  return (
    <div className="w-full h-full mx-auto my-10 flex flex-col justify-start items-center gap-10">
      <div>
        <h2 className="font-semibold text-3xl">Cart Summary</h2>
      </div>
      <div className="col-span-4 border w-[80%] border-gray-200 p-4 rounded">
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div key={item?.id} className="flex justify-between">
              <div>
                <h5 className="text-gray-800 font-medium">{item?.name}</h5>
                <p className="text-sm text-gray-600">Rating: {item?.ratings}</p>
              </div>
              <p className="text-gray-600">x{item?.quantity}</p>
              <p className="text-gray-800 font-medium">${item?.subTotal}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between border-t border-gray-200 mt-2 text-gray-800 font-medium py-3 uppercas">
          <p className="font-semibold">Total</p>
          <p>${total}</p>
        </div>
      </div>
      <div>
        <Link
          href={"/checkout"}
          className="px-7 py-5 bg-primary rounded-lg font-medium text-base border border-primary text-white transition hover:bg-transparent hover:text-primary"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}
