import CheckOutForm from "./CheckOutForm";
import OrderSummery from "./OrderSummery";

export default function CheckOutPage() {
  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- wrapper --> */}
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <CheckOutForm />

        <OrderSummery />
      </div>
      {/* <!-- ./wrapper --> */}
    </>
  );
}
