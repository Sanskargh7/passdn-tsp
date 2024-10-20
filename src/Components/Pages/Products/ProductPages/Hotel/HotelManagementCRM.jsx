import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/common.jpeg'
function HotelManagementCRM() {
    const heroData = {
        title: "Hotel Management  CRM",
        subtitle: "Comprehensive hotel management and customer relationship management, seamlessly integrated with ONDC",
        buttonText: "Book Demo",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Hotel Management  CRM",
            content: ["Coming Soon"]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default HotelManagementCRM;
