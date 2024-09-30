import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-cover bg-no-repeat bg-center py-20 sm:py-36 bg-[url('/hero-banner.jpg')]">
        <div className="container px-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray-800 font-medium mb-4 capitalize">
            One-Stop Shop for Premium <br className="hidden sm:block" />
            Men&apos;s Accessories
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 sm:w-2/3 lg:w-1/3 mb-6">
            Discover Urban Mart, the ultimate destination for stylish and modern
            men&apos;s accessories. We offer a curated collection designed to
            elevate your look. Explore our range of top-quality products that
            blend functionality with fashion.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-6 sm:px-8 py-2 sm:py-3 font-medium rounded-md 
              hover:bg-transparent hover:text-primary transition-all"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-12 sm:py-16 px-5">
        <div className="w-full sm:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          {/* Feature Item */}
          <div className="border border-primary rounded-sm px-5 py-6 flex justify-center items-center gap-5">
            <Image
              src="/icons/delivery-van.svg"
              alt="Free Shipping"
              className="w-12 h-12 object-contain"
              width={40}
              height={40}
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          {/* Feature Item */}
          <div className="border border-primary rounded-sm px-5 py-6 flex justify-center items-center gap-5">
            <Image
              src="/icons/money-back.svg"
              alt="Money Returns"
              className="w-12 h-12 object-contain"
              width={40}
              height={40}
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sm">30 days money returns</p>
            </div>
          </div>
          {/* Feature Item */}
          <div className="border border-primary rounded-sm px-5 py-6 flex justify-center items-center gap-5">
            <Image
              src="/icons/service-hours.svg"
              alt="24/7 Support"
              className="w-12 h-12 object-contain"
              width={40}
              height={40}
            />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
