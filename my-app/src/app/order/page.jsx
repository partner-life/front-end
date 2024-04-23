"use client";

import { fetchOrderHistory } from "@/action/action";
import ChatPublic from "@/components/ChatPublic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderCard from "@/components/OrderCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function OrderPage() {
  const [order, setOrder] = useState([]);
  const cookies = new Cookies();
  const fetchOrder = async () => {
    const result = await fetchOrderHistory();
    setOrder(result);
  };
  const router = useRouter();

  const handlePayment = async (orderId, gross_amount, item_name) => {
    try {
      // await payment(order[0].price, order[0]._id, order[0].Package[0].name);
      // const order_id = order[order.length - 1]._id;
      // const gross_amount = order[order.length - 1].price;
      // const item_name = order[order.length - 1].Package[0].name;

      // Mengirim permintaan pembuatan transaksi

      const order_id = orderId;
      const createTransactionResponse = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/create-transaction/" + orderId,
        {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: cookies.get("Authorization"),
          },
          body: JSON.stringify({ gross_amount, order_id, item_name }),
        }
      );

      if (!createTransactionResponse.ok) {
        const result = await createTransactionResponse.json();
        return result;
      }

      // Mendapatkan data JSON dari respons pertama
      const createTransactionData = await createTransactionResponse.json();
      const { token } = createTransactionData;

      window.snap.pay(token, {
        onSuccess: async () => {
          router.refresh();
          // try {
          //   const handleAfterPaymentResponse = await fetch(
          //     process.env.NEXT_PUBLIC_BASE_URL + "/handling-after-payment",
          //     {
          //       method: "POST",
          //       headers: {
          //         Authorization: cookies.get("Authorization"),
          //       },
          //     }
          //   );

          //   if (!handleAfterPaymentResponse.ok) {
          //     const result = await handleAfterPaymentResponse.json();
          //     return;
          //   }
          // } catch (error) {
          //   console.error("Error handling after payment:", error);
          // }
        },
      });
    } catch (error) {
      console.error("Error handling payment:", error);
    }
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
