"use client"
import {useTranslation} from "react-i18next";

const offer =[
    {
        name:"dine",
        des:"savor_moments",
        image:"/assets/images/other/dine.jpg",
        button:"learn_more"
    },
    {
        name:"meet",
        des:"where_ideas_connect",
        image:"/assets/images/other/meet.jpg",
        button:"learn_more"
    },
    {
        name:"celebrate",
        des:"where_memories_made",
        image:"/assets/images/other/celebrate.jpg",
        button:"learn_more"
    },
    {
        name:"shop",
        des:"curated_for_you",
        image:"/assets/images/other/shop.jpg",
        button:"shop_now"
    }
]
export default function Other(){
    const { t } = useTranslation();
    return (
        <div className="offers-area" style={{paddingBottom:"20px"}}>
            <div className=" container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title two" data-cue="zoomIn">

                        </div>
                    </div>
                </div>
                <div className="room-area home-four" style={{paddingTop:"60px",paddingBottom:"20px"}}>
                    <div className="container-fluid">
                        <div className="row">
                            {offer.map((f, index) => (
                            <div className="col-lg-3 col-md-6" key={f.name}>
                                <div
                                    className="single-offers-box"
                                    data-cue="zoomIn"
                                    data-show="true"
                                    style={{
                                        animationName: "zoomIn",
                                        animationDuration: "2500ms",
                                        animationTimingFunction: "ease",
                                        animationDelay: "0ms",
                                        animationDirection: "normal",
                                        animationFillMode: "both"
                                    }}
                                >
                                    <div className="offers-thumb">
                                        <img src={f.image} alt=""/>
                                    </div>
                                    <div className="offers-content">
                                        <a href="royella/room-details.html">{t(`home:${f.name}`)
                                        }</a>
                                        <p> {t(`home:${f.des}`)}</p>
                                        <button style={{
                                            fontSize: "16px",
                                            fontFamily: "Poppins",
                                            fontWeight: "normal",
                                            textDecoration: "unset"
                                        }}>
                                            {t(`home:${f.button}`)}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            ))}


                        </div>
                    </div>
                </div>

                {/*<div className="row" data-cue="zoomIn">*/}
                {/*    <div className="offers-list owl-carousel">*/}
                {/*        {offer.map((f, index) => (*/}
                {/*            <div className="col-md-4" key={f.name}>*/}
                {/*            <div className="single-offers-box">*/}
                {/*                    <div className="offers-thumb">*/}
                {/*                        <img src={f.image} alt=""/>*/}
                {/*                    </div>*/}
                {/*                    <div className="offers-content">*/}
                {/*                        <a href="royella/room-details.html">{t(`home:${f.name}`)*/}
                {/*                        }</a>*/}
                {/*                        <p> {t(`home:${f.des}`)}</p>*/}
                {/*                        <button style={{*/}
                {/*                            fontSize: "16px",*/}
                {/*                            fontFamily: "Poppins",*/}
                {/*                            fontWeight: "normal",*/}
                {/*                            textDecoration: "unset"*/}
                {/*                        }}>*/}
                {/*                            {t(`home:${f.button}`)}*/}
                {/*                        </button>*/}
                {/*                    </div>*/}
                {/*                    /!*<div className="offers-dollar">*!/*/}
                {/*                    /!*    <h4>25% off</h4>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))}*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>

    );
}