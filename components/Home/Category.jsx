import { getAllCategory } from "@/db/query";
import Image from "next/image";
import Link from "next/link";

export default async function Category() {
  const cat = await getAllCategory();
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {cat.map((ct) => (
          <div key={ct} className="relative rounded-sm overflow-hidden group">
            <Image
              src={`/category/${ct.toLowerCase()}.jpg`}
              alt="category 1"
              className="w-full"
              width={400}
              height={400}
            />
            <Link
              href={`/category/${ct}`}
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              {ct}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
