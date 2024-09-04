import Image from "next/image";
import Header from "@/components/home/header";
import BookingBar from "@/components/home/BookingForm";
import Hero from "@/components/home/hero";
import About from "@/components/home/About";
import Offers from "@/components/home/Offers";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div  className="bg-white">
        <Hero/>
      <div className="w-4/5 md:w-3/5 ml-[10%] md:ml-[22%] rate-container">
        <BookingBar/>
      </div>
      <About/>
      <Offers/>
    </div>
  );
}
