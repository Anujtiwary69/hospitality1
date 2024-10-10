import Image from "next/image";
import Header from "@/app/[locale]/components/home/header";
import BookingForm from "@/app/[locale]/components/home/BookingForm";
import Hero from "@/app/[locale]/components/home/hero";
import About from "@/app/[locale]/components/home/About";
import Offers from "@/app/[locale]/components/home/Offers";
import { useRouter } from 'next/router';
import Footer from "@/app/[locale]/components/home/Footer";
import HotelList from "@/app/[locale]/components/home/HotelList";
import RegionalHighlights from "@/app/[locale]/components/home/Discover";
import Discover from "@/app/[locale]/components/home/Discover";
import Sanatorium from "@/app/[locale]/components/Sanatorium";
import Wellness from "@/app/[locale]/components/home/Wellness";
import Other from "@/app/[locale]/components/home/Other";

export default function Home() {

    return (
        <div className="bg-white text-black">
            <Hero/>

            <BookingForm/>

            <About/>
            <HotelList/>
            <Sanatorium/>
         <Other/>
            <Wellness/>
            <Offers/>

            {/*<Discover/>*/}
        </div>
    );
}
