import Image from "next/image";
import Link from "next/link";
import SearchButton from "./shop/SearchButton";
import { syncIndexes } from "mongoose";
import { getDictionary } from "@/dictionary/getDict";

export default async function Header() {
  const dict = await getDictionary();
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between px-5">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="w-32"
            width={40}
            height={40}
          />
        </Link>

        <SearchButton dict={dict} />

        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="text-xs leading-3">{dict?.wishlist}</div>
            <div className="absolute left-0 -top-5 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </div>
          </Link>
          <Link
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className="text-xs leading-3">{dict?.cart}</div>
            <div className="absolute left-0 -top-5 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </div>
          </Link>
          <Link
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
