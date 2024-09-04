"use client";

import Link from 'next/link';
import React, {useState, useRef, useEffect} from 'react';

const Header: React.FC = () => {
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
            link: '/offers',
            submenu: [
                { name: 'Chortoq Sanatorium', link: '/meetings' },
                { name: 'Chortoq Diagnostic Centre', link: '/events' },
                { name: 'Chortoq Laboratory', link: '/conferences' },
                { name: 'Physiotheraphy Centre', link: '/meetings' },
                { name: 'Salt Room', link: '/events' },
                { name: 'Balneotherapy', link: '/conferences' },
                { name: 'Gyneco Studio', link: '/meetings' },
                { name: 'Colon Hydrotherapy', link: '/events' },
                { name: 'Comfort Massage Centre', link: '/conferences' },
                { name: 'Cosmetology', link: '/conferences' },
            ],
        },
        {
            name: 'Spa & Wellness',
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
            name: 'Dining',
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
            name: 'Meetings & Events',
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
            name: 'Shopping',
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

    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const [activeSubSubMenu, setActiveSubSubMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleSubMenu = (name: string) => {
        setActiveSubMenu(activeSubMenu === name ? null : name);
    };

    const toggleSubSubMenu = (name: string) => {
        setActiveSubSubMenu(activeSubSubMenu === name ? null : name);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    // Handle clicks outside of the menu to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                alert(1);
                setMobileMenuOpen(false);
                setActiveSubMenu(null);
                setActiveSubSubMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {

            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <nav className="container mx-auto flex justify-between items-center bg-white h-20 p-4 md:p-0">
            {/* Logo Section */}
            <div className="flex-shrink-0">
                <img src="/image/logo.png" alt="Company Logo" className="w-24" style={{ width: "140px", marginTop: "20px" }} />
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-500 focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-8 text-gray-700 text-sm uppercase`}>
                <ul className="flex space-x-6">
                    {menuItems.map((menuItem, index) => (
                        <li key={index} className="relative">
                            {menuItem.submenu ? (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(menuItem.name)}
                                        className="hover:text-gray-500 focus:outline-none uppercase"
                                    >
                                        {menuItem.name}
                                        <svg
                                            className="ml-1 w-4 h-4 inline-block"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    {activeSubMenu === menuItem.name && (
                                        <div
                                            className={`${
                                                activeSubMenu === menuItem.name ? 'max-h-96' : 'max-h-0'
                                            } overflow-hidden  transition-all duration-300 ease-in-out`}
                                        >
                                            <ul className="absolute left-0 mt-0 w-72 bg-white border border-gray-200 rounded shadow-lg z-10 slide-bottom">
                                                {menuItem.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="relative">
                                                        {subItem.submenu ? (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleSubSubMenu(subItem.name)}
                                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none uppercase"
                                                                >
                                                                    {subItem.name}
                                                                    <svg
                                                                        className="ml-1 w-4 h-4 inline-block"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            d="M19 9l-7 7-7-7"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                                {activeSubSubMenu === subItem.name && (
                                                                    <ul className="absolute left-full top-0 w-56 bg-white border border-gray-200 rounded shadow-lg z-20">
                                                                        {subItem.submenu.map((subSubItem, subSubIndex) => (
                                                                            <li key={subSubIndex}>
                                                                                <Link href={subSubItem.link}>
                                                                                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                                                        {subSubItem.name}
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link href={subItem.link}>
                                                                <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                                    {subItem.name}
                                                                </span>
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link href={menuItem.link}>
                                    <span className="hover:text-gray-500">{menuItem.name}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white z-10 shadow-lg">
                    <ul className="flex flex-col space-y-1 p-4">
                        {menuItems.map((menuItem, index) => (
                            <li key={index} className="relative">
                                {menuItem.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubMenu(menuItem.name)}
                                            className="block text-left w-full py-2 text-gray-700 hover:bg-gray-100 focus:outline-none uppercase"
                                        >
                                            {menuItem.name}
                                            <svg
                                                className="ml-1 w-4 h-4 inline-block"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </button>
                                        {activeSubMenu === menuItem.name && (
                                            <ul className="pl-4 space-y-1">
                                                {menuItem.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="relative">
                                                        {subItem.submenu ? (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleSubSubMenu(subItem.name)}
                                                                    className="block text-left w-full py-2 text-gray-700 hover:bg-gray-100 focus:outline-none uppercase"
                                                                >
                                                                    {subItem.name}
                                                                </button>
                                                                {activeSubSubMenu === subItem.name && (
                                                                    <ul className="pl-4 space-y-1">
                                                                        {subItem.submenu.map((subSubItem, subSubIndex) => (
                                                                            <li key={subSubIndex}>
                                                                                <Link href={subSubItem.link}>
                                                                                    <span className="block py-2 text-gray-700 hover:bg-gray-100">
                                                                                        {subSubItem.name}
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link href={subItem.link}>
                                                                <span className="block py-2 text-gray-700 hover:bg-gray-100">
                                                                    {subItem.name}
                                                                </span>
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link href={menuItem.link}>
                                        <span className="block py-2 text-gray-700 hover:bg-gray-100">
                                            {menuItem.name}
                                        </span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* Right Section with Language Selector and CTA */}

                <div className="hidden md:block flex items-center space-x-4 ">
                    {/*<div className="relative">*/}
                    {/*    <button className="flex items-center text-gray-700 hover:text-gray-500">*/}
                    {/*        EN*/}
                    {/*        <svg*/}
                    {/*            className="ml-1 w-4 h-4"*/}
                    {/*            fill="none"*/}
                    {/*            stroke="currentColor"*/}
                    {/*            viewBox="0 0 24 24"*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        >*/}
                    {/*            <path*/}
                    {/*                strokeLinecap="round"*/}
                    {/*                strokeLinejoin="round"*/}
                    {/*                strokeWidth="2"*/}
                    {/*                d="M19 9l-7 7-7-7"*/}
                    {/*            ></path>*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 primary-button">
                        Book Now
                    </button>
                </div>


        </nav>
    );
};

export default Header;