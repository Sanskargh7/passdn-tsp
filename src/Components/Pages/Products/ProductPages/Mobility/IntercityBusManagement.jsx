import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Mobility/ondcintercity.jpeg'
function IntercityBusManagement() {
    const heroData = {
        title: "ONDC InterCity bus Management  Suite",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts ",
        backgroundImage: bg,
    };

    const contentSections = [
        {
            title: "About ONDC InterCity bus Management  Suite",
            content: [
                "Our InterCity Bus Solution leverages state-of-the-art ONDC technology to redefine long-distance travel for passengers and operators alike. This advanced platform integrates robust booking systems, real-time tracking capabilities, and comprehensive management tools to optimize scheduling efficiency and enhance operational transparency. ",
                "Whether managing regional routes or extensive national networks, operators can streamline route planning and ensure seamless passenger communication, ultimately improving overall service quality. With a strong focus on passenger comfort, safety, and operational efficiency, our InterCity Bus Solution aims to elevate the standard of intercity transportation, offering a modern and reliable travel experience for all."


            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default IntercityBusManagement