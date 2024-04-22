import Link from "next/link";

export default function PackageCard({ packageData }) {
  return (
    <div className="group pb-24 relative overflow-hidden w-[24%] ">
      <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-pink-600 z-10" />
      <img
        src={packageData.imageUrl[0]}
        className="transition-all group-hover:scale-125 duration-700 mr-4 h-[480px] w-[97%]"
        alt="package"
      />
      <div className="bg-pink-600 absolute z-10 bottom-0 left-0 w-full h-[150px] flex flex-col justify-center items-center">
        <Link
          href={`/packages/${String(packageData._id)}`}
          className="z-20 absolute -top-5 flex justify-center btn btn-circle"
        >
          <img className="h-8 w-8" src="/wedding-planning.png" alt="bag" />
        </Link>
        <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
          <div className="h-6 bg-pink-900 -rotate-45 transform origin-bottom-right" />
        </div>
        <h2 className="font-bold text-xl pt-5 text-white">{packageData.name}</h2>
        <h2 className="text-white font-bold pt-1">Category: {packageData.category}</h2>
        <span className="text-white pt-1">
          {packageData.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </span>
      </div>
    </div>
  );
}
