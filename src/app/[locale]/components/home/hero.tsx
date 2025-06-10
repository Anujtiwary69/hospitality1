"use client"
import React from 'react';
import {useTranslation} from "react-i18next";
import styles from './HeroBanner.module.css';


export default function Hero() {
    const { t, i18n } = useTranslation();
    const lang = "/" + i18n.language
    return (
        <div className="header-Hero">
            <div className="overlay" />
            {/* The HTML5 video element that will create the background video on the header */}
            <video
                playsInline={true}
                autoPlay={true}
                muted={true}
                loop={true}
            >
                <source
                    src="/assets/images/slider/video.mp4"
                    type="video/mp4"
                />
            </video>
            {/* The header content */}
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="hero-content">
                        <h4>{t('home:designed_for_you')}</h4>
                        <h1>{t('home:crafting_experiences')}</h1>
                        <div className="luxury-button">
                            <a href={`${lang}/about`} className="hero_button">{t('home:discover_more')}</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    );
}