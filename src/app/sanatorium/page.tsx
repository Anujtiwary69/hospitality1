import DefaultHero from "@/components/DefaultHero";
import React from "react";
const range = Array.from({ length: 3 }, (_, index) => index + 1); // Generates numbers 1 to 10

const section1 = [
    {
        title: "CHORTOQ DIAGNOSTIC CENTRE",
        subTitle: "Pecision in Every Diagnosis",
        image: "/assets/images/sanatorium/s1.jpg",
        des: (
            <p>
                The Chortoq Diagnostic Centre is Uzbekistan’s most advanced facility for medical assessment and care.
                Equipped with cutting-edge technology and staffed by leading medical professionals, we offer
                comprehensive diagnostic services to ensure early detection and effective treatment of a wide range of
                conditions. Paired with the healing properties of Chortoq Mineral Water, our diagnostic center provides
                guests with a holistic approach to health, combining advanced science with natural therapies. Whether
                you're here for a routine check-up or specialized care, we are committed to your health and well-being.
            </p>
        )
    },
    {
        title: "CHORTOQ LABORATORY",
        subTitle: "Accurate Testing, Informed Healing",
        image: "/assets/images/sanatorium/s2.jpg",
        des: (
            <p>
                The Chortoq Laboratory provides critical health insights through the latest medical technologies. Specializing in a variety of tests, our laboratory delivers fast, reliable results to help diagnose and manage health conditions with accuracy. The integration of our laboratory services with Chortoq’s therapeutic mineral waters and other wellness treatments offers a complete, holistic approach to recovery and health management. Each test is carried out by experienced medical professionals, with the most advanced and sophisticated medical equipment and technology ensuring that your health is in the best hands.
            </p>
        )
    },
    {
        title: "BALNEOTHERAPY",
        subTitle: "Healing Waters, Pure Wellness",
        image: "/assets/images/sanatorium/s3.jpg",
        des: (
            <p>
                Balneotherapy at Chortoq Sanatorium is centered around the therapeutic properties of the renowned Chortoq Mineral Water. This natural treatment, enriched with essential minerals like iodine and bromine, is ideal for managing conditions related to the digestive tract, liver, and skin. Whether soaking in the warm mineral baths or experiencing specialized water treatments, guests can experience the restorative benefits of nature’s own healing properties. With a long tradition of healing, balneotherapy at Chortoq Sanatorium offers a powerful blend of relaxation and rejuvenation.
            </p>
        )
    },
    {
        title: "SALT ROOM",
        subTitle: "Breathe Easy, Feel Renewed",
        image: "/assets/images/sanatorium/s4.jpg",
        des: (
            <p>
                Step into the Salt Room at Chortoq Sanatorium and experience the purifying power of nature. The microclimate created by natural salt crystals helps to cleanse the respiratory system, enhance lung function, and promote overall well-being. Guests who visit the Salt Room can enjoy deep relaxation while benefiting from this time-honored therapy. Whether you're seeking relief from respiratory conditions or simply want to breathe easier, the Salt Room offers a refreshing escape in a tranquil, healing environment.
            </p>
        )
    },  {
        title: "PHYSIOTHERAPY CENTRE",
        subTitle: "Restore, Rebuild, Rejuvenate",
        image: "/assets/images/sanatorium/s5.jpg",
        des: (
            <p>
                The Physiotherapy Centre at Chortoq Sanatorium is dedicated to helping guests regain mobility, strength, and vitality. Using advanced techniques alongside natural therapies, such as the healing Chortoq Mineral Water, our physiotherapy treatments are tailored to each guest’s unique needs. From post-injury rehabilitation to chronic pain management, our highly skilled therapists work with you on your journey to recovery. With a focus on promoting long-term wellness, our center blends modern science with nature’s therapeutic power, providing an integrated approach to physical health and healing.
            </p>
        )
    },
    {
        title: "MASSAGE DOUCHE FACILITY",
        subTitle: "Revitalize with Water Power",
        image: "/assets/images/sanatorium/s6.jpg",
        des: (
            <p>
                The Massage Douche Facility at Chortoq Sanatorium provides a unique, invigorating treatment that combines water jets and therapeutic massage. Utilizing the healing power of Chortoq Mineral Water, this treatment promotes better circulation, relieves muscle tension, and enhances overall wellness. Each session is tailored to individual needs, making it an ideal therapy for relaxation and recovery. Step into a world where water becomes the ultimate healing tool, revitalizing your body and mind with every session.
            </p>
        )
    },
    {
        title: "GYNAECOLOGY STUDIO",
        subTitle: "Empowering Women's Health",
        image: "/assets/images/sanatorium/s7.jpg",
        des: (
            <p>
                The Gynaecology
                Studio at Chortoq Sanatorium is dedicated to the unique health needs of women. Offering specialized treatments for gynecological conditions, the studio combines modern medical expertise with the therapeutic properties of Chortoq Mineral Water. Whether you're seeking preventive care, support for chronic conditions, or post-operative rehabilitation, our team of experienced specialists will provide personalized treatment plans. The Gynaecology
                Studio is designed to nurture and support women’s health in a serene and caring environment.
            </p>
        )
    },
    {
        title: "COLON HYDROTHERAPY",
        subTitle: "Cleanse from Within",
        image: "/assets/images/sanatorium/s8.jpg",
        des: (
            <p>
                Experience the transformative benefits of Colon Hydrotherapy at Chortoq Sanatorium. This natural cleansing treatment helps to remove toxins, improve digestion, and promote overall wellness. Combined with the healing properties of Chortoq Mineral Water, Colon Hydrotherapy provides a gentle yet effective way to restore balance within the body. Our professional team ensures a safe, comfortable experience, leaving you feeling lighter, revitalized, and refreshed.
            </p>
        )
    },
    {
        title: "COMFORT MASSAGE CENTRE",
        subTitle: "Relax, Restore, Renew",
        image: "/assets/images/sanatorium/s9.jpg",
        des: (
            <p>
                At the Comfort Massage Centre, relaxation takes on new meaning. Our skilled therapists combine
                traditional techniques with the healing benefits of Chortoq Mineral Water to deliver personalized
                massage treatments that relieve stress, improve circulation, and promote overall well-being. Whether
                you're looking for deep relaxation or targeted pain relief, the Comfort Massage Centre offers a
                sanctuary where your body and mind can find true peace and rejuvenation.
            </p>
        )
    },
    {
        title: "COSMETOLOGY",
        subTitle: "Where Beauty Meets Nature",
        image: "/assets/images/sanatorium/s10.jpg",
        des: (
            <p>
                The Cosmetology services at Chortoq Sanatorium blend nature with advanced skincare and technology to
                enhance your natural beauty. Using high-quality products and techniques, our expert aestheticians
                provide treatments tailored to your skin’s unique needs. From rejuvenating facials to anti-aging
                therapies, each session leaves you feeling refreshed and radiant. Harness the benefits of Chortoq Mineral Water and other natural elements to achieve healthy, glowing skin in the serene surroundings of our wellness sanctuary.
            </p>
        )
    },
    // {
    //     title: "COSMETOLOGY",
    //     subTitle: "Where Beauty Meets Nature",
    //     image: "/assets/images/sanatorium/s11.jpg",
    //     des: (
    //         <p>
    //             The Cosmetology services at Chortoq Sanatorium blend nature with advanced skincare and technology to enhance your natural beauty. Using high-quality products and techniques, our expert aestheticians provide treatments tailored to your skin’s unique needs. From rejuvenating facials to anti-aging therapies, each session leaves you feeling refreshed and radiant. Harness the benefits of Chortoq Mineral Water and other natural elements to achieve healthy, glowing skin in the serene surroundings of our wellness sanctuary.
    //         </p>
    //     )
    // },
    {
        title: "MUD THERAPY ",
        subTitle: "Healing from the Earth",
        image: "/assets/images/sanatorium/s11.jpg",
        des: (
            <p>
                The Mud Therapy at Chortoq Sanatorium offers a deeply restorative treatment using mineral-enriched mud, prepared with the healing properties of Chortoq Mineral Water. Applied as warm therapeutic pads, this natural remedy is designed to relieve pain, reduce inflammation, and promote circulation. Ideal for those suffering from joint, muscle, or skin conditions, the mud therapy treatment taps into nature's powerful resources to restore balance and vitality. This ancient, time-tested therapy, combined with modern wellness expertise, creates a soothing and healing experience that leaves guests feeling renewed.
            </p>
        )
    },

]

