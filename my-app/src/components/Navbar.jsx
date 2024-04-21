"use client";

import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { logout } from "@/action/action";
import { useEffect, useState } from "react";

function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="span"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Package",
    href: "/packages",
  },
  {
    name: "History",
    href: "/order",
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MTNavbar
        shadow={false}
        fullWidth
        blurred={false}
        color={isScrolling ? "black" : "transparent"}
        className="fixed top-0 z-50 border-0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href={"/"}>
            <Typography
              color={isScrolling ? "blue-gray" : "black"}
              className="text-lg font-bold"
            >
              Partner of Life
            </Typography>
          </Link>
          <ul
            className={`ml-16 hidden items-center gap-6 lg:flex ${
              isScrolling ? "text-gray-900" : "text-black"
            }`}
          >
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name}>
                <Link href={href}>{name}</Link>
              </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/login" target="_blank">
              <Button color={isScrolling ? "gray" : "black"} variant="text">
                Log in
              </Button>
            </Link>
            <Button
              onClick={() =>  logout()}
              color={isScrolling ? "gray" : "black"}
            >
              Logout
            </Button>
          </div>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "black"}
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          ></IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-black px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              {NAV_MENU.map(({ name, href }) => (
                <NavItem key={name}>
                  <Link href={href}>{name}</Link>
                </NavItem>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <Button variant="text">Log in</Button>
              <button target="_blank">
                <Button color="gray">Logout</Button>
              </button>
            </div>
          </div>
        </Collapse>
      </MTNavbar>
    </>
  );
}
