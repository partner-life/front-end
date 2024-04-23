import Link from "next/link";
import ModalFormOrder from "./ModalFormOrder";

export default function OrderCard({ order, fetchOrder, handlePayment }) {
  return (
    <div className="w-full px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          Date Ordered: March 10, 2024
        </span>
        <div
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          role="button"
        >
          {order.status}
        </div>
      </div>
      <div className="mt-2">
        <Link
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          NAME PACKAGE
        </Link>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-y">
          <p className="text-gray-600">Husband's name</p>
          <p>{order.Profile.nameHusband}</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Wife's name</p>
          <p>{order.Profile.nameWife}</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Marriage Date</p>
          <p>{order.Profile.dateOfMerried}</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Phone Number</p>
          <p>{order.Profile.phoneNumber}</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Wedding Address</p>
          <p>{order.Profile.address}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <ModalFormOrder
          fetchOrder={fetchOrder}
          ButtonName={"Update"}
          order={order}
        />
        <div className="flex items-center">
          <p className="text-gray-600 mr-5">
            Total Price:{" "}
            {order.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <button
            onClick={handlePayment}
            id="pay-button"
            className="flex ml-auto border-0 py-2 px-6 btn btn-neutral rounded-3xl"
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}
