"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Press() {
    const {t} = useTranslation();
    return(
        <>
            <DefaultHero
                imageName="press.png"
                title={t('press:press_section_title')}
                subTitle=""
            />
            <br/>
            <div className="room-title-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container">
                                <h2>{t('press:press_intro_title')}</h2>
                                <h4>{t('press:press_intro_description')}</h4>
                                <p>{t('press:press_intro_details')}</p>
                                {/*<p>{t('press:press_intro_details')}</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}