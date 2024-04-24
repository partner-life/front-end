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
        We are a team of passionate and experienced wedding planners
        <br />
        <br />
        Our team of wedding planners is passionate about creating unforgettable
        wedding experiences. We understand that every wedding is unique, and we
        work closely with our clients to ensure that their vision becomes a
        reality.
        <br />
        <br />
        Our approach is personal, friendly, and professional, and we strive to
        make the planning process as stress-free as possible.
      </Typography>
    </section>
  );
}
