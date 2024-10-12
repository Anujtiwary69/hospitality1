// components/Footer.tsx

"use client"
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faWeibo, faWeixin } from '@fortawesome/free-brands-svg-icons';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const lang = "/" + i18n.language
    return (
        <footer className=" text-white py-8" style={{backgroundColor:'#355a97 !important;'}}>
            <div className="container">
                <div className="row mb-3" style={{borderBottom:"solid 1px #000"}}>
                    <div className="col-3">
                        <img src="/image/logo.png" alt="Company Logo" className="w-24"
                             style={{width: "140px", marginTop: "20px"}}/>
                    </div>
                    <div className="col-8 mb-3" >
                       <h2 style={{fontFamily:"Poppins"}}>{t('footer:elevating_stays')}</h2>
                        <p style={{fontFamily:"Poppins"}}>{t('footer:from_mountain_heights')}</p>
                    </div>
                </div>
            </div>
            <div className="container mx-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <div className="mb-4">
                        <div className="footer-widget-title">
                            <h5 className="mb-2" style={{fontFamily:"Poppins"}}>{t('footer:corporate')}</h5>
                        </div>

                        <div className="footer-widget-menu">
                            <ul>
                                <li><Link href="#">{t('footer:about')} </Link></li>
                                <li><Link href="#">{t('footer:mission')} </Link></li>
                                <li><Link href="#">{t('footer:vision')}</Link></li>
                                <li><Link href="#">{t('footer:executive_team')}</Link></li>
                                <li><Link href="#">{t('footer:portfolio')}</Link></li>
                                <li><Link href="#">{t('footer:press')}</Link></li>
                                <li><Link href="#">{t('footer:contact_us')}</Link></li>

                            </ul>
                        </div>

                        </div>

                    </div>
                    <div>
                    <h5 className="mb-2" style={{fontFamily:"Poppins"}}>{t('footer:explore')}</h5>
                    <div className="footer-widget-menu">
                        <ul>
                            <li><Link href="#">{t('footer:hotels')}</Link></li>
                            <li><Link href={t(`${lang}/sanatorium`)}>{t('footer:sanatorium')}</Link></li>
                            <li><Link href={t(`${lang}/wellness`)}>{t('footer:wellness')}</Link></li>
                            <li><Link href={t(`${lang}/dine`)}>{t('footer:dine')}</Link></li>
                            <li><Link href={t(`${lang}/meet`)}>{t('footer:meet_and_celebrate')}</Link></li>
                            <li><Link href={t(`${lang}/shop`)}>{t('footer:shop')}</Link></li>
                            <li><Link href="#">{t('footer:offers')}</Link></li>

                        </ul>
                    </div>

                </div>
                <div>
                    <h5 className=" mb-2" style={{fontFamily:"Poppins"}}>{t('footer:support')}</h5>
                    <div className="footer-widget-menu">
                        <ul>
                            <li style={{}}>
                                <Link href="#">  <i className="bi bi-telephone-fill"/>
                                +998900363111</Link>
                            </li>
                            <li style={{}}>
                                <Link href="#">  <i className="bi bi-envelope"/>
                                CESC@grandchortoqresort.com</Link>
                            </li>
                            <li >
                                <Link href="#" style={{ lineHeight:"1.3"}}>  <i className="bi bi-geo-alt-fill"/>
                                7, Namunaviy street, Muchum SHFY<br/> Sohibkor MFY, Chartak area, Namangan district,
                                Uzbekistan</Link>
                            </li>
                        </ul>
                    </div>

                        {/*<h5 className="font-bold mt-8 mb-4">CORPORATE SITE</h5>*/}
                        {/*<ul>*/}
                        {/*    <li><Link href="#">withBanyan</Link></li>*/}
                        {/*    <li><Link href="#">Banyan Global Foundation</Link></li>*/}
                        {/*    <li><Link href="#">Private Collection</Link></li>*/}
                        {/*    <li><Link href="#">Sanctuary Club</Link></li>*/}
                        {/*    <li><Link href="#">Careers</Link></li>*/}
                        {/*</ul>*/}
                    </div>
                    <div>
                        <h5 className="mb-2" style={{fontFamily:"Poppins"}}>{t('footer:connect')}</h5>
                        <ul className="flex space-x-4">
                            <li><Link href="#"><i className="fab fa-facebook-f" style={{fontSize:"20px"}}></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" style={{fontSize:"20px"}}></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in" style={{fontSize:"20px"}}></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube" style={{fontSize:"20px"}}></i></Link></li>

                        </ul>
                        <div className="single-newsletter-box">


                            <form className="mt-4">
                                <input
                                    type="email"
                                    placeholder={t('footer:subscribe_prompt')}
                                    className="p-2 rounded text-black w-full"
                                    style={{border: "solid 1px #2c2c2d !important;"}}
                                />
                                <button
                                    type="submit"

                                >
                                    {t('footer:subscribe')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-8 text-center">
                <p className="text-sm mb-0" style={{fontFamily:"Poppins"}}>&copy; {t('footer:copyright')}</p>
                <ul className="flex justify-center space-x-4 ">
                    <li><Link href="#" style={{fontFamily:"Poppins"}}>{t('footer:terms_conditions')}</Link></li>
                    <li><Link href="#" style={{fontFamily:"Poppins"}}>{t('footer:privacy_policy')}P</Link></li>
                    <li><Link href="#" style={{fontFamily:"Poppins"}}>{t('footer:cookie_preferences')}</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;