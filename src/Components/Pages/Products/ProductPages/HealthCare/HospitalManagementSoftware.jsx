import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/common.jpeg'
function HospitalManagementSoftware() {
    const heroData = {
        title: "Hospital Management Software ",
        subtitle: "Helthcare solution for ABHA Integration",
        buttonText: "Book Now",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Hospital Management Software ",
            content: ["Coming soon "]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default HospitalManagementSoftware;
