"use client";
import { ToastContainer, toast } from "react-toastify";

export default function ProductCounter({ qun, setQun, stock }) {
  const handleQuantityChange = () => {
    if (qun + 1 > stock) {
      toast.warn("Quantity exceeds stock!", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      setQun(qun + 1);
    }
  };
  return (
    <>
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <button
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            disabled={qun === 1}
            onClick={() => setQun(qun - 1)}
          >
            -
          </button>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {qun}
          </div>
          <button
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={handleQuantityChange}
          >
            +
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
