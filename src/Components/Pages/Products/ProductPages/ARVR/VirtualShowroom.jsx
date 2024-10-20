import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/arvr/arvr.jpg'
function VirtualShowroom() {
    const heroData = {
        title: "Virtual Showroom",
        subtitle: "Create Immersive virtual showroom experience, seamlessly integrated with ONDC for enhanced customer engagement",
        buttonText: "Book Now",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Virtual Shoroom",
            content: ["Coming soon"]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default VirtualShowroom