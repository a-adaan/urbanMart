import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center py-36 bg-[url('/banner-bg.jpg')]">
        <div className="container">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-transparent hover:text-primary"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image
              src="/icons/delivery-van.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
              width={40}
              height={40}
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image
              src="/icons/money-back.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
              width={40}
              height={40}
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
              <p className="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image
              src="/icons/service-hours.svg"
              alt="Delivery"
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
