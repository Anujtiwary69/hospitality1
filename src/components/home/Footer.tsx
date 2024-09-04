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
                        <img src="/image/GCR.png" alt="Company Logo" className="w-24"
                             style={{width: "140px", marginTop: "20px"}}/>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#">&nbsp;&nbsp;&nbsp;
                                    <FontAwesomeIcon icon={faFacebookF} className=" hover:text-gray-300" style={{color:'#fff'}}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">&nbsp;&nbsp;&nbsp;
                                    <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-gray-300" style={{color:'#fff'}}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">&nbsp;&nbsp;&nbsp;
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:text-gray-300" style={{color:'#fff'}}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">&nbsp;&nbsp;&nbsp;
                                    <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-gray-300" style={{color:'#fff'}}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex space-x-4">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-weibo"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-weixin"></i></Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-4">SITE MAP</h5>
                    <ul>
                        <li><Link href="#">Hotels</Link></li>
                        <li><Link href="#">Sanatorium</Link></li>
                        <li><Link href="#">Spa & Wellness</Link></li>
                        <li><Link href="#">Dining</Link></li>
                        <li><Link href="#">Meetings & Events</Link></li>
                        <li><Link href="#">Shopping</Link></li>
                        <li><Link href="#">Offers</Link></li>

                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-4">OUR PRODUCTS</h5>
                    <ul>
                        <li><Link href="#">Essentials</Link></li>
                        <li><Link href="#">e-Gifting</Link></li>
                    </ul>
                    <h5 className="font-bold mt-8 mb-4">CORPORATE SITE</h5>
                    <ul>
                        <li><Link href="#">withBanyan</Link></li>
                        <li><Link href="#">Banyan Global Foundation</Link></li>
                        <li><Link href="#">Private Collection</Link></li>
                        <li><Link href="#">Sanctuary Club</Link></li>
                        <li><Link href="#">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-4">CONTACT US</h5>
                    <ul>
                        <li><Link href="#">Brand Story</Link></li>
                    </ul>
                    <h5 className="font-bold mt-8 mb-4">MEDIA</h5>
                    <ul>
                        <li><Link href="#">Press Releases</Link></li>
                        <li><Link href="#">Under the Grand Chortoq Resort</Link></li>
                    </ul>
                    <form className="mt-4">
                        <input
                            type="email"
                            placeholder="Enter email to subscribe"
                            className="p-2 rounded text-black w-full"
                        />
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-white text-blue-500 rounded"
                        >
                            Subscribe
                        </button>
                    </form>
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