import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/common.jpeg'
function HomestaySolution() {
    const heroData = {
        title: "Home-stay solution",
        subtitle: "Convenient home-stay booking and management, powered by ONDC integration for Multiple Bookings",
        buttonText: "Book Now",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Home-stay solution ",
            content: ['Coming Soon']
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default HomestaySolution;
