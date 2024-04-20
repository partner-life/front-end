"use client";

import { Typography } from "@material-tailwind/react";

export default function About() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
      -ˋˏ ༻❁ About Partner of Life ❁༺ ˎˊ-
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Partner of Life?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia
        est velit corrupti alias sequi adipisci nostrum numquam quis aliquid
        eveniet dolores, repellendus dolorum accusamus nobis, obcaecati laborum
        necessitatibus saepe?
      </Typography>
    </section>
  );
}
