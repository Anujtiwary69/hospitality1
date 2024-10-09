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
import { ReactLenis } from "@studio-freight/react-lenis";
import Script from "next/script";



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
      <title>Chortoq Hospitality  </title>
      <link rel="canonical" />
      <meta name="deScription" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      {/* Favicon */}
      <link
          rel="icon"
          type="image/png"
          sizes="56x56"
          href="/assets/favicon_io/android-chrome-512x512.png"
      />
      {/* bootstrap CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/bootstrap.min.css"
          type="text/css"
          media="all"
      />
      {/* carousel CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/owl.carousel.min.css"
          type="text/css"
          media="all"
      />
      {/* animate CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/animate.css"
          type="text/css"
          media="all"
      />
      {/* animated-text CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/animated-text.css"
          type="text/css"
          media="all"
      />
      {/* font-awesome CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/all.min.css"
          type="text/css"
          media="all"
      />
      {/* font-flaticon CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/flaticon.css"
          type="text/css"
          media="all"
      />
      {/* theme-default CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/theme-default.css"
          type="text/css"
          media="all"
      />
      {/* meanmenu CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/meanmenu.min.css"
          type="text/css"
          media="all"
      />
      {/* transitions CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/owl.transitions.css"
          type="text/css"
          media="all"
      />
      {/* venobox CSS */}
      <link
          rel="stylesheet"
          href="/assets/venobox/venobox.css"
          type="text/css"
          media="all"
      />
      {/* bootstrap icons */}
      <link
          rel="stylesheet"
          href="/assets/css/bootstrap-icons.css"
          type="text/css"
          media="all"
      />
      {/* Main Style CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/style.css"
          type="text/css"
          media="all"
      />
      {/* responsive CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/responsive.css"
          type="text/css"
          media="all"
      />
      {/* ScrollCue CSS */}
      <link
          rel="stylesheet"
          href="/assets/css/scrollCue.css"
          type="text/css"
          media="all"
      />
      <link
          rel="stylesheet"
          href="/assets/css/dark.css"
          type="text/css"
          media="all"
      />
      <link rel="stylesheet" type="text/css" href="/assets/css/daterangepicker.css"/>
      {/* modernizr js */}
    </>

    <body >
    <div className="bg-white">

      <Header/>
      {children}
      <div className="prgoress_indicator active-progress">
        <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
        >
          <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "270.456"
              }}
          />
        </svg>
      </div>

      <Script src="/assets/js/vendor/jquery-3.6.2.min.js"></Script>
      <Script src="/assets/js/popper.min.js"></Script>

      <Script src="/assets/js/bootstrap.min.js"></Script>

      <Script src="/assets/js/owl.carousel.min.js"></Script>

      <Script src="/assets/js/jquery.counterup.min.js"></Script>

      <Script src="/assets/js/waypoints.min.js"></Script>

      <Script src="/assets/js/wow.js"></Script>

      <Script src="/assets/js/imagesloaded.pkgd.min.js"></Script>

      <Script src="/assets/venobox/venobox.js"></Script>

      <Script src="/assets/js/animated-text.js"></Script>

      <Script src="/assets/venobox/venobox.min.js"></Script>

      <Script src="/assets/js/isotope.pkgd.min.js"></Script>

      <Script src="/assets/js/jquery.meanmenu.js"></Script>

      <Script src="/assets/js/jquery.scrollUp.js"></Script>

      <Script src="/assets/js/theme.js"></Script>

      <Script src="/assets/js/coustom.js"></Script>

      <Script src="/assets/js/jquery.barfiller.js"></Script>

      <Script src="/assets/js/scrollCue.min.js"></Script>

      <Script type="text/javascript" src="/assets/js/moment.min.js"></Script>
      <Script type="text/javascript" src="/assets/js/daterangepicker.min.js"></Script>
      <Script type="text/javascript" src="/assets/js/custom.js"></Script>


      <Footer/>
    </div>

    </body>
    </html>
  );
}
