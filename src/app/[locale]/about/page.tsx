"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import { usePathname, useSearchParams } from 'next/navigation';
import BookingForm from "@/app/[locale]/components/home/BookingForm";

export default function About() {
    const {t} = useTranslation();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const scrollToHash = () => {
            let hash = window.location.hash; // Get
            console.log("anuj");

            if (hash.startsWith('/')) {
                // Remove leading slash in hash
                hash = hash.replace('/', '');
                hash = hash.replace('/', '');
                window.location.replace(hash); // Update URL without reloading
                console.log(hash);
            }
            if(hash.endsWith('/')){
                hash = hash.replace('/', '');
                hash = hash.replace('/', '');
                window.location.replace(hash); // Update URL without reloading
                console.log(hash);
            }

            console.log(hash);
            if (hash) {
                const element = document.querySelector(hash);
                console.log('anuj11');
                console.log(element);
                if (element) {
                    const offset = 100; // Adjust this to account for a fixed header or desired offset
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - offset;

                    // Scroll down to the position with a smooth animation
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
            }
        };

        // Scroll on hash change
        const handleHashChange = () => {
            setTimeout(scrollToHash, 300); // Add delay to ensure element is fully loaded
        };

        // Scroll if hash exists on initial load
        if (window.location.hash) {
            handleHashChange();
        }

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            // Clean up event listener
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [pathname, searchParams]);

    return(
        <>
            <DefaultHero
                imageName="about.png"
                title={t('about:OURSTORY')}
                subTitle={t('about:HospitalityRooted')}
            />
            <BookingForm/>
            <br/>
            <div className="room-title-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container">
                                <h2>{t('about:about_chortoq_hospitality_title')}</h2>
                                {/*<h4>{t('about:exclusive_about_subtitle')}</h4>*/}
                                <p>{t('about:about_chortoq_hospitality_description')}</p>
                                <p>{t('about:about_chortoq_hospitality_details')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-area pt-40"  id="mission">
                <div className="container mt-40">
                    <div className="row align-items-center" >
                        <div className="col-lg-6 col-md-12 upper"  >
                            <div className="section-title two" data-cue="zoomIn" >
                                <h4>{t('about:mission_description')}</h4>
                                <h1>{t('about:mission_title')}</h1>
                                <p className="section-desc-2">
                                    {t('about:mission_details')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" >
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel" >
                                    <div className="col-md-12" >
                                        <div className="about-thumb" >
                                            <img
                                                src='/assets/images/about/a3.png'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center" id="vission">
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel" >
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/about/a1.png'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('about:vision_description')}</h4>
                                <h1>{t('about:vision_title')}</h1>
                                <p className="section-desc-2">
                                    {t('about:vision_details')}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row align-items-center" id="executive_team">
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('about:executive_team_description')}</h4>
                                <h1>{t('about:executive_team_title')}</h1>
                                <p className="section-desc-2">
                                    {t('about:executive_team_details')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/about/a2.png'
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
            <div className="room-title-area" id="portfolio">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <img src='/assets/images/about/a4.png'
                                 alt={t('dine:delices_title')}/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container">
                                <h2>{t('about:portfolio_title')}</h2>
                                <h4>{t('about:portfolio_description')}</h4>
                                <p>{t('about:portfolio_details')}</p>
                                {/*<p>{t('about:about_chortoq_hospitality_details')}</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}