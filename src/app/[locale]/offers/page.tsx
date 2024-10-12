"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Offers() {
    const {t} = useTranslation();
    return(
        <>
            <DefaultHero
                imageName="offers.png"
                title={t('offers:unlock_unforgettable_experiences_subtitle')}
                subTitle={t('offers:unlock_unforgettable_experiences_title')}
            />
            <br/>
            <div className="room-title-area" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container" >
                                <h2>{t('offers:exclusive_offers_title')}</h2>
                                <h4>{t('offers:exclusive_offers_subtitle')}</h4>
                                <p>{t('offers:exclusive_offers_description')}</p>
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
                                <h4>{t('offers:first_to_experience_subtitle')}</h4>
                                <h1>{t('offers:first_to_experience_title')}</h1>
                                <p className="section-desc-2">
                                    {t('offers:first_to_experience_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/offers/f1.png'
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
                                                src='/assets/images/offers/f2.png'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('offers:early_bird_offer_subtitle')}</h4>
                                <h1>{t('offers:early_bird_offer_title')}</h1>
                                <p className="section-desc-2">
                                    {t('offers:early_bird_offer_description')}
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
                                <img src="/assets/images/offers/f3.png" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('offers:stay_longer_save_more_subtitle')}</h4>
                                <h1>{t('offers:stay_longer_save_more_title')}</h1>
                                <p className="section-desc-2">
                                    {t('offers:stay_longer_save_more_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/offers/f4.png" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('offers:royal_suite_subtitle')}</h4>
                                <h1>{t('offers:royal_suite_title')}</h1>
                                <p className="section-desc-2">
                                    {t('offers:royal_suite_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/offers/f5.png" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('offers:family_getaway_package_subtitle')}</h4>
                                <h1>{t('offers:family_getaway_package_title')}</h1>
                                <p className="section-desc-2">
                                    {t('offers:family_getaway_package_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*<div className="about-area pt-40">*/}
            {/*    <div className="container mt-40">*/}
            {/*        <div className="row align-items-center">*/}
            {/*            <div className="col-lg-6 col-md-12 upper">*/}
            {/*                <div className="section-title two" data-cue="zoomIn">*/}
            {/*                    <h4>{t('offers:cakes_flowers_subtitle')}</h4>*/}
            {/*                    <h1>{t('offers:cakes_flowers_title')}</h1>*/}
            {/*                    <p className="section-desc-2">*/}
            {/*                        {t('offers:cakes_flowers_description')}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-6 col-md-12">*/}
            {/*                <div className="row" data-cue="zoomIn">*/}
            {/*                    <div className="about_list owl-carousel">*/}
            {/*                        <div className="col-md-12">*/}
            {/*                            <div className="about-thumb">*/}
            {/*                                <img*/}
            {/*                                    src='/assets/images/offers/m6.jpg'*/}
            {/*                                    alt={t('dine:delices_title')}*/}
            {/*                                />*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row align-items-center">*/}
            {/*            <div className="col-lg-6 col-md-12">*/}
            {/*                <div className="row" data-cue="zoomIn">*/}
            {/*                    <div className="about_list owl-carousel">*/}
            {/*                        <div className="col-md-12">*/}
            {/*                            <div className="about-thumb">*/}
            {/*                                <img*/}
            {/*                                    src='/assets/images/offers/m7.jpg'*/}
            {/*                                    alt={t('dine:delices_title')}*/}
            {/*                                />*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-6 col-md-12 upper">*/}
            {/*                <div className="section-title two" data-cue="zoomIn">*/}
            {/*                    <h4>{t('offers:leisure_subtitle')}</h4>*/}
            {/*                    <h1>{t('offers:leisure_title')}</h1>*/}
            {/*                    <p className="section-desc-2">*/}
            {/*                        {t('offers:leisure_description')}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>

    );
}