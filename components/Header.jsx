import Image from "next/image";
import Link from "next/link";
import SearchButton from "./shop/SearchButton";
import { auth } from "@/auth";
import { FaUserAlt } from "react-icons/fa";
import ShowAnW from "./lib/ShowAnW";

export default async function Header() {
  const session = await auth();

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between px-5">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="w-40"
            width={40}
            height={40}
          />
        </Link>

        <SearchButton />

        <div className="flex items-center space-x-4">
          <ShowAnW />
          <Link
            href="/account"
            className="flex flex-col items-center text-gray-700 hover:text-primary transition relative"
          >
            <FaUserAlt size={25} />

            <div className=" text-xs leading-3">
              {session ? session.user.name : "Account"}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
