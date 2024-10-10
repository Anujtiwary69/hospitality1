"use client"
import React, { useEffect, useState } from 'react';

export default  function BookingForm(){
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => {
            setIsPageLoaded(true);
        };

        // Check if the page is already loaded
        if (document.readyState === 'complete') {
            setIsPageLoaded(true);
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        // Clean up the event listener
        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, []);

    if (!isPageLoaded) {
        return null; // Don't render the component until the page is fully loaded
    }

    return (
        <div className="booking-area home-1">
            <div className="container">
                <form
                    action="https://formspree.io/f/myyleorq"
                    method="POST"
                    id="dreamit-form"
                >
                    <div className="row add-bg align-items-center">
                        {/*<div className="booking-input-box">*/}
                        {/*    <input type="date" name="daterange" id="daterange"/>*/}
                        {/*</div>*/}

                        <div className="col-lg-2 col-md-3 text-center">
                            <div className="d-flex flex-column">
                                <span className="display-4 fw-bold" style={{fontFamily:"Poppins"}}>17</span>
                                <span className="text-uppercase" style={{fontFamily:"Poppins"}}>Aug Sat</span>
                            </div>
                        </div>
                        {/*<div className="booking-input-box">*/}
                        {/*    <h4>Check Out</h4>*/}
                        {/*    <input type="date"/>*/}
                        {/*</div>*/}
                        <div className="col-lg-2 col-md-3 text-center">
                            <div className="d-flex flex-column">
                                <span className="display-4 fw-bold" style={{fontFamily:"Poppins"}}>18</span>
                                <span className="text-uppercase" style={{fontFamily:"Poppins"}}>Aug Sun</span>
                            </div>
                        </div>
                        <div className="booking-input-box">
                            <h4 style={{fontFamily:"Poppins"}}>Rooms</h4>
                            <select name="place" id="place" style={{fontFamily:"Poppins"}}>
                                <option value="saab">01 Rooms</option>
                                <option value="opel">02 Rooms</option>
                                <option value="audi">03 Rooms</option>
                                <option value="audi">04 Rooms</option>
                            </select>
                        </div>
                        <div className="booking-input-box upper">
                            <h4 style={{fontFamily:"Poppins"}}>Guests</h4>
                            <select name="place" id="place" style={{fontFamily:"Poppins"}}>
                                <option value="saab">01 Adult, 0 Child</option>
                                <option value="opel">02 Adult, 1 Child</option>
                                <option value="audi">02 Adult, 2 Child</option>
                                <option value="audi">02 Adult, 3 Child</option>
                            </select>
                        </div>
                        <div className="booking-button">
                            <button type="submit" style={{fontFamily:"Poppins"}}>Book Now</button>
                        </div>
                    </div>
                </form>
                <div id="status"/>
            </div>
        </div>

    )
}