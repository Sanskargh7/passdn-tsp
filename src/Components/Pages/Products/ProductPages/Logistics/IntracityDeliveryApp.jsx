import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Logistics/fooddelivery.jpeg'
function IntracityDeliveryApp() {
    const heroData = {
        title: " Food Delivery Logistic App",
        subtitle: "Efficient local delivery services, powered by ONDC integration for quick and reliable operations",
        buttonText: "Book Now",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About On Demand and Scheduled Rides",
            content: ["Coming Soon"]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default IntracityDeliveryApp;
