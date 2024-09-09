import React from 'react';

const FeaturedRooms = () => {
    const rooms = [
        {
            title: "Standard Room",
            description: "Thoughtfully curated, where every detail has been considered to ensure comfort and relaxation.",
            guests: 3,
            bedType: "King or Twin",
            size: "54 sqm / 581 sqft",
            view: "Backyard",
        },
        {
            title: "Twin Room",
            description: "Soak in stunning ocean views from the comfort of this luxurious and timeless suite.",
            guests: 4,
            bedType: "King or Twin",
            size: "110 sqm / 1184 sqft",
            view: "Ocean",
        },
        {
            title: "Presidential Suite",
            description: "An exquisite and spacious living room and dining area surrounded by spectacular ocean front views.",
            guests: 6,
            bedType: "King or Twin",
            size: "235 sqm / 2530 sqft",
            view: "Oceanfront",
        },
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '40px', color: '#2b2b2b' }}>FEATURED ROOMS</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {rooms.map((room, index) => (
                    <div key={index} style={{ width: '30%', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                        <div style={{ height: '150px', backgroundColor: '#2b5b9e' }}></div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ color: '#2b2b2b' }}>{room.title}</h3>
                            <p style={{ color: '#666' }}>{room.description}</p>
                            <p style={{ margin: '10px 0', color: '#333' }}>
                                <span role="img" aria-label="guests">👤</span> {room.guests} Guests
                            </p>
                            <p style={{ margin: '10px 0', color: '#333' }}>
                                <span role="img" aria-label="bed">🛏️</span> {room.bedType}
                            </p>
                            <p style={{ margin: '10px 0', color: '#333' }}>
                                <span role="img" aria-label="size">📐</span> {room.size}
                            </p>
                            <p style={{ margin: '10px 0', color: '#333' }}>
                                <span role="img" aria-label="view">🌄</span> {room.view}
                            </p>
                        </div>
                        <div style={{ borderTop: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ flex: 1, padding: '10px', backgroundColor: '#fff', color: '#d81b60', border: 'none', cursor: 'pointer' }}>
                                EXPLORE
                            </button>
                            <button style={{ flex: 1, padding: '10px', backgroundColor: '#d81b60', color: '#fff', border: 'none', cursor: 'pointer' }}>
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedRooms;