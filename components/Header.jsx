import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./shop/SearchButton";
import { auth } from "@/auth";
import ShowAnW from "./lib/ShowAnW";
import MobileMenu from "./responsive/MobileMenu";

export default async function Header() {
  const session = await auth();

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex flex-col sm:flex-row items-center justify-between px-5">
        {/* First Row: Logo and Mobile Menu Button */}
        <div className="flex justify-between w-full sm:w-auto">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="w-40 h-auto"
              width={160}
              height={40}
            />
          </Link>

          {/* Mobile Menu Component */}
          <MobileMenu session={session} />
        </div>

        {/* Second Row: Search Box */}
        <div className="w-full sm:w-1/3 mt-4 sm:mt-0 flex justify-center">
          <SearchButton />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4 mt-4 sm:mt-0">
          <ShowAnW />
          <Link
            href="/account"
            className="flex flex-col items-center text-gray-700 hover:text-primary transition relative"
          >
            {session?.user?.img ? (
              <Image
                src={session.user.img}
                alt="Profile Image"
                height={700}
                width={700}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <FaUserAlt size={25} />
            )}
            <div className="text-xs leading-3 mt-1">
              {session ? session.user.name : "Account"}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
