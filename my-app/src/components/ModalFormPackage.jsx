"use client";

import { addPackage, editPackage } from "@/action/action";
import { showSuccess } from "@/lib/sweetAlert";
import { useEffect, useState } from "react";

export default function ModalFormPackage({ ButtonName, packageData }) {
  const data = packageData ? packageData : "";

  const [selectedImages, setSelectedImages] = useState([]);

  const [formData, setFormData] = useState({
    name: data.name ? data.name : "",
    imageUrl: data.imageUrl ? data.imageUrl : "",
    description: data.description ? data.description : "",
    category: data.category ? data.category : "",
    price: data.price ? data.price : "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const weddingCategory = ["regular", "VIP"];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleImageUpload() {
    try {
      const formData = new FormData();
      selectedImages.forEach((image) => formData.append("images", image));
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/add-images",
        {
          method: "PATCH",
          body: formData,
        }
      );
      const data = await response.json();
      console.log("Gambar berhasil diunggah:", data);
      setSelectedImages([]);
      return data;
    } catch (error) {
      console.log("Gagal mengunggah gambar:", error);
    }
  }

  const handleImageChange = (event) => {
    setSelectedImages(Array.from(event.target.files));
    console.log(
      "🚀 ~ handleImageChange ~ setSelectedImages:",
      "setSelectedImages"
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { images } = await handleImageUpload();
    console.log("🚀 ~ handleSubmit ~ imgUrl:", images);
    ButtonName === "Add New Package"
      ? await addPackage({ ...formData, imageUrl: images })
      : await editPackage({
          ...formData,
          _id: packageData._id,
          imageUrl: images,
        });
    console.log("image...");
    showSuccess(
      `Success ${packageData ? "update" : "add"} package ${
        packageData ? packageData.name : ""
      }`
    );
    closeModal();
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
                  <p className="mt-2 text-sm text-gray-500">{`${
                    ButtonName == "Add New Package"
                      ? "Create package"
                      : "Update package"
                  }`}</p>
                </div>
                <form className="px-6 pt-4 pb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                  />
                  <label
                    htmlFor="email2"
                    className="block mt-3 text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <div className="flex gap-5">
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-sm w-full h-[38px] mt-1"
                      multiple
                      onChange={handleImageChange}
                    />
                  </div>
                  <label className="block mt-3 text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    type="text"
                    placeholder="Description"
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                  />
                  <label className="block mt-3 text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    defaultValue={""}
                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleChange}
                    name="category"
                    value={formData.category}
                  >
                    <option disabled value={""}>
                      -- Category --
                    </option>
                    {weddingCategory.map((el, index) => (
                      <option
                        selected={data.category === el ? true : false}
                        key={index}
                        value={el}
                      >
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
                    onChange={handleChange}
                    name="price"
                    value={formData.price}
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
                      onClick={handleSubmit}
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
