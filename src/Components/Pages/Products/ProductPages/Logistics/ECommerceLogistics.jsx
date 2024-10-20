import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Logistics/logisticsolution.jpeg'
function ECommerceLogistics() {
    const heroData = {
        title: "Logistic Solution (E Commerce)",
        subtitle: "Streamlined e-commerce logistics, seamlessly integrated with ONDC for efficient deliveries",
        buttonText: "Book Demo",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Logistic Solution ",
            content: ["Coming Soon"]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default ECommerceLogistics;
