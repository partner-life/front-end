export default function TableOrder() {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2 w-full">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
        <div>
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
            Packages
          </h6>
          <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <strong>3 success payment</strong> this month
          </p>
        </div>
        <button
          aria-expanded="false"
          aria-haspopup="menu"
          id=":r5:"
          className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currenColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  package
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  price
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  status
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    package one
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $14,000
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    payment
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                  package two
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $3,000
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    pending
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      style={{ width: "66%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    package three
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  Not set
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    cancel
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full bg-gradient-to-tr from-red-600 to-red-400 text-white"
                      style={{ width: "33%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
