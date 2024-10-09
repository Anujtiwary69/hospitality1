import Script from "next/script";

export default  function JSSection(){
    return(
        <>
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

            <Script src="/assets/js/theme.js" strategy="lazyOnload"></Script>

            <Script src="/assets/js/coustom.js"></Script>

            <Script src="/assets/js/jquery.barfiller.js"></Script>

            <Script src="/assets/js/scrollCue.min.js" strategy="lazyOnload"></Script>

            <Script type="text/javascript" src="/assets/js/moment.min.js"></Script>
            <Script type="text/javascript" src="/assets/js/daterangepicker.min.js"></Script>
            <Script type="text/javascript" src="/assets/js/custom.js"></Script>



        </>
    )
}