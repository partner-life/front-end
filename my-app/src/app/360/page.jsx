"use client";

import "aframe";
import { Scene, Entity } from "aframe-react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Venues360Page() {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <Scene>
      <Entity primitive="a-sky" src="/venue.jpeg" />
      {/* <Link href="/" className="absolute top-[20px] left-[20px] btn btn-neutral rounded-3xl z-50">
        Go Back Home
      </Link> */}
      <button
        onClick={handleOnClick}
        className="absolute top-[20px] left-[20px] btn btn-neutral rounded-3xl z-50"
      >
        Go Back Home
      </button>
    </Scene>
  );
}
