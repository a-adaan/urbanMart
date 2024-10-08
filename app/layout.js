import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CopyRight from "@/components/CopyRight";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UrbanMart",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Header />
          <Navbar />
          {children}
          <Footer />
          <CopyRight />
        </SessionProvider>
        <ToastContainer
          containerId="GlobalApplicationToast"
          position="top-center"
          autoClose={1500}
          limit={1}
        />
      </body>
    </html>
  );
}
