export default function TableUser() {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2 w-full">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
        <div>
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
            Users
          </h6>
        </div>
      </div>
      <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  name
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  username
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  email
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  action
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
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  admin 1
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12 flex gap-10">
                  <button className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
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
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  admin 2
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12 flex gap-10">
                  <button className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
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
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  admin 1
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12 flex gap-10">
                  <button className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
