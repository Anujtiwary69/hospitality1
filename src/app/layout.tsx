import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/css/main.css"
import "../../public/css/animation.css"
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import BookingBar from "@/components/home/BookingForm";
import About from "@/components/home/About";
import Offers from "@/components/home/Offers";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chortoq Hospitality",
  description: "Chortoq Hospitality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body className={inter.className}>
    <div className="bg-white">
      <Header/>
      {children}

      <Footer/>
    </div>

    </body>
    </html>
  );
}
