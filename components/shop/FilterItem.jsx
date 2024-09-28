"use client";
import { useState, useEffect } from "react";
import { BiSolidGridAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function FilterItem() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [size, setSize] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const updateURL = () => {
    const params = new URLSearchParams();

    if (categories) params.set("categories", categories.join(","));
    if (priceRange.min) params.set("min", priceRange.min);
    if (priceRange.max) params.set("max", priceRange.max);
    if (size) params.set("size", size);

    const queryString = params.toString();
    const filterPath = queryString ? `/shop/${queryString}` : "/shop";

    router.push(filterPath, undefined, { shallow: true });
  };

  const handleCategoryChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setCategories((prev) => [...prev, value]);
    } else {
      setCategories((prev) => prev.filter((category) => category !== value));
    }
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="text-center md:hidden">
        <button
          className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
          type="button"
          onClick={toggleDrawer}
        >
          <BiSolidGridAlt size={25} />
          Open Filter
        </button>
      </div>

      {/* Drawer component */}
      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 6a1 1 0 11-2 0 1 1 0 012 0zm0 3a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2H10V9H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          Info
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="divide-y divide-gray-200 space-y-5">
          <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Categories
            </h3>
            <div className="space-y-2">
              {["Watch", "Belts", "Caps", "Sunglass", "Shoes", "Wallet"].map(
                (category, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      type="checkbox"
                      id={`cat-${index}`}
                      value={category.toLowerCase()}
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                      onChange={handleCategoryChange}
                    />
                    <label
                      htmlFor={`cat-${index}`}
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      {category}
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">
                      ({Math.floor(Math.random() * 30)})
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Price
            </h3>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                name="min"
                id="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="min"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                name="max"
                id="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="max"
              />
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Size
            </h3>
            <div className="flex items-center gap-2">
              {["XS", "S", "M", "L", "XL"].map((sizeOption) => (
                <div className="size-selector" key={sizeOption}>
                  <input
                    type="radio"
                    name="size"
                    id={`size-${sizeOption.toLowerCase()}`}
                    value={sizeOption.toLowerCase()}
                    className="hidden"
                    onChange={handleSizeChange}
                  />
                  <label
                    htmlFor={`size-${sizeOption.toLowerCase()}`}
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    {sizeOption}
                  </label>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={updateURL}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for larger screens */}
      <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
        <div className="divide-y divide-gray-200 space-y-5">
          <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Categories
            </h3>
            <div className="space-y-2">
              {["Watch", "Belts", "Caps", "Sunglass", "Shoes", "Wallet"].map(
                (category, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      type="checkbox"
                      id={`cat-${index}`}
                      value={category.toLowerCase()}
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                      onChange={handleCategoryChange}
                    />
                    <label
                      htmlFor={`cat-${index}`}
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      {category}
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">
                      ({Math.floor(Math.random() * 30)})
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Price
            </h3>
            {parseInt(priceRange.min) > parseInt(priceRange.max) && (
              <p className="text-red-500 text-xs mt-2">
                Minimum price cannot be greater than maximum price
              </p>
            )}
            <div className="mt-4 flex items-center">
              <input
                type="text"
                name="min"
                id="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="min"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                name="max"
                id="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="max"
              />
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Size
            </h3>
            <div className="flex items-center gap-2">
              {["XS", "S", "M", "L", "XL"].map((sizeOption) => (
                <div className="size-selector" key={sizeOption}>
                  <input
                    type="radio"
                    name="size"
                    id={`size-${sizeOption.toLowerCase()}`}
                    value={sizeOption.toLowerCase()}
                    className="hidden"
                    onChange={handleSizeChange}
                    checked={size === sizeOption.toLowerCase()} // Check if size matches the current sizeOption
                  />
                  <label
                    htmlFor={`size-${sizeOption.toLowerCase()}`}
                    className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
                      size === sizeOption.toLowerCase()
                        ? "bg-blue-200 text-blue-700"
                        : "text-gray-600"
                    }`} // Apply different styles based on whether size matches the current sizeOption
                  >
                    {sizeOption}
                  </label>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={updateURL}
                disabled={parseInt(priceRange.min) > parseInt(priceRange.max)}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
