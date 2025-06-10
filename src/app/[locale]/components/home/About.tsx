"use client"
import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";

export default function About() {

    const { t, i18n } = useTranslation();
    const lang = "/" + i18n.language
    return (
        <div className="about-area pt-40">
            <div className="container mt-40">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-12  upper">
                        <div className="section-title two" data-cue="zoomIn">
                            {/*<h4>ABOUT CHORTOQ HOSPITALITY</h4>*/}
                            <h1>{t('home:about_chortoq_hospitality')}</h1>
                            {/*<h1>Californta, Usa</h1>*/}
                            <p className="section-desc-2">
                                {t('home:about_text')}
                            </p>
                        </div>

                        {/*<div className="animation-bar" data-cue="zoomIn"></div>*/}
                        <div className="luxury-button" data-cue="zoomIn">
                            <a href={`${lang}/about`}> {t('home:learn_more')}</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row" >
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

