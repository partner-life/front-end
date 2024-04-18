import Link from "next/link";
import NavbarPublic from "./NavbarPublic";

export default function Carousel() {
  return (
    <>
      <div className="card carousel w-full h-[720px] shadow-xl image-full">
      <NavbarPublic />
        <figure>
          <img
            src="https://cdn.pixabay.com/photo/2014/02/07/11/31/flowers-260893_1280.jpg"
            alt="carousel"
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#EEEEEE] mt-20">lorem</h2>
          <p className="text-[#EEEEEE]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            fugiat, laboriosam numquam error esse asperiores, tenetur saepe
            reprehenderit architecto facere repellat molestias quam ad sunt
            officiis odio distinctio exercitationem nulla?
          </p>
          <div className="card-actions justify-end">
            <Link
              href={"/"}
              className="btn btn-neutral rounded-3xl text-[#EEEEEE] bg-[#191919] mb-20"
            >
              Shop now!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
