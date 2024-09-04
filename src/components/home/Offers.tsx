import React from 'react';

const Offers: React.FC = () => {
    return (
        <section className="relative h-screen bg-cover bg-center bg-fixed"
                 style={{backgroundImage:"url('image/BTD-About-Offers.webp')"}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
                className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-4xl font-bold mb-4">OFFERS</h2>
                <p className="text-lg mb-4">
                    Book direct with Grand Chortoq Resort and enjoy a daily resort credit of $50 for rooms and $100 for
                    suites, redeemable at our exquisite dining venues or luxurious spa facilities. T&Cs Apply.
                </p>
                <button
                    className="mt-4 bg-transparent border border-white rounded-full py-2 px-6 hover:bg-white hover:text-black transition duration-300">
                    <span className="mr-2">Stay with us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="w-5 h-5 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Offers;