"use client";

import "aframe";
import { Scene, Entity } from "aframe-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const dynamic = "force-dynamic";

export default function Venues360Page() {
  const [embedded, setEmbedded] = useState(false);
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/");
    setEmbedded(true);
  };

  return (
    <Scene embedded={embedded}>
      <Entity primitive="a-sky" src="/venue.jpeg" />
      <button
        onClick={handleOnClick}
        className="absolute top-[20px] left-[20px] btn btn-neutral rounded-3xl z-50"
      >
        Go Back Home
      </button>
    </Scene>
  );
}
