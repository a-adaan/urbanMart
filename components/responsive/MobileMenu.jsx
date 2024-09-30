"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import ShowAnW from "../lib/ShowAnW";

export default function MobileMenu({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sm:hidden relative">
      {/* Mobile Menu Toggle Button */}
      <button className="text-gray-700 focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="fixed top-12 left-0 w-full h-30 bg-white z-50 shadow-lg p-4">
          <div className="flex justify-between items-center w-full">
            {/* ShowAnW Component */}
            <ShowAnW />

            {/* Account Link */}
            <Link
              href="/account"
              className="flex flex-col items-center text-gray-700 hover:text-primary transition relative"
            >
              <FaUserAlt size={25} />
              <div className="text-xs leading-3">
                {session ? session.user.name : "Account"}
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
