"use client";
import React, { useState } from 'react';
import { Roboto_Mono } from 'next/font/google';
import { DateRangePicker } from '@nextui-org/date-picker';
import 'react-datepicker/dist/react-datepicker.css';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const BookingBar: React.FC = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() + 1)));
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', weekday: 'short' };
        return date.toLocaleDateString(undefined, options).split(' ');
    };

    const [currentDay, currentMonth, currentWeekday] = formatDate(startDate);
    const [nextDay, nextMonth, nextWeekday] = formatDate(endDate);

    const handleDateChange = (dates: [Date, Date]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end || start);
        setIsOpen(false);
    };

    return (
        <div
            className={`flex flex-col md:flex-row items-center justify-around border p-4 bg-white ${robotoMono.className}`}>
            {/* Date Section 1 */}
            <div className="dateContainer">
                <div className="flex items-center cursor-pointer mb-4 md:mb-0" onClick={() => setIsOpen(!isOpen)}>
                    <div className="text-center mr-2">
                        <span className="text-4xl md:text-6xl font-bold text-blue-800">{currentWeekday}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm uppercase font-semibold text-black">{currentMonth}</span>
                        <span className="text-xs uppercase font-semibold text-black">{currentDay}</span>
                    </div>
                </div>
                <div className="border-r h-16 mx-10"></div>
                {/* Date Section 2 */}
                <div className="flex items-center cursor-pointer mb-4 md:mb-0" onClick={() => setIsOpen(!isOpen)}>
                    <div className="text-center mr-2">
                        <span className="text-4xl md:text-6xl font-bold text-blue-800">{nextWeekday}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm uppercase font-semibold text-black">{nextMonth}</span>
                        <span className="text-xs uppercase font-semibold text-black">{nextDay}</span>
                    </div>
                </div>
                <div className="hidden md:block border-r h-16 mx-4"></div>
            </div>

            {/* Room and Guest Info */}
            <div className="feildContainer mt-4 md:mt-0">
                <div className="border p-4 mb-4 md:mb-0">
                    <span className="text-xs md:text-sm uppercase font-bold md:font-light">1 Room, 1 Guest</span>
                </div>
                <div className="hidden md:block border-r h-16 mx-4"></div>
                {/* Special Rates Info */}
                <div className="border p-4 mb-4 md:mb-0">
                    <span className="text-xs md:text-sm uppercase font-bold md:font-light">Special Rates</span>
                </div>
            </div>

            {/* Check Rates Button */}
            <button
                className="w-full md:w-auto bg-pink-500 text-white px-4 md:px-6 py-2 md:py-4 uppercase font-bold mb-4 md:mb-0 checkRateButton">
                Check Rates
            </button>
            {/* Date Picker */}
            {isOpen && (
                <div className="absolute top-12 left-0 z-10">
                    {/*<DateRangePicker*/}
                    {/*    selected={startDate}*/}
                    {/*    onChange={handleDateChange}*/}
                    {/*    startDate={startDate}*/}
                    {/*    endDate={endDate}*/}
                    {/*    selectsRange*/}
                    {/*    inline*/}
                    {/*/>*/}
                </div>
            )}
        </div>
    );
};

export default BookingBar;