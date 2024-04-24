"use client";

import { Button, Typography } from "@material-tailwind/react";
import NavbarPublic from "./NavbarPublic";

export default function Carousel() {
  return (
    <>
      <NavbarPublic />
      <div className="relative min-h-screen w-full bg-[url('https://cdn.pixabay.com/photo/2014/02/07/11/31/flowers-260893_1280.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <Typography variant="h1" color="orange" className="lg:max-w-4xl">
              -ˋˏ ༻❁ Welcome Partner of Life ❁༺ ˎˊ-
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
            >
              Make Your Dream Wedding Come True
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
