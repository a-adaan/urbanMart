import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container grid grid-cols-3 px-5">
        <div className="col-span-1 space-y-8 mr-2">
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-30"
            width={150}
            height={150}
          />
          <div className="mr-2">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              hic?
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-facebook-square"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-instagram-square"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-twitter-square"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-github-square"></i>
            </Link>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
