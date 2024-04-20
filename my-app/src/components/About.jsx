"use client";

import { Typography } from "@material-tailwind/react";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export default async function About() {
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