export default function Sanatorium() {
    return (
        <>
            <DefaultHero imageName="sanatorium.png" title="Healing Waters, Expert Care" subTitle="Wellness Redefined"/>
            <br/>
            <div className="room-title-area" style={{paddingBottom: '30px'}}>
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container" style={{width:"70%"}}>
                                <h2>CHORTOQ SANATORIUM</h2>
                                <h4>Well-Being and Rehabilitation Retreat</h4>
                                <p>The Chortoq Sanatorium is a premier well-being and rehabilitation center, nestled in
                                    the
                                    serene environment of the Grand Chortoq Resort, offering a holistic approach to
                                    health
                                    and
                                    recovery. At the heart of the Chortoq Sanatorium's treatments is the renowned
                                    Chortoq
                                    Mineral Water - a pure embodiment of nature's essence. </p>
                                <p>With its unique Chloride Sulphate Sodium composition and 22 vital microelements, this
                                    mineral water offers remarkable healing properties. Known for treating digestive
                                    tract
                                    disorders, liver and pancreas conditions, and even managing diabetes, Chortoq
                                    Mineral
                                    Water is central to the holistic healing approach offered here. The therapeutic
                                    mineral
                                    waters and healing mud, combined with our state-of-the-art medical diagnostics,
                                    create a
                                    truly transformative wellness experience. As the largest wellness and rehabilitation
                                    center in Central Asia, Chortoq Sanatorium offers an unparalleled blend of 5-star
                                    luxury and cutting-edge medical facilities. Set in a pristine, pollution-free
                                    environment, guests can access comprehensive services in one location. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-area pt-40">
                <div className="container mt-40">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12  upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{section1[0].subTitle}</h4>
                                <h1>{section1[0].title}</h1>
                                {/*<h1>Californta, Usa</h1>*/}
                                <p className="section-desc-2">
                                    {section1[0].des}
                                </p>
                            </div>


                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src={section1[0].image}
                                                alt={section1[0].title}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">


                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src={section1[1].image}
                                                alt={section1[1].title}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12  upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{section1[1].subTitle}</h4>
                                <h1>{section1[1].title}</h1>
                                {/*<h1>Californta, Usa</h1>*/}
                                <p className="section-desc-2">
                                    {section1[1].des}
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container mt-60">
                    <div className="row">
                        {range.map((number) => (
                            <div className="col-lg-4" key={number}>
                                <div className="section-title two">
                                    <img src={section1[number + 1].image}/>
                                    <h4 className="mt-3">{section1[number + 1].subTitle}</h4>
                                    <h1>{section1[number + 1].title}</h1>
                                    <p className="section-desc-2">
                                        {section1[number + 1].des}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <div className="about-area pt-40">
                <div className="container mt-40">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12  upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{section1[5].subTitle}</h4>
                                <h1>{section1[5].title}</h1>
                                {/*<h1>Californta, Usa</h1>*/}
                                <p className="section-desc-2">
                                    {section1[5].des}
                                </p>
                            </div>


                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src={section1[5].image}
                                                alt={section1[5].title}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
                <div className="container mt-60">
                    <div className="row">
                        {range.map((number) => (
                            <div className="col-lg-4" key={number}>
                                <div className="section-title two ">
                                    <img src={section1[number + 5].image}/>
                                    <h4 className="mt-3">{section1[number + 5].subTitle}</h4>
                                    <h1>{section1[number + 5].title}</h1>
                                    <p className="section-desc-2">
                                        {section1[number + 5].des}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <div className="about-area pt-40">
                <div className="container mt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src={section1[9].image}
                                                alt={section1[9].title}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12  upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{section1[9].subTitle}</h4>
                                <h1>{section1[9].title}</h1>
                                {/*<h1>Californta, Usa</h1>*/}
                                <p className="section-desc-2">
                                    {section1[9].des}
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12  upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{section1[10].subTitle}</h4>
                                <h1>{section1[10].title}</h1>
                                {/*<h1>Californta, Usa</h1>*/}
                                <p className="section-desc-2">
                                {section1[10].des}
                                </p>
                            </div>


                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src={section1[10].image}
                                                alt={section1[10].title}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}