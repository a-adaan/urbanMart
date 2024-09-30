import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 px-5">
        {/* Identity */}
        <div className="space-y-8">
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-30"
            width={150}
            height={150}
          />
          <div>
            <p className="text-gray-500">
              One-Stop Shop for Premium Men&apos;s Accessories
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-500">
            UrbanMart
            <br />
            123 Fashion Avenue,
            <br />
            New York, NY 10001
            <br />
            United States
          </p>
          <p className="text-gray-500 mt-2">
            Phone: (123) 456-7890
            <br />
            Email: support@urbanmart.com
          </p>
        </div>
      </div>
    </footer>
  );
}
