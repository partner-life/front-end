"use server";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalFormOrder from "@/components/ModalFormOrder";
import ChatPublic from "@/components/ChatPublic";
import { fetchPackageById } from "@/action/action";

export default async function PackageDetailPage({ params }) {
  const data = await fetchPackageById(params.id);

  return (
    <>
      <Navbar />
      <ChatPublic />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="package"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={data.imageUrl[0]}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                PACKAGE NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <label className="font-bold">Description</label>
              <p className="leading-relaxed mt-2">{data.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 justify-between">
                <div className="mt-2">
                  <label>Image product</label>
                  <div className="flex gap-5 mt-5">
                    <img
                      className="h-28 w-28"
                      src={data.imageUrl[1]}
                      alt="image1"
                    />
                    <img
                      className="h-28 w-28"
                      src={data.imageUrl[2]}
                      alt="image2"
                    />
                    <img
                      className="h-28 w-28"
                      src={data.imageUrl[3]}
                      alt="image3"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900 flex justify-center items-center">
                  {data.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </span>
                <div className="flex ml-auto py-2 px-6">
                  <ModalFormOrder ButtonName={"Order now"} packageId={data}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </>
  );
}
