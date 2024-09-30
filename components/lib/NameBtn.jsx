"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/app/loading";
export default function NameBtn({ id, name }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, [pathname]);
  const handleClick = () => {
    setLoading(true);
    router.push(`/${id}`);
  };
  return (
    <>
      {loading && <Loading />}
      <Link
        href={`/${id}`}
        prefetch={false}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
          {name}
        </h4>
      </Link>
    </>
  );
}
