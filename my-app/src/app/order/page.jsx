"use client";

import { fetchOrderHistory, payment } from "@/action/action";
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

  const handlePayment = async () => {
    await payment(order.price, order._id, order.name);
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
          {order.length ? (
            <div className="px-10 w-full flex-wrap gap-5 flex justify-start items-center">
              {order.map((data, i) => {
                return (
                  <OrderCard
                    key={i}
                    order={data}
                    fetchOrder={fetchOrder}
                    handlePayment={handlePayment}
                  />
                );
              })}
            </div>
          ) : (
            <div className="px-10 w-full h-[480px] gap-5 flex justify-center items-center">
              <div className="flex flex-col">
                <img
                  className="flex justify-center items-center mb-5 ml-[75px] h-[150px] w-[150px]"
                  src="/no-order.png"
                  alt="date"
                />
                <div className="flex justify-center items-center text-2xl font-bold mb-2">
                  No Orders
                </div>
                <div className="flex justify-center items-center">
                  You don't have any orders in your history.
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}
