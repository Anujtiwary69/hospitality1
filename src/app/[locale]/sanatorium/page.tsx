"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';

import DefaultHero from "@/app/[locale]/components/DefaultHero";

// Define the structure of each section
interface SectionType {
    title: string;
    subTitle: string;
    image: string;
    description: string; // or description: string;
}

const Sanatorium = () => {
    const { t } = useTranslation();

    const sections: SectionType[] = t('sanatorium:sanatorium.sections', { returnObjects: true }) as SectionType[];

    const range = Array.from({ length: 3 }, (_, index) => index + 1); // Generates numbers 1 to 10

    return (
        <>
            <DefaultHero
                imageName="sanatorium.png"
                title={t('sanatorium:sanatorium.hero.title')}
                subTitle={t('sanatorium:sanatorium.hero.subTitle')}
            />
            <br />
            <div className="room-title-area" style={{ paddingBottom: '30px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container" style={{ width: "70%" }}>
                                <h2>{t('sanatorium:sanatorium.intro.mainTitle')}</h2>
                                <h4>{t('sanatorium:sanatorium.intro.subTitle')}</h4>
                                <p>{t('sanatorium:sanatorium.intro.description1')}</p>
                                <p>{t('sanatorium:sanatorium.intro.description2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sanatorium-sections">
                <div className="about-area pt-40">
                    <div className="container mt-40">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 upper">
                                <div className="section-title two" data-cue="zoomIn">
                                    <h4>{t(sections[0].subTitle)}</h4>
                                    <h1>{t(sections[0].title)}</h1>
                                    <p className="section-desc-2">
                                        {t(sections[0].description)}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row" data-cue="zoomIn">
                                    <div className="about_list owl-carousel">
                                        <div className="col-md-12">
                                            <div className="about-thumb">
                                                <img
                                                    src={t(sections[0].image)}
                                                    alt={t(sections[0].title)}
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
                                                    src={t(sections[1].image)}
                                                    alt={t(sections[1].title)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 upper">
                                <div className="section-title two" data-cue="zoomIn">
                                    <h4>{t(sections[1].subTitle)}</h4>
                                    <h1>{t(sections[1].title)}</h1>
                                    <p className="section-desc-2">
                                        {t(sections[1].description)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container mt-60">
                        <div className="row">
                            {range.map((number) => (
                                <div className="col-lg-4" key={number}>
                                    <div className="section-title two">
                                        <img src={t(sections[number+1].image)} alt={t(sections[number+1].title)} />
                                        <h4 className="mt-3">{t(sections[number+1].subTitle)}</h4>
                                        <h1>{t(sections[number+1].title)}</h1>
                                        <p className="section-desc-2">
                                            {t(sections[number+1].description)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="about-area pt-40">
                    <div className="container mt-40">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 upper">
                                <div className="section-title two" data-cue="zoomIn">
                                    <h4>{t(sections[5].subTitle)}</h4>
                                    <h1>{t(sections[5].title)}</h1>
                                    <p className="section-desc-2">
                                        {t(sections[5].description)}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row" data-cue="zoomIn">
                                    <div className="about_list owl-carousel">
                                        <div className="col-md-12">
                                            <div className="about-thumb">
                                                <img
                                                    src={t(sections[5].image)}
                                                    alt={t(sections[5].title)}
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
                            {range.map((number) => (
                                <div className="col-lg-4" key={number}>
                                    <div className="section-title two">
                                        <img src={t(sections[number+5].image)} alt={t(sections[number+5].title)} />
                                        <h4 className="mt-3">{t(sections[number+5].subTitle)}</h4>
                                        <h1>{t(sections[number+5].title)}</h1>
                                        <p className="section-desc-2">
                                            {t(sections[number+5].description)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="about-area pt-40">
                    <div className="container mt-40">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="row" data-cue="zoomIn">
                                    <div className="about_list owl-carousel">
                                        <div className="col-md-12">
                                            <div className="about-thumb">
                                                <img
                                                    src={t(sections[9].image)}
                                                    alt={t(sections[9].title)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 upper">
                                <div className="section-title two" data-cue="zoomIn">
                                    <h4>{t(sections[9].subTitle)}</h4>
                                    <h1>{t(sections[9].title)}</h1>
                                    <p className="section-desc-2">
                                        {t(sections[9].description)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 upper">
                                <div className="section-title two" data-cue="zoomIn">
                                    <h4>{t(sections[10].subTitle)}</h4>
                                    <h1>{t(sections[10].title)}</h1>
                                    <p className="section-desc-2">
                                        {t(sections[10].description)}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row" data-cue="zoomIn">
                                    <div className="about_list owl-carousel">
                                        <div className="col-md-12">
                                            <div className="about-thumb">
                                                <img
                                                    src={t(sections[10].image)}
                                                    alt={t(sections[10].title)}
                                                />
                                            </div>
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
};

export default Sanatorium;