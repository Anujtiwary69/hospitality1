"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";
import BookingForm from "@/app/[locale]/components/home/BookingForm";

export default function Shop() {
    const {t} = useTranslation();
    return(
        <>
            <DefaultHero
                imageName="shop.jpg"
                title={t('shop:shop_discover_enjoy_subtitle')}
                subTitle={t('shop:shop_discover_enjoy_title')}
            />
            <BookingForm/>
            <br/>
            <div className="room-title-area" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container" >
                                <h2>{t('shop:shop_with_ease_title')}</h2>
                                <h4>{t('shop:shop_with_ease_subtitle')}</h4>
                                <p>{t('shop:shop_with_ease_description')}</p>
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
                                <h4>{t('shop:gift_experience_subtitle')}</h4>
                                <h1>{t('shop:gift_experience_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:gift_experience_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/shop/s1.png'
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
                                                src='/assets/images/shop/s2.png'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('shop:caprice_boutique_subtitle')}</h4>
                                <h1>{t('shop:caprice_boutique_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:caprice_boutique_description')}
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
                                <img src="/assets/images/shop/s3.png" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('shop:pharmacy_subtitle')}</h4>
                                <h1>{t('shop:pharmacy_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:pharmacy_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/shop/s4.png" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('shop:organic_grocery_subtitle')}</h4>
                                <h1>{t('shop:organic_grocery_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:organic_grocery_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/shop/s5.png" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('shop:deli_shop_subtitle')}</h4>
                                <h1>{t('shop:deli_shop_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:deli_shop_description')}
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
                                <h4>{t('shop:glam_studio_subtitle')}</h4>
                                <h1>{t('shop:glam_studio_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:glam_studio_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/shop/s6.png'
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
                                                src='/assets/images/shop/s7.png'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('shop:sharp_suave_subtitle')}</h4>
                                <h1>{t('shop:sharp_suave_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:sharp_suave_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('shop:precision_tailoring_subtitle')}</h4>
                                <h1>{t('shop:precision_tailoring_title')}</h1>
                                <p className="section-desc-2">
                                    {t('shop:precision_tailoring_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/shop/s8.jpg'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}