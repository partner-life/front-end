import Carousel from "@/components/Carousel";
import ChatPublic from "@/components/ChatPublic";
import FilterSortAndSearch from "@/components/Filter-Sort-Search";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";

export default function PackagePage() {
  return (
    <>
      <Carousel />
      <ChatPublic/>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="p-10 w-screen">
          <div className="flex justify-between items-center h-1/4 mb-5">
            <h1 className="text-4xl font-bold">
              Make Your Dream Wedding Come True
            </h1>
            <FilterSortAndSearch />
          </div>
          <PackageCard />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}
