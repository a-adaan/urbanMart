import CheckOutDetails from "./CheckOutDetails";
import CheckOutSummary from "./CheckOutSummary";

export default function CheckOut() {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <CheckOutDetails />
        <CheckOutSummary />
      </div>
    </>
  );
}
