import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

const HotelList = () => {
    const hotel = [1, 2, 3];

    return (
        <div className="container mx-auto my-3.5 ">
            <h2 className="text-4xl font-bold mb-4 text-black text-center uppercase">Featured Hotel</h2>
            <div className="flex flex-wrap gap-16 items-center justify-center">
                {hotel.map((index) => (
                    <div className="border  overflow-hidden w-full sm:w-1/2 md:w-1/4 gap-10 " key={index}>
                        <img src="/image/backgroundlist.png" className="w-full h-48 object-cover"/>
                        <div className="content p-4">
                            <h1 className="text-xl font-bold mb-2">Hotel {index}</h1>
                            <p className="text-sm text-gray-700">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="w-full p-4 flex flex-col items-center">
                            <button
                                className="w-full border border-gray-300 bg-white py-2 px-4  mb-2 text-center hover:bg-gray-100 border-button">
                                EXPLORE
                            </button>
                            <button
                                className="w-full bg-blue-500 text-white py-2 px-4  mt-2 hover:bg-blue-600 primary-button1">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelList;