import React from "react";

export default function Sanatorium(){
    return (
        <div className="about-area pt-40">
            <div className="container mt-40">
                <div className="row align-items-center">


                    <div className="col-lg-6 col-md-12">
                        <div className="row" data-cue="zoomIn">
                            <div className="about_list owl-carousel">
                                <div className="col-md-12">
                                    <div className="about-thumb">
                                        <img
                                            src="/assets/images/sana.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12  upper">
                        <div className="section-title two" data-cue="zoomIn">
                            {/*<h4>ABOUT CHORTOQ HOSPITALITY</h4>*/}
                            <h1>CHORTOQ SANATORIUM </h1>
                            {/*<h1>Californta, Usa</h1>*/}
                            <p className="section-desc-2">
                                Well-Being and Rehabilitation Retreat </p>
                            <p className="section-desc-2">
                                The Chortoq Sanatorium is a premier well-being and rehabilitation center, nestled in the
                                serene environment of the Grand Chortoq Resort, offering a holistic approach to health
                                and recovery. </p>
                                <p className="section-desc-2">
                                    At the heart of the Chortoq Sanatorium's treatments is the renowned Chortoq Mineral
                                    Water - a pure embodiment of nature's essence.

                                </p>
                        </div>


                        {/*<div className="animation-bar" data-cue="zoomIn"></div>*/}
                        <div className="luxury-button" data-cue="zoomIn">
                            <a href="/about.html">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}