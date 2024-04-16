import Link from "next/link";

export default function RegisterPage() {
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
            <form className="mt-8 space-y-6" action="/" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Username
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type=""
                  placeholder="Username"
                />
              </div>
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type=""
                  placeholder="Email"
                />
              </div>
              <div className="mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="Password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Register
                </button>
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
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Reference site about Lorem Ipsum..
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              {" "}
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s when an
              unknown printer took Link galley of type and scrambled it to make
              Link type specimen book it has?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
