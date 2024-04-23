import ButtonDeleteUser from "./ButtonDeleteUser";

export default async function TableUser() {
  async function getAllOrders() {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/showAllUser"
    );

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message);
    }

    return response.json();
  }
  const data = await getAllOrders();
  console.log("🚀 ~ getAllOrders ~ getAllOrders:", getAllOrders);
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
                  role
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data._id}>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        {data.name}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                      {data.username}
                    </p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                      {data.email}
                    </p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                      {data.role}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
