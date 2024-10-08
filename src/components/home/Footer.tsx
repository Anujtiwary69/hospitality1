// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faWeibo, faWeixin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className=" text-white py-8" style={{backgroundColor:'#355a97 !important;'}}>
            <div className="container">
                <div className="row mb-3" style={{borderBottom:"solid 1px #000"}}>
                    <div className="col-3">
                        <img src="/image/logo.png" alt="Company Logo" className="w-24"
                             style={{width: "140px", marginTop: "20px"}}/>
                    </div>
                    <div className="col-8 mb-3" >
                       <h2 style={{fontFamily:"Poppins"}}>ELEVATING STAYS</h2>
                        <p style={{fontFamily:"Poppins"}}>From Mountain Heights to City Lights</p>
                    </div>
                </div>
            </div>
            <div className="container mx-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <div className="mb-4">
                        <div className="footer-widget-title">
                            <h5 className="mb-2" style={{fontFamily:"Poppins"}}>Corporate</h5>
                        </div>

                        <div className="footer-widget-menu">
                            <ul>
                                <li><Link href="#">About </Link></li>
                                <li><Link href="#">Mision </Link></li>
                                <li><Link href="#">Vision</Link></li>
                                <li><Link href="#">Executive Team</Link></li>
                                <li><Link href="#">Portfolio</Link></li>
                                <li><Link href="#">Press</Link></li>
                                <li><Link href="#">Contact Us</Link></li>

                            </ul>
                        </div>

                        </div>

                    </div>
                    <div>
                    <h5 className="mb-2" style={{fontFamily:"Poppins"}}>Explore</h5>
                    <div className="footer-widget-menu">
                        <ul>
                            <li><Link href="#">Hotels</Link></li>
                            <li><Link href="#">Sanatorium</Link></li>
                            <li><Link href="#">Wellness</Link></li>
                            <li><Link href="#">Dine</Link></li>
                            <li><Link href="#">Meet & Celebrate</Link></li>
                            <li><Link href="#">Shop</Link></li>
                            <li><Link href="#">Offers</Link></li>

                        </ul>
                    </div>

                </div>
                <div>
                    <h5 className=" mb-2" style={{fontFamily:"Poppins"}}>Support</h5>
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
                        <h5 className="mb-2" style={{fontFamily:"Poppins"}}>Connect</h5>
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
                                    placeholder="Enter email to subscribe"
                                    className="p-2 rounded text-black w-full"
                                    style={{border: "solid 1px #2c2c2d !important;"}}
                                />
                                <button
                                    type="submit"

                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-8 text-center">
                <p className="text-sm">&copy; 2024 - Grand Chortoq Resort Hotels & Resorts. All rights reserved</p>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li><Link href="#">Terms & Conditions</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Cookie preferences</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;