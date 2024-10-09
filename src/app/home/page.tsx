import Image from "next/image";
import Header from "@/components/home/header";
import BookingForm from "@/components/home/BookingForm";
import Hero from "@/components/home/hero";
import About from "@/components/home/About";
import Offers from "@/components/home/Offers";
import { useRouter } from 'next/router';
import Footer from "@/components/home/Footer";
import HotelList from "@/components/home/HotelList";
import RegionalHighlights from "@/components/home/Discover";
import Discover from "@/components/home/Discover";
import Sanatorium from "@/components/Sanatorium";
import Wellness from "@/components/home/Wellness";
import Other from "@/components/home/Other";

export  default function HomePage(){
    return(

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