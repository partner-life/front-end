"use client";

import ChatAdmin from "@/components/ChatAdmin";
import Footer from "@/components/Footer";
import NavbarCMS from "@/components/NavbarCMS";
import Sidebar from "@/components/Sidebar";

export default function CMSMessagesPage() {
  
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="p-4 xl:ml-80">
        <NavbarCMS page={"Messages"} />
        <div className="mt-12">
          <div className="mb-4 grid grid-cols-1 gap-6">
            <ChatAdmin />
          </div>
        </div>
        <div className="text-blue-gray-600 mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
