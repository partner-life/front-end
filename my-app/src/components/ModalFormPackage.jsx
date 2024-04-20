"use client";

import { useState } from "react";

export default function ModalFormPackage({ ButtonName }) {
  const [isOpen, setIsOpen] = useState(false);
  const weddingCategory = ["standard", "national", "international"];

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
          className={`${
            ButtonName == "Add New Package"
              ? "flex ml-auto border-0 py-2 px-6 btn btn-neutral rounded-3xl"
              : ""
          }`}
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
                    Package
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {`${
                      ButtonName == "Add New Package"
                        ? "Create package"
                        : "Update package"
                    }`}
                  </p>
                </div>
                <form className="px-6 pt-4 pb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <label
                    htmlFor="email2"
                    className="block mt-3 text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <div className="flex gap-5">
                    <input
                      type="text"
                      placeholder="Image 1"
                      className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Image 2 (Optional)"
                      className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <label className="block mt-3 text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    type="text"
                    placeholder="Description"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <label className="block mt-3 text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    defaultValue={""}
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option disabled value={""}>
                      -- Category --
                    </option>
                    {weddingCategory.map((el, index) => (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    ))}
                  </select>

                  <label className="block mt-3 text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
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
