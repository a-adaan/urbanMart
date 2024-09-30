"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/app/loading";
import Logout from "../auth/Logout";

export default function LoginRegBtn({ session }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, [pathname]);
  const handleClick = () => {
    setLoading(true);
    router.push(`/login`);
  };
  if (pathname.endsWith("/login")) {
    return null;
  }
  return (
    <div className="flex items-center">
      {loading && <Loading />}
      {session ? (
        <Logout />
      ) : (
        <Link
          href="/login"
          className="text-gray-200 hover:text-white transition "
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          Login/Register
        </Link>
      )}
    </div>
  );
}
