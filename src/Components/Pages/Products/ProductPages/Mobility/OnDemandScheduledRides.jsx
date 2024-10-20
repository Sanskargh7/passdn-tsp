import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Mobility/ondemand.jpeg'
function OnDemandScheduledRides() {
    const heroData = {
        title: "On Demand and Scheduled Rides",
        subtitle: "Seamless ride booking and scheduling, integrated with ONDC for reliable service",
        buttonText: "Book Demo",
        backgroundImage: bg,
    };

    const contentSections = [
        {
            title: "About On Demand and Scheduled Rides",
            content: ["Looking to launch your own transportation business? Discover our white-label app and comprehensive tech support for ON Demand and Scheduled Rides. ",
                "Our solution empowers you to establish a branded presence in the competitive ride-hailing market without the complexities of building a tech infrastructure from scratch. With our white-label app, you can quickly customize and launch your transportation service, offering seamless booking for both immediate and scheduled rides. Benefit from robust features including real-time ride management, driver scheduling, fleet tracking, and detailed analytics to optimize operations and enhance customer satisfaction.",
                "Transform your business idea into reality with our ready-to-deploy solution tailored for urban commuters, travelers, and corporate clients alike. Start your journey toward success in the transportation industry today with our white-label ON Demand and Scheduled Rides solution."
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default OnDemandScheduledRides

