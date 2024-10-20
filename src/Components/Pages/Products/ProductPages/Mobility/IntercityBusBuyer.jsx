import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Mobility/intercitybusbuyer.jpeg'
function IntercityBusBuyer() {
    const heroData = {
        title: "InterCity Bus Buyer",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About InterCity Bus Buyer",
            content: ["Our White Label Intra City Buyer app offers a customizable solution integrated with advanced features tailored for urban mobility and transportation management.",
                "Ideal for city authorities and transportation bodies, this platform enhances intra-city travel by providing seamless booking functionalities, real-time ride tracking, and robust management tools. Whether you're looking to brand the app with your city's identity or integrate it into existing public transportation systems, our White Label Intra City Buyer app ensures a user-friendly experience for commuters. By leveraging this solution, cities can improve service efficiency, promote sustainable transportation practices, and enhance overall urban mobility. ",
                "Join us in transforming intra-city travel with our customizable White Label Intra City Buyer app, designed to meet the specific needs of modern urban environments."
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default IntercityBusBuyer