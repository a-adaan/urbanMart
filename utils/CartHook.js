"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useCartnQun = (productId, quantity = 1) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      setCart(savedCart);
      setWishlist(savedWishlist);
    }
  }, []);

  // Function to update localStorage and dispatch event
  const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("storageUpdate"));
  };

  // Add to cart
  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const existingProductIndex = currentCart.findIndex(
      (item) => item.productId === productId
    );

    let updatedCart;
    let updatedWishlist;
    if (currentWishlist.includes(productId)) {
      updatedWishlist = currentWishlist.filter((item) => item !== productId);
    }
    if (existingProductIndex !== -1) {
      updatedCart = currentCart.map((item, index) =>
        index === existingProductIndex ? { ...item, quantity: quantity } : item
      );
    } else {
      updatedCart = [
        ...currentCart,
        { productId: productId, quantity: quantity },
      ];
    }

    // Update the state and localStorage with the new cart data
    setCart(updatedCart);
    updateLocalStorage("cart", updatedCart);
    setWishlist(updatedWishlist);
    updateLocalStorage("wishlist", updatedWishlist);
    toast.success("Product added to cart", { theme: "dark" });
  };

  // Add to wishlist (similar implementation)
  const handleAddToWishlist = () => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const currentCartlist = JSON.parse(localStorage.getItem("cart")) || [];

    const isProductInCart = currentCartlist.some(
      (item) => item.productId === productId
    );

    if (isProductInCart) {
      toast.info("Product is already in cart, can't add to wishlist", {
        theme: "dark",
      });
      return;
    }
    let updatedWishlist;
    if (currentWishlist.includes(productId)) {
      updatedWishlist = currentWishlist.filter((id) => id !== productId);
      toast.success("Product removed from wish list", { theme: "dark" });
    } else {
      updatedWishlist = [...currentWishlist, productId];
      toast.success("Product added to wish list", { theme: "dark" });
    }

    setWishlist(updatedWishlist);
    updateLocalStorage("wishlist", updatedWishlist);
  };

  return {
    cart,
    wishlist,
    handleAddToCart,
    handleAddToWishlist,
  };
};

export default useCartnQun;
