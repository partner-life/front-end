import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Partner of Life",
  description: "Help your wedding come true app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key="SB-Mid-client-bulaj2Anh8OW93pT"
        ></script>
        <script src="https://accounts.google.com/gsi/client" async></script>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
