"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";
import BookingForm from "@/app/[locale]/components/home/BookingForm";

export default function Contact() {
    const {t} = useTranslation();
    return (
        <>
            <DefaultHero
                imageName="contact.png"
                title={t('press:questions_get_in_touch')}
                subTitle={t('press:questions_title')}
            />
            <BookingForm/>
            <br/>
            {/*<div className="room-title-area">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row align-items-center">*/}
            {/*            <div className="col-lg-12 text-center">*/}
            {/*                <div className="section-title two center container">*/}
            {/*                    <h2>{t('press:contact_us_subtitle')}</h2>*/}
            {/*                    <h4>{t('press:contact_us_subtitle')}</h4>*/}
            {/*                    <p>{t('press:contact_us_description')}</p>*/}
            {/*                    /!*<p>{t('press:contact_us_description')}</p>*!/*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="contact-area style-two inner">
                <div className="container">
                    <div className="row add-backgroun">
                        <div className="col-lg-6">
                            <div className="section-title two">
                                <h4>{t('press:contact_us_subtitle')}</h4>
                                <h2 className="mb-4">{t('press:contact_us_title')}</h2>
                                <p>{t('press:contact_us_description')}</p>
                            </div>
                            <div className="single-contact-box">
                                <div className="contact-icon">
                                    <i className="bi bi-telephone-fill"/>
                                </div>
                                <div className="contact-title">
                                    <h4>Call Us Now</h4>
                                    <p>+998900363111</p>
                                </div>
                            </div>
                            <div className="single-contact-box">
                                <div className="contact-icon">
                                    <i className="bi bi-envelope"/>
                                </div>
                                <div className="contact-title">
                                    <h4>Sent Email</h4>
                                    <p>CESC@grandchortoqresort.com</p>
                                </div>
                            </div>
                            <div className="single-contact-box">
                                <div className="contact-icon">
                                    <i className="bi bi-geo-alt-fill"/>
                                </div>
                                <div className="contact-title">
                                    <h4>Our Locations</h4>
                                    <p>
                                        7, Namunaviy street, Muchum SHFY
                                        Sohibkor MFY, Chartak area, Namangan district, Uzbekistan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form
                                action="https://formspree.io/f/myyleorq"
                                method="POST"
                                id="dreamit-form"
                            >
                                <div className="single-contact-form">
                                    <div className="contact-content">
                                        <h4>Get In Touch</h4>
                                    </div>
                                    <div className="single-input-box">
                                        <input
                                            type="text"
                                            name="Name"
                                            placeholder="Your Name"

                                        />
                                    </div>
                                    <div className="single-input-box">
                                        <input
                                            type="text"
                                            name="Email"
                                            placeholder="Enter Your Email"

                                        />
                                    </div>
                                    <div className="single-input-box">
                                        <input
                                            type="text"
                                            name="Email"
                                            placeholder="Enter Your Subject"

                                        />
                                    </div>
                                    <div className="single-input-box">
              <textarea
                  name="Message"
                  id="Message"
                  placeholder="Write Message"
                  defaultValue={""}
              />
                                    </div>
                                    <div className="single-input-box">
                                        <button type="submit">Sent Message</button>
                                    </div>
                                </div>
                            </form>
                            <div id="status"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="google-map">
                <div className="row">
                    <div className="col-md-12">
                        <div className="">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=%207,%20Namunaviy%20street,%20Muchum%20SHFY,%20Sohibkor%20MFY,%20Chartak%20area,%20Namangan%20district,%20Uzbekistan+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                width={1920}
                                height={520}
                                style={{border: 0}}

                                aria-hidden="false"
                                tabIndex={0}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}