"use client";

import Link from 'next/link';
import React, {useState, useRef, useEffect} from 'react';
import Script from "next/script";


    const menuItems = [
        {
            name: 'Hotels',
            link: '/hotels',
            submenu: [
                { name: 'Grand Chortoq Resort', link: '/meetings' , },
                { name: 'Chortoq Boutique Hotel', link: '/events' },
                { name: 'O2Zoda Resort & Spa', link: '/conferences' },
            ],
        },
        {
            name: 'Sanatorium',
            link: '/sanatorium',
            // submenu: [
            //     { name: 'Chortoq Sanatorium', link: '/meetings' },
            //     { name: 'Chortoq Diagnostic Centre', link: '/events' },
            //     { name: 'Chortoq Laboratory', link: '/conferences' },
            //     { name: 'Physiotheraphy Centre', link: '/meetings' },
            //     { name: 'Salt Room', link: '/events' },
            //     { name: 'Balneotherapy', link: '/conferences' },
            //     { name: 'Gyneco Studio', link: '/meetings' },
            //     { name: 'Colon Hydrotherapy', link: '/events' },
            //     { name: 'Comfort Massage Centre', link: '/conferences' },
            //     { name: 'Cosmetology', link: '/conferences' },
            // ],
        },
        {
            name: 'Wellness',
            link: '/wellness',
            submenu: [
                { name: 'Chortoq Club House', link: '/meetings' ,
                    submenu: [
                        { name: 'VIP Spa', link: '/room1' },
                        { name: 'Sensasia Spa', link: '/room2' },
                        { name: 'Billiards', link: '/room2' },
                        { name: 'Dance Studio', link: '/room2' },
                        { name: 'Social Space', link: '/room2' },
                        { name: 'Swimming Pool with Kids Pool', link: '/room2' },
                        { name: 'Jacuzzi', link: '/room2' },
                        { name: 'Pirates Club', link: '/room2' },
                    ]},
                { name: 'Wakatua Club', link: '/events' ,
                    submenu: [
                        { name: 'Kiki Beach', link: '/room1' },
                        { name: 'Tahiti - Bora Bora - Tetiaroa', link: '/room2' },
                        { name: 'Chortoq Stables', link: '/room2' },
                        { name: 'Tennis', link: '/room2' },
                        { name: 'Basketball', link: '/room2' },
                        { name: 'Football', link: '/room2' },
                        { name: 'Jogging Track', link: '/room2' },

                    ]},
                { name: 'Energy Fitness Club', link: '/conferences' },
                { name: 'Serene Spa', link: '/meetings' ,
                    submenu: [
                        { name: 'Fantasy Showers', link: '/room1' },
                        { name: 'Mineral Water Pool', link: '/room2' },
                        { name: 'Aquatonic Pool', link: '/room2' },
                        { name: 'Massage Rooms', link: '/room2' },
                        { name: 'Hammam', link: '/room2' },
                        { name: 'Male & Female Changing Rooms', link: '/room2' },
                        { name: 'Relax Areas', link: '/room2' },
                        { name: 'Pantry', link: '/room2' },

                    ]},
                { name: 'Welcome Boulevard', link: '/events' },
                { name: 'Live Show Podium', link: '/conferences' },
                { name: 'Sunset Boulevard', link: '/meetings' },
                { name: 'Outdoor Facilities', link: '/events' },
                { name: 'Prayer Room', link: '/conferences' },
            ],


        },
        {
            name: 'Dine',
            link: '/dining',
            submenu: [
                { name: 'Delices - Dietetic Restaurant', link: '/meetings' },
                { name: 'Salon Bienvenue', link: '/events' },
                { name: 'Rendezvous', link: '/conferences' },
                { name: 'Aloha', link: '/meetings' },
                { name: 'Hawai', link: '/events' },
                { name: 'Tea Chat', link: '/conferences' },
                { name: 'Gourmandise', link: '/meetings' },
                { name: 'Zippo Deck', link: '/events' },
                { name: 'Bonjour', link: '/conferences' },
                { name: 'Fringale Restaurant', link: '/conferences' },
                { name: 'Ambassadors', link: '/conferences' },
                { name: 'BAR TECA', link: '/conferences' },
                { name: 'La Terrace', link: '/conferences' },
            ],
        },
        {
            name: 'Meet',
            link: '#',
            submenu: [
                { name: 'Alpha Board Room', link: '/meetings' },
                { name: 'Chortoq 1 - Conference Hall', link: '/events' },
                { name: 'Chortoq 2 - Meeting Room', link: '/conferences' },
                { name: 'Chortoq 3 - Meeting Room', link: '/conferences' },
                { name: 'Beta Meeting Room', link: '/conferences' },
                { name: 'Zeta Meeting Room', link: '/conferences' },
                { name: 'Lota Meeting Room', link: '/conferences' },

            ],
        },
        {
            name: 'Celebrate',
            link: '#',

        },
        {
            name: 'Shop',
            link: '#',
            submenu: [
                { name: 'Gift Vouchers', link: '/boutique' },
                { name: 'Caprice Boutique', link: '/grocery' },
                { name: 'Tailor ', link: '/pharmacy' },
                { name: 'Ladies Salon ', link: '/pharmacy' },
                { name: 'Deli Shop ', link: '/pharmacy' },
                { name: 'Chortoq Organic Grocery ', link: '/pharmacy' },
                { name: 'Chortoq Pharmacy', link: '/pharmacy' },
            ],
        },
        {
            name: "Offers",
            link: "#",
        }

    ];





// export async function getServerSideProps(context) {
//     context.res.setHeader('Cache-Control', 'no-store, must-revalidate');
//     return {
//         props: {},
//     };
// }


export default function Header() {

    return (

        <div className="header-area" id="sticky-header">
            <Script
                src="/assets/js/scrollCue.min.js"
                strategy="lazyOnload"
                onLoad={() => console.log('scrollCue script loaded')}
            />
            <div className="container-fluid"> {/* Fixed typo here */}
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header-logo">
                            <Link href="/home" passHref>
                                <img src="/image/logo.png" alt="Company Logo" className="w-24"
                                />

                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="header-menu">
                            <ul>
                                {menuItems.map((menuItem, index) => (
                                    <li className="menu-item-has-children" key={menuItem.name + index}>
                                        <a href={menuItem.link}>
                                            {menuItem.name}
                                            {menuItem.submenu ? <i className="fas fa-chevron-down" /> : null}
                                        </a>
                                        {menuItem.submenu && (
                                            <ul className="sub-menu">
                                                {menuItem.submenu.map((subItem, subIndex) => (
                                                    <li key={subItem.name + subIndex}>
                                                        <Link href={subItem.link}>
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-lg-2 d-flex align-items-center">
                        <div className="header-button text-right">
                            <Link href="royella/find-room.html">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}