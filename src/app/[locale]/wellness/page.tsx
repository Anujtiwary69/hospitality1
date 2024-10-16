"use client"
import {useTranslation} from "react-i18next";
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import BookingForm from "@/app/[locale]/components/home/BookingForm";

export default function Wellness() {
    const {t} = useTranslation();
    return (
        <>
            <DefaultHero
                imageName="wellness.jpg"
                title={t('wellness:harmony_health_happiness')}
                subTitle={t('wellness:BeginYourTranquilJourney')}
            />
            <BookingForm/>
            <br/>
            <div className="room-title-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container" >
                                <h2>{t('wellness:wellness')}</h2>
                                <h4>{t('wellness:wellness_journey')}</h4>
                                <p>{t('wellness:wellness_description')}</p>
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
                                <h4>{t('wellness:chortoq_club_house_subtitle')}</h4>
                                <h1>{t('wellness:chortoq_club_house')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:chortoq_club_house_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/wellness/w1.jpg'
                                                alt={t('wellness:chortoq_club_house')}
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
                                                src='/assets/images/wellness/w-new.jpg'
                                                alt={t('wellness:chortoq_club_house')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('wellness:ChortoqEquestrian_subtitle')}</h4>
                                <h1>{t('wellness:ChortoqEquestrian_title')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:ChortoqEquestrian_des')}
                                </p>
                                <div className="luxury-button" data-cue="zoomIn" >
                                    <a href="https://chortoqgrandresort.com/" target="_blank"> Learn More</a>
                                </div>

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
                                <img src="/assets/images/wellness/w2.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('wellness:YourJourney')}</h4>
                                <h1>{t('wellness:welcome_boulevard')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:welcome_boulevard_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/wellness/w3.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('wellness:EntertainmentUnder')}</h4>
                                <h1>{t('wellness:live_show_podium')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:live_show_podium_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/wellness/w4.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('wellness:GoldenHours')}</h4>
                                <h1>{t('wellness:sunset_boulevard')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:sunset_boulevard_description')}
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
                                <h4>{t('wellness:ASpace')}</h4>
                                <h1>{t('wellness:prayer_room')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:prayer_room_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/wellness/w7.jpg'
                                                alt={t('wellness:chortoq_club_house')}
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                <img src="/assets/images/wellness/w5.jpg" alt={t('wellness:AdventureAwaits')}/>
                                <h4 className="mt-3">{t('wellness:outdoor_facilities')}</h4>
                                <h1>{t('wellness:AdventureAwaits')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:outdoor_facilities_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/wellness/w6.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('wellness:GoldenHours')}</h4>
                                <h1>{t('wellness:wakatua_club')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:wakatua_club_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/wellness/w8.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4>{t('wellness:PowerYourPotential')}</h4>
                                <h1>{t('wellness:energy_fitness_club')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:energy_fitness_club_description')}
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
                                <h4>{t('wellness:PureBliss')}</h4>
                                <h1>{t('wellness:serene_spa')}</h1>
                                <p className="section-desc-2">
                                    {t('wellness:serene_spa_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/wellness/w9.jpg'
                                                alt={t('wellness:chortoq_club_house')}
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
    )
}