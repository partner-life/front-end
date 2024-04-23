"use client";

import { register } from "@/action/action";
import { showError } from "@/lib/sweetAlert";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(input);
    } catch (error) {
      if (error instanceof Error) {
        showError(error.message);
      }
    }
  };

  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Welcome to Partner of Life
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Please register your account
              </p>
            </div>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Name
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text"
                  placeholder="Name"
                  value={input.name}
                  name="name"
                  onChange={handleOnChange}
                />
              </div>
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Username
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text"
                  placeholder="Username"
                  value={input.username}
                  name="username"
                  onChange={handleOnChange}
                />
              </div>
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="email"
                  placeholder="Email"
                  value={input.email}
                  name="email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Enter your password"
                  value={input.password}
                  name="password"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <button
                  onClick={handleOnSubmit}
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Register
                </button>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="h-px w-16 bg-gray-200" />
                <span className="text-gray-300 font-normal">
                  or continue with
                </span>
                <span className="h-px w-16 bg-gray-200" />
              </div>
              <div className="flex flex-row justify-center items-center space-x-3">
                <button className="btn btn-primary">Disini dul</button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Login
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        <div
          className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2014/02/07/11/31/flowers-260894_1280.jpg)",
          }}
        >
          <div className="absolute bg-gradient-to-b from-indigo-600 to-gray-500 opacity-75 inset-0 z-0" />
          <div className="w-full max-w-2xl z-10">
            <Typography
              variant="lead"
              className="sm:text-3xl xl:text-4xl font-bold leading-tight mb-6"
            >
              We are a team of passionate and experienced wedding planners
            </Typography>
            <Typography
              variant="lead"
              className="sm:text-sm xl:text-md text-gray-200 font-normal"
            >
              Our team of wedding planners is passionate about creating
              unforgettable wedding experiences. We understand that every
              wedding is unique, and we work closely with our clients to ensure
              that their vision becomes a reality.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
