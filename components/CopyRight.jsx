import Image from "next/image";

export default function CopyRight() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between px-5">
        <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <Image
            src="/methods.png"
            alt="methods"
            className="h-5"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
