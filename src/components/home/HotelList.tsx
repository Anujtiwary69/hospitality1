const hotel= [
    {
        name: "GRAND CHORTOQ RESORT",
        des:"Nature’s Healing Paradise",
        image:"/assets/images/hotels/GRAND.jpg"
    },
    {
        name: "CHORTOQ BOUTIQUE HOTEL",
        des:"Chic. Modern. Vibrant.",
        image:"/assets/images/hotels/BOUTIQUE.jpg"
    },
    {
        name: "O2ZODA PALACE",
        des:"Serene mountain escape",
        image:"/assets/images/hotels/O2ZODA.jpg"
    }
]
export default function HotelList(){
    return(
        <>
            <div className="room-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title center" data-cue="zoomIn">
                                <div className="section-thumb">
                                    {/*<img*/}
                                    {/*    src="/assets/images/home-1/section-shape1.png"*/}
                                    {/*    alt=""*/}
                                    {/*/>*/}
                                </div>
                                <h1>FEATURED HOTELS</h1>
                                <p className="section-desc-1">
                                    Step into a world of unforgettable experiences at our unique hotels, where every stay is crafted to delight. From serene retreats to vibrant city escapes, let Chortoq Hospitality be your gateway to exceptional comfort and beautiful destinations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*room-area*/}
            <div className="room-area">
                <div className="container">
                    <div className="row margin-top" data-cue="zoomIn">
                        <div className="room_list owl-carousel">
                            {hotel.map((h,index) => (
                            <div className="col-lg-12" key={h.name}>
                                <div className="room-single-box">
                                    <div className="room-thumb">
                                        <img src={h.image} alt="" />
                                        <div className="room-details-button">
                                            <a href="royella/room-details.html">
                                               Explore
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                    {/*<div className="room-pricing">*/}
                                    {/*    <span className="dolar">$560</span>*/}
                                    {/*    <span>Night</span>*/}
                                    {/*</div>*/}
                                    <div className="room-content">
                                        <h4>{h.des}</h4>
                                        <a href="royella/room.html">{h.name}</a>
                                        {/*<p>1500 SQ.FT/Rooms</p>*/}
                                    </div>

                                </div>
                            </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}