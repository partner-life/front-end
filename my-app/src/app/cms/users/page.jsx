import Footer from "@/components/Footer";
import NavbarCMS from "@/components/NavbarCMS";
import Sidebar from "@/components/Sidebar";
import TableUser from "@/components/TableUser";

export default function CMSUsersPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar activePage={"users"}/>
      <div className="p-4 xl:ml-80">
        <NavbarCMS page={"Users"} />
        <div className="mt-12">
          <div className="mb-4 grid grid-cols-1 gap-6">
            <TableUser />
          </div>
        </div>
        <div className="text-blue-gray-600 mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
