"use client";

import { orderPackage, updateOrder } from "@/action/action";
import { showError, showSuccess } from "@/lib/sweetAlert";
import { useState } from "react";

export default function ModalFormOrder({
  ButtonName,
  packageId,
  order,
  fetchOrder,
}) {
  const data = order ? order : "";
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    husbandName: data.Profile?.husbandName ? data.Profile?.husbandName : "",
    wifeName: data.Profile?.wifeName ? data.Profile?.wifeName : "",
    address: data.Profile?.address ? data.Profile?.address : "",
    phoneNumber: data.Profile?.phoneNumber ? data.Profile?.phoneNumber : "",
    dateOfMerried: data.Profile?.dateOfMerried ? data.Profile?.dateOfMerried : "",
  });

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddPackage = async (event) => {
    event.preventDefault();
    try {
      await orderPackage(packageId._id, input);
      showSuccess(`Success Order Package ${packageId.name}`)
    } catch (error) {
      if (error instanceof Error) {
        showError(error.message);
      }
    }
  };

  const handleEditPackage = async (event) => {
    event.preventDefault();
    try {
      await updateOrder(order._id, input);
      fetchOrder();
      closeModal();
      showSuccess("Success update order form.")
    } catch (error) {
      if (error instanceof Error) {
        showError(error.message);
      }
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className="relative flex justify-center">
        <button
          onClick={openModal}
          className="flex ml-auto border-0 py-2 px-6 btn btn-neutral rounded-3xl"
        >
          {ButtonName}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto bg-gray-200 bg-opacity-75"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={handleBackdropClick}
              className="flex content-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 w-[50%]">
                <div className="px-6 pt-5 pb-4">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-800 capitalize"
                    id="modal-title"
                  >
                    {order ? "Edit Order" : "Add order"}
                  </h3>
                </div>
                <form className="px-6 pt-4 pb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Husband's name
                  </label>
                  <input
                    value={input.husbandName}
                    name="husbandName"
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Husband's name"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <label
                    htmlFor="email2"
                    className="block mt-3 text-sm font-medium text-gray-700"
                  >
                    Wife's name
                  </label>
                  <input
                    value={input.wifeName}
                    name="wifeName"
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Wife's name"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <label
                    htmlFor="email2"
                    className="block mt-3 text-sm font-medium text-gray-700"
                  >
                    Marriage Date
                  </label>
                  <input
                    value={input.dateOfMerried}
                    name="dateOfMerried"
                    onChange={handleOnChange}
                    type="Date"
                    placeholder="Marriage Date"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <label
                    htmlFor="email2"
                    className="block mt-3 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="flex gap-5">
                    <input
                      value={input.phoneNumber}
                      name="phoneNumber"
                      onChange={handleOnChange}
                      type="text"
                      placeholder="Phone Number"
                      className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <label
                    htmlFor="email2"
                    className="block mt-3 text-sm font-medium text-gray-700"
                  >
                    Wedding Address
                  </label>
                  <input
                    value={input.address}
                    name="address"
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Wedding Address"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={order ? handleEditPackage : handleAddPackage}
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
