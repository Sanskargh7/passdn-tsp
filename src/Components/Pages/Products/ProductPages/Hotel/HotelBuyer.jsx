import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/common.jpeg'
function HotelBuyer() {
    const heroData = {
        title: "Hotel Buyer",
        subtitle: "Enhanced hotel booking experience, connected With ONDC ",
        buttonText: "Book Now",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Hotel Buyer",
            content: ["Coming Soon"]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default HotelBuyer;
