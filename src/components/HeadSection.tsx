import Script from "next/script";

export  default  function HeadSection(){
    return(
        <>
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
            <Script src="/assets/js/vendor/modernizr-3.5.0.min.js"></Script>
        </>
    )
}
