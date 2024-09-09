import React from 'react';

export default function About(){
    return (
        <div className="about-area pt-40">
            <div className="container mt-40">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-12  upper">
                        <div className="section-title two" data-cue="zoomIn">
                            {/*<h4>ABOUT CHORTOQ HOSPITALITY</h4>*/}
                            <h1>ABOUT CHORTOQ HOSPITALITY</h1>
                            {/*<h1>Californta, Usa</h1>*/}
                            <p className="section-desc-2">
                                Discover the art of exceptional hospitality with Chortoq Hospitality, where innovation meets tradition. Established under Chartak Resort JV LLC, we are more than a hotel management company; we are your trusted partner in creating unforgettable guest experiences. Our fascinating story defines what it truly means to be extraordinary from luxury to lifestyle and budget hotels and resorts.
                            </p>
                        </div>


                        {/*<div className="animation-bar" data-cue="zoomIn"></div>*/}
                        <div className="luxury-button" data-cue="zoomIn">
                            <a href="/about.html">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row" data-cue="zoomIn">
                            <div className="about_list owl-carousel">
                                <div className="col-md-12">
                                    <div className="about-thumb">
                                        <img
                                            src="/assets/images/about.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

