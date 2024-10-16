"use client"
import React from "react";

import {useTranslation} from "react-i18next";

export default function Sanatorium(){
    const { t,i18n } = useTranslation();
    const lang = "/" + i18n.language
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
                            <h4>{t('home:Well-Being')}</h4>
                            <h1>{t('home:chortoq_sanatorium')}</h1>
                            {/*<h1>Californta, Usa</h1>*/}
                            {/*<p className="section-desc-2">*/}
                            {/*    Well-Being and Rehabilitation Retreat </p>*/}
                            <p className="section-desc-2">
                                {t('home:sanatorium_description')}</p>
                        </div>


                        {/*<div className="animation-bar" data-cue="zoomIn"></div>*/}
                        <div className="luxury-button" data-cue="zoomIn">
                            <a href={t(`${lang}/sanatorium`)}>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}