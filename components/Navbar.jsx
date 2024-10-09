import { auth } from "@/auth";
import Link from "next/link";
import { getAllCategory } from "@/db/query";
import CategoryBtns from "./lib/CategoryBtns";
import LoginRegBtn from "./lib/LoginRegBtn";

export default async function Navbar() {
  const session = await auth();
  const cat = await getAllCategory();

  return (
    <nav className="bg-gray-800">
      <div className="container flex px-5 py-4">
        {/* Categories Dropdown */}
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>

          {/* Dropdown Content */}
          <div className="absolute z-10 w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            {cat.map((ct) => (
              <CategoryBtns key={ct} category={ct} nav={true} />
            ))}
          </div>
        </div>

        {/* Links and Authentication */}
        <div className="flex items-center justify-between flex-grow pl-12">
          {/* Links (visible only on desktop) */}
          <div className="hidden sm:flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </Link>
          </div>

          {/* Authentication (Login/Register or Logout) */}
          <LoginRegBtn session={session} />
        </div>
      </div>
    </nav>
  );
}
