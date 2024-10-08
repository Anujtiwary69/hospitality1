
const offer =[
    {
        name:"DINE",
        des:"Savor every moment",
        image:"/assets/images/other/dine.jpg"
    },
    {
        name:"MEET",
        des:"Where ideas connect",
        image:"/assets/images/other/meet.jpg"
    },
    {
        name:"CELEBRATE",
        des:"Where memories are made",
        image:"/assets/images/other/celebrate.jpg"
    },
    {
        name:"SHOP",
        des:"Curated for you",
        image:"/assets/images/other/shop.jpg"
    }
]
export default function Other(){
    return (
        <div className="offers-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title two" data-cue="zoomIn">

                        </div>
                    </div>
                </div>
                <div className="row" data-cue="zoomIn">
                    <div className="offers-list owl-carousel">
                        {offer.map((f,index) => (
                            <div className="col-md-12" key={f.name}>
                                <div className="single-offers-box">
                                    <div className="offers-thumb">
                                        <img src={f.image} alt=""/>
                                    </div>
                                    <div className="offers-content">
                                        <a href="royella/room-details.html">{f.name
                                        }</a>
                                        <p>{f.des}</p>
                                        <button style={{fontSize:"16px", fontWeight:"normal",textDecoration:"unset"}}>
                                            Learn More
                                        </button>
                                    </div>
                                    {/*<div className="offers-dollar">*/}
                                    {/*    <h4>25% off</h4>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>

    );
}