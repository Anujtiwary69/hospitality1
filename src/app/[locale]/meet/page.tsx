"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Meet() {
    const {t} = useTranslation();
    return(
        <>
            <DefaultHero
                imageName="meet.png"
                title={t('meet:meet_celebrate_subtitle')}
                subTitle={t('meet:meet_celebrate_title')}
            />
            <br/>
            <div className="room-title-area" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container" >
                                <h2>{t('meet:meet_celebrate_section_title')}</h2>
                                <h4>{t('meet:meet_celebrate_intro')}</h4>
                                <p>{t('meet:meet_celebrate_description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-area pt-40">
                <div className="container mt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('meet:meet_subtitle')}</h4>
                                <h1>{t('meet:meet_title')}</h1>
                                <p className="section-desc-2">
                                    {t('meet:meet_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/meet/m1.jpg'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/meet/m2.jpg'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('meet:celebrate_subtitle')}</h4>
                                <h1>{t('meet:celebrate_title')}</h1>
                                <p className="section-desc-2">
                                    {t('meet:celebrate_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section>
                <div className="container mt-60">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/meet/m3.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('meet:catering_subtitle')}</h4>
                                <h1>{t('meet:catering_title')}</h1>
                                <p className="section-desc-2">
                                    {t('meet:catering_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/meet/m4.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('meet:service_subtitle')}</h4>
                                <h1>{t('meet:service_title')}</h1>
                                <p className="section-desc-2">
                                    {t('meet:service_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/meet/m5.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('meet:audio_visual_subtitle')}</h4>
                                <h1>{t('meet:audio_visual_title')}</h1>
                                <p className="section-desc-2">
                                    {t('meet:audio_visual_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="about-area pt-40">
                <div className="container mt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('meet:cakes_flowers_subtitle')}</h4>
                                <h1>{t('meet:cakes_flowers_title')}</h1>
                                <p className="section-desc-2">
                                    {t('meet:cakes_flowers_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/meet/m6.jpg'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/meet/m7.jpg'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('meet:leisure_subtitle')}</h4>
                                <h1>{t('meet:leisure_title')}</h1>
                                <p className="section-desc-2">
                                    {t('meet:leisure_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}