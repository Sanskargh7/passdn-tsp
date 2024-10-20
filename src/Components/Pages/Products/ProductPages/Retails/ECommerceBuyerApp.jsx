import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Retails/ecombuyer.jpeg'
function ECommerceBuyerApp() {
    const heroData = {
        title: "E-Commerce Buyer app",
        subtitle: "Enhanced online shopping experience, integrated with ONDC for smooth transactions",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About E-Commerce Buyer app",
            content: ["Our E-commerce Buyer App offers a world of shopping possibilities at your fingertips. Discover a vast array of products across various categories from countless sellers. ",
                "Enjoy a seamless shopping experience with features like product search, comparison, and secure checkout. Find the best deals, explore new brands, and have your favorite items delivered right to your doorstep.",
                "With our app, shopping has never been more convenient or enjoyable."

            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default ECommerceBuyerApp;
