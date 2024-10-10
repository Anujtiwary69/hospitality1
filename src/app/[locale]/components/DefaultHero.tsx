import React from 'react';


const image = "http://localhost:3000/image/banner-1.jpg"


interface DefaultHeroProps {
    imageName?: string
    title?: string
    subTitle?: string
}



const DefaultHero: React.FC<DefaultHeroProps> = ({imageName, title,subTitle}) => {
    return (
        <div className="hero-slider owl-carousel">
            <div className="hero-area home-1 align-items-center d-flex" style={{
                background: `url(/assets/images/slider/${imageName})`, // Update with the correct path to your image
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
                                <h4>{subTitle}</h4>
                                <h1>{title}</h1>

                            </div>
                            {/*<div className="luxury-button">*/}
                            {/*    <a href="royella/about.html">Discover More</a>*/}
                            {/*</div>*/}
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

export default DefaultHero;