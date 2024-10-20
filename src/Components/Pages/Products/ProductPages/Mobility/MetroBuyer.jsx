import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Mobility/metrobuyerapp.jpeg'
function MetroBuyer() {
    const heroData = {
        title: "Metro Buyer app",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Metro Buyer App",
            content: ["Introducing our Metro Buyer App, a sophisticated solution tailored for metropolitan authorities and transportation bodies seeking seamless integration or a white-label application to streamline metro bookings.  ",
                "Designed to enhance the commuter experience, our app provides a user-friendly interface for convenient and efficient metro ride reservations. Whether you're looking to integrate advanced booking functionalities into your existing metro system or deploy a branded solution that reflects your authority's identity, our Metro Buyer App offers customizable features such as real-time scheduling, fare management, route information, and passenger notifications. ",
                "Embrace the future of urban transportation with ONDC technology that prioritizes reliability, convenience, and passenger satisfaction, ensuring a seamless metro travel experience for all."

            ],
        },
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default MetroBuyer