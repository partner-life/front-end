"use client";

import { Typography } from "@material-tailwind/react";
import BenefitCard from "./BenefitCard";

export default function Benefit() {
  const Benefits = [
    {
      icon: "/logo.png",
      title: "Saves Time and Energy",
      children:
        "By using a wedding planner, you no longer have to worry about every detail of your wedding.",
    },
    {
      icon: "/logo.png",
      title: "Budget Management",
      children:
        "A wedding planner can help you manage your wedding budget and provide advice on how to save money without sacrificing the quality or experience of your wedding.",
    },
    {
      icon: "/logo.png",
      title: "Efficient Coordination",
      children:
        "A wedding planner can help coordinate all the vendors involved in your wedding, from catering to photographers.",
    },
    {
      icon: "/logo.png",
      title: "Handling Unexpected Situations",
      children:
        "By using a wedding planner, you can feel at ease and confident that every detail of your wedding is being taken care of.",
    },
  ];

  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="orange" className="mb-2 font-bold uppercase">
          -ˋˏ ༻❁ BENEFIT ❁༺ ˎˊ-
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Perfect moments simply reveal themselves
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {Benefits.map((props, idx) => (
          <BenefitCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
