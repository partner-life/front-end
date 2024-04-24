"use client";

import { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { logout } from "@/action/action";
import Cookies from "universal-cookie";

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
export default function NavbarPublic() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("Authorization");

  const checkToken = () => {
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
    checkToken();
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
        color={isScrolling ? "white" : "transparent"}
        className="fixed top-0 z-50 border-0"
      >
        <div className="mx-[50px] flex items-center justify-between">
          <Link href={"/"}>
            <Typography
              color={isScrolling ? "blue-gray" : "white"}
              className="text-lg font-bold"
            >
              Partner of Life
            </Typography>
          </Link>
          <ul
            className={`mr-5 hidden items-center gap-6 lg:flex ${
              isScrolling ? "text-gray-900" : "text-white"
            }`}
          >
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name}>
                <Link href={href}>{name}</Link>
              </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            {isLogin ? (
              <Button
                onClick={() => logout()}
                color={isScrolling ? "gray" : "white"}
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button color={isScrolling ? "gray" : "white"} variant="text">
                  Log in
                </Button>
              </Link>
            )}
          </div>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          ></IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              {NAV_MENU.map(({ name, href }) => (
                <NavItem key={name}>
                  <Link href={href}>{name}</Link>
                </NavItem>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              {isLogin ? (
                <Button
                  onClick={() => logout()}
                  color={isScrolling ? "gray" : "white"}
                >
                  Logout
                </Button>
              ) : (
                <Link href="/login">
                  <Button color={isScrolling ? "gray" : "white"} variant="text">
                    Log in
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Collapse>
      </MTNavbar>
    </>
  );
}
