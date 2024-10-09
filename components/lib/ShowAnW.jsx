"use client";
import { FaCartPlus } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import CartSideBar from "./CartSideBar";
import Link from "next/link";

export default function ShowAnW() {
  const [cart, setCart] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Function to update the cart count from localStorage
  const updateCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart || "");
  };

  // Function to update the wishlist count from localStorage
  const updateWishlistCount = () => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(savedWishlist.length || 0);
  };

  useEffect(() => {
    updateCartCount();
    updateWishlistCount();

    // Listen for custom storage update events
    const handleStorageUpdate = () => {
      updateCartCount();
      updateWishlistCount();
    };

    window.addEventListener("storageUpdate", handleStorageUpdate);

    return () => {
      window.removeEventListener("storageUpdate", handleStorageUpdate);
    };
  }, []);

  return (
    <>
      <Link
        href="/wishlist"
        className="text-center p-2 text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <TbJewishStarFilled size={25} />
        </div>
        <div className="text-xs leading-3">Wishlist</div>
        <div className="absolute left-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {wishlistCount}
        </div>
      </Link>
      <button
        className="text-center p-2 text-gray-700 hover:text-primary transition relative"
        onClick={toggleCart}
      >
        <div className="text-2xl">
          <FaCartPlus size={25} />
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute left-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {cart.length || 0}
        </div>
      </button>

      <div
        className={`fixed overflow-y-auto top-[20%] md:top-[12%] right-0 transition-transform ease-in-out duration-500 bg-[#fff] w-3/4 md:w-1/3 h-svh z-10 rounded-md border-primary border-t-4 border-l-4
        ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <CartSideBar cart={cart} />
      </div>
    </>
  );
}
