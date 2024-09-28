import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";
import { BiChevronRightSquare } from "react-icons/bi";
import { getAllCategory } from "@/db/query";

export default async function Navbar() {
  const session = await auth();
  const cat = await getAllCategory();
  return (
    <nav className="bg-gray-800">
      <div className="container flex px-5">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>

          <div className="absolute z-10 w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            {cat.map((ct) => (
              <Link
                href={`/category/${ct}`}
                key={ct}
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <BiChevronRightSquare size={25} className="text-primary" />
                <span className="ml-6 text-gray-600 text-sm">{ct}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link href="" className="text-gray-200 hover:text-white transition">
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>
          {session ? (
            <Logout />
          ) : (
            <Link
              href="/login"
              className="text-gray-200 hover:text-white transition"
            >
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
