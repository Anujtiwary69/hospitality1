import React from 'react';

export default function Wellness(){
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
                                            src="/assets/images/well.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12  upper">
                        <div className="section-title two" data-cue="zoomIn">
                            <h4>WELLNESS</h4>
                            <h1>Start your journey of renewal</h1>
                            {/*<h1>Californta, Usa</h1>*/}
                            <p className="section-desc-2">
                                At Chortoq Hospitality, wellness is a way of life. Our expansive wellness offerings are designed to cater to every aspect of well-being, blending relaxation, fitness, and rejuvenation in harmony with nature.
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

    );
};

