import React from 'react';




const Hero: React.FC = () => {
    return (
        <div className="hero-slider owl-carousel">
            <div className="hero-area home-1 align-items-center d-flex"  style={{
                background: 'url(/image/banner-1.jpg', // Update with the correct path to your image
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
                height: '950px', textAlign: 'center',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="hotel-rating">
                                {/*<ul>*/}
                                {/*    <li>*/}
                                {/*        <i className="bi bi-star-fill"/>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <i className="bi bi-star-fill"/>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <i className="bi bi-star-fill"/>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <i className="bi bi-star-fill"/>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <i className="bi bi-star-fill"/>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>

                            <div className="hero-content">
                                <h4>DESIGNED FOR YOU</h4>
                                <h1>CRAFTING EXPERIENCES, CREATING MEMORIES

                                </h1>

                            </div>
                            <div className="luxury-button">
                                <a href="/">Discover More</a>
                            </div>
                            {/*<div className="hero-contact">*/}
                            {/*    <a href="#">*/}
                            {/*        <i className="bi bi-telephone-fill"/>*/}
                            {/*        +980 123 4567 890*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Hero;