"use client";

import { fetchOrderHistory } from "@/action/action";
import ChatPublic from "@/components/ChatPublic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderCard from "@/components/OrderCard";
import { useEffect, useState } from "react";

export default function OrderPage() {
  const [order, setOrder] = useState([]);
  const fetchOrder = async () => {
    const result = await fetchOrderHistory();
    setOrder(result);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      <Navbar />
      <ChatPublic />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="p-10 w-screen bg-white">
          <div className="flex justify-center items-center h-1/4 my-10">
            <h1 className="text-4xl font-bold">Order History</h1>
          </div>
          <div className="px-10 w-full flex flex-wrap gap-5 flex justify-start items-center">
            {order.map((data, i) => {
              return <OrderCard key={i} order={data} />;
            })}
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}
