"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BiChevronRightSquare } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/app/loading";

export default function CategoryBtns({ category, nav }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, [pathname]);
  const handleClick = () => {
    const targetPath = `/category/${category}`;

    if (pathname.endsWith(targetPath)) {
      setLoading(false);
    } else {
      setLoading(true);
      router.push(targetPath);
    }
  };
  return (
    <>
      {loading && <Loading />}
      <Link
        href={`/category/${category}`}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className={`flex items-center px-6 py-3 transition ${
          nav
            ? "hover:bg-gray-100"
            : "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60"
        }`}
      >
        {nav ? (
          <>
            <BiChevronRightSquare size={25} className="text-primary" />
            <span className="ml-6 text-gray-600 text-sm">{category}</span>
          </>
        ) : (
          <span>{category}</span>
        )}
      </Link>
    </>
  );
}
