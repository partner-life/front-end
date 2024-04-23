import ServerProtectedComponent from "@/components/ServerProtectedComponent";
import Head from "next/head";

export default function OrderLayout({ children }) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.MIDTRANS_CLIENT_KEY}
        ></script>
      </Head>
      <ServerProtectedComponent>{children}</ServerProtectedComponent>;
    </>
  );
}
