// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faWeibo, faWeixin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className=" text-white py-8" style={{backgroundColor:'#355a97 !important;'}}>
            <div className="container mx-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <div className="mb-4">

                        <h5 className="font-bold mb-4">Corporate</h5>
                        <ul>
                            <li><Link href="#">About </Link></li>
                            <li><Link href="#">Mision </Link></li>
                            <li><Link href="#">Vision</Link></li>
                            <li><Link href="#">Executive Team</Link></li>
                            <li><Link href="#">Portfolio</Link></li>
                            <li><Link href="#">Press</Link></li>
                            <li><Link href="#">Contact Us</Link></li>

                        </ul>
                        <img src="/image/logo.png" alt="Company Logo" className="w-24"
                             style={{width: "140px", marginTop: "20px"}}/>
                    </div>

                </div>
                <div>
                    <h5 className="font-bold mb-4">Explore</h5>
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
                <div>
                    <h5 className="font-bold mb-4">Support</h5>
                    <ul>
                        <li style={{color:"#032549"}}>
                            <i className="bi bi-telephone-fill"/>
                            +980 (1234) 567 220
                        </li>
                        <li style={{color:"#032549"}}>
                            <i className="bi bi-envelope"/>
                            example@yahoo.com
                        </li>
                        <li style={{color:"#032549"}}>
                            <i className="bi bi-geo-alt-fill"/>
                            102/B New Elephant Rd
                            <br/>
                            Dhaka - 1212
                        </li>
                    </ul>

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
                    <h5 className="font-bold mb-4">Contact us</h5>
                    <ul className="flex space-x-4">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>

                    </ul>
                    <div className="single-newsletter-box">


                    <form className="mt-4">
                        <input
                            type="email"
                            placeholder="Enter email to subscribe"
                            className="p-2 rounded text-black w-full"
                            style={{border:"solid 1px #2c2c2d !important;"}}
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