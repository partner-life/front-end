"use server";

import { fetchPackages } from "@/action/action";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import ChatPublic from "@/components/ChatPublic";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import Link from "next/link";

export default async function Home() {
  const data = await fetchPackages();

  return (
    <>
      <Carousel />
      <ChatPublic />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <div className="p-10 w-screen">
          <div className="card w-full h-[480px] flex justify-center items-center">
            <About />
          </div>
          <div className="flex justify-between items-center h-1/4 mb-5">
            <h1 className="text-4xl font-bold">
              Make Your Dream Wedding Come True
            </h1>
            <Link className="btn btn-outline rounded-3xl" href={"/packages"}>
              <h1 className="text-xl">All Packages</h1>
            </Link>
          </div>
          <div className="flex flex-nowrap overflow-x-auto gap-5 max-w-full h-full w-full">
            {data.packages.map((packageData,i) => {
              return <PackageCard key={i} packageData={packageData} />;
            })}
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}
