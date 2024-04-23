import Link from "next/link";
import ModalFormOrder from "./ModalFormOrder";

export default function OrderCard({ order, fetchOrder, handlePayment, className }) {
  const orderDate = new Date(order.createdAt);
  const statusButtonColor = (status) => {
    switch (status) {
      case "Belum Bayar":
        return "px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500";
      case "Sudah Dibayar":
        return "px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-green-600 rounded cursor-pointer hover:bg-green-500";

      default:
        return "px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500";
    }
  };

  return (
    <>
      <div className="w-full px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Date Ordered:{" "}
            {orderDate.toLocaleString("id-ID", {
              dateStyle: "full",
            })}
          </span>
          <div className={statusButtonColor(order.status)} role="button">
            {order.status}
          </div>
        </div>
        <div className="mt-2">
          <Link
            href={`/packages/${String(order.Package[0]._id)}`}
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            {order.Package[0].name}
          </Link>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-y">
            <p className="text-gray-600">Husband's name</p>
            <p>{order.Profile?.husbandName}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Wife's name</p>
            <p>{order.Profile?.wifeName}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Marriage Date</p>
            <p>{order.Profile?.dateOfMerried}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Phone Number</p>
            <p>{order.Profile?.phoneNumber}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Wedding Address</p>
            <p>{order.Profile?.address}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <ModalFormOrder fetchOrder={fetchOrder} ButtonName={"Update"} order={order} />
          <div className="flex items-center">
            <p className="text-gray-600 mr-5">
              Total Price:{" "}
              {order.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <button
              onClick={() => handlePayment(order._id, order.price, order.Package[0].name)}
              id="pay-button"
              // className="flex ml-auto border-0 py-2 px-6 btn btn-neutral rounded-3xl "
              className={className}
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
