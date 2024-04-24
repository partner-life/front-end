"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
export default function Vanues() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Link href={"/360"}>
        <Typography
            color="orange"
            className="flex justify-center mb-3 font-bold uppercase"
          >
            -ˋˏ ༻❁ Open Preview 360 ❁༺ ˎˊ-
          </Typography>
          <Image
            width={480}
            height={480}
            src="/venue.jpeg"
            className="col-span-1 w-1/2 mx-auto lg:w-10/12"
            alt="venue"
          />
        </Link>
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography
            color="orange"
            className="flex justify-center mb-3 font-bold uppercase"
          >
            -ˋˏ ༻❁ VANUES ❁༺ ˎˊ-
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            An unforgettable atmosphere away from the crowd, <br />
            for your crowd
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Exclusive access to Glasgow's most iconic Neoclassical landmark,
            playing host to events of all varieties. <br />
            The one thing our gala dinners, award ceremonies and celebrations
            have in common is that the building always breaks the ice. Dating
            back to 1844 and nestled within the grandeur of the Merchant City,
            the rich history of Citation contributes to its boastful vibrance
            and rusticity.
          </Typography>
        </div>
      </div>
    </section>
  );
}
