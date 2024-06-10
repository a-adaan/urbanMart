"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

export default function ShowAnW() {
  const session = useSession();

  return (
    <>
      <Link
        href="#"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <TbJewishStarFilled size={25} />
        </div>
        <div className="text-xs leading-3">Wishlist</div>
        <div className="absolute left-0 -top-5 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          8
        </div>
      </Link>
      <Link
        href="#"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <FaCartPlus size={25} />
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute left-0 -top-5 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          2
        </div>
      </Link>
    </>
  );
}
