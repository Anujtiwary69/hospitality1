"use client"
import React from 'react';
import {useTranslation} from "react-i18next";
import styles from './HeroBanner.module.css';


export default function Hero() {
    const {t} = useTranslation()
    return (
        <>
            <div className="video-background-holder">
                <div className="video-background-overlay"/>
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
                <div className="video-background-content container h-100 text-center" style={{top: '40%'}}>
                    <div className="hero-content">
                        <h4>{t('home:designed_for_you')}</h4>
                        <h1>{t('home:crafting_experiences')}</h1>

                    </div>

                    <div className="luxury-button">
                        <a href="/public">{t('home:discover_more')}</a>
                    </div>

                </div>
            </div>

        </>

    );
}