"use client";
import { useState } from "react";
import AddtoCart from "./AddtoCart";
import ProductCounter from "./ProductCounter";

export default function CounterNCart({ productId, stock }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      {stock === 0 ? (
        <div className="mt-4 text-red-600 font-bold">Sold Out</div>
      ) : (
        <>
          <ProductCounter qun={quantity} setQun={setQuantity} stock={stock} />
          <AddtoCart
            cart={true}
            wishlist={true}
            quantity={quantity}
            productId={productId}
          />
        </>
      )}
    </>
  );
}
