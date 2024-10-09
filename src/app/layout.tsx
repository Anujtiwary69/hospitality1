import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "../../public/css/main.css"
import "../../public/css/animation.css"
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import BookingBar from "@/components/home/BookingForm";
import About from "@/components/home/About";
import Offers from "@/components/home/Offers";
import Footer from "@/components/home/Footer";
import {ReactLenis} from "@studio-freight/react-lenis";
import Script from "next/script";
import Head from "next/head";
import HeadSection from "@/components/HeadSection";
import JSSection from "@/components/JSSection";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-white">
        <>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>Chortoq Hospitality </title>
            <link rel="canonical"/>
            <meta name="deScription" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {/* Favicon */}
            <HeadSection/>
        </>
        <body>
        <div className="bg-white">

            <Header/>
            {children}
            <JSSection/>
            <Footer/>
        </div>

        </body>
        </html>
    );
}
