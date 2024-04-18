import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import PacketCard from "@/components/PacketCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Carousel />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="p-10 w-screen">
          <div className="card w-full h-[480px] flex justify-center items-center">
            <About />
          </div>
          <div className="flex justify-between items-center h-1/4 mb-5">
            <h1 className="text-4xl font-bold">
              Make Your Dream Wedding Come True
            </h1>
            <Link className="btn btn-outline rounded-3xl" href={"/packets"}>
              <h1 className="text-xl">All Packets</h1>
            </Link>
          </div>
          <div className="flex flex-nowrap overflow-x-auto gap-5 max-w-full h-full w-full">
            <PacketCard />
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}
