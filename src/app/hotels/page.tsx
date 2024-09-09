import React from 'react';

const Hotel: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="flex flex-col justify-center px-8 text-black">
                    <h2 className="text-4xl font-bold mb-4 text-black">SANCTUARY, WELLBEING, PANACHE</h2>
                    <p className=" mb-2 text-black">
                        Nestled on the tranquil shores of Bluewaters Island, Banyan Tree Dubai offers an exquisite
                        modern escape where serenity envelops every moment. With 500 meters of pristine, private
                        beachfront overlooking the Arabian Gulf and the iconic Ain Dubai in the backdrop, you’re only
                        moments away from Jumeirah Beach Residences and Dubai Marina, yet it feels like you are in a
                        world of your own.
                    </p>
                    <p className="mb-2 text-black">
                        Our elegantly appointed rooms and suites blend natural materials with a touch of contemporary
                        Asian flair, creating an organic warmth that extends to your private balcony. Our lush gardens
                        and expansive pools beckon for leisurely days that seamlessly transform into vibrant evenings.
                    </p>
                    <p className="text-black">
                        Discover our four captivating dining destinations showcasing fine flavors and culinary craft.
                        Retreat to our signature Banyan Tree Spa, where Asian traditions are lovingly crafted to nurture
                        your well-being.
                    </p>
                    <p className="">
                        Every day at Banyan Tree Dubai promises distinctive experiences, culminating in breathtaking
                        sunsets over the sea.
                    </p>
                </div>


                <div>
                    <img src="/image/image.png" alt="Dubai View" className="w-full h-auto"/>
                </div>
            </div>
        </section>
    );
};

export default Hotel;