export default  function BookingForm(){
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
                                <span className="display-4 fw-bold">17</span>
                                <span className="text-uppercase">Aug Sat</span>
                            </div>
                        </div>
                        {/*<div className="booking-input-box">*/}
                        {/*    <h4>Check Out</h4>*/}
                        {/*    <input type="date"/>*/}
                        {/*</div>*/}
                        <div className="col-lg-2 col-md-3 text-center">
                            <div className="d-flex flex-column">
                                <span className="display-4 fw-bold">18</span>
                                <span className="text-uppercase">Aug Sun</span>
                            </div>
                        </div>
                        <div className="booking-input-box">
                            <h4>Rooms</h4>
                            <select name="place" id="place">
                                <option value="saab">01 Rooms</option>
                                <option value="opel">02 Rooms</option>
                                <option value="audi">03 Rooms</option>
                                <option value="audi">04 Rooms</option>
                            </select>
                        </div>
                        <div className="booking-input-box upper">
                            <h4>Guests</h4>
                            <select name="place" id="place">
                                <option value="saab">01 Adult, 0 Child</option>
                                <option value="opel">02 Adult, 1 Child</option>
                                <option value="audi">02 Adult, 2 Child</option>
                                <option value="audi">02 Adult, 3 Child</option>
                            </select>
                        </div>
                        <div className="booking-button">
                            <button type="submit">Book Now</button>
                        </div>
                    </div>
                </form>
                <div id="status"/>
            </div>
        </div>

    )
}