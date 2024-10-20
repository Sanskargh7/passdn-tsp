import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Mobility/intracityseller.jpeg'
function IntracityBusManagement() {
    const heroData = {
        title: "Intra City seller",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About ONDC Intra-City bus Management  Suite",
            content: ["Looking to tap into the expanding market of outstation travel services? Explore our white-label app and comprehensive tech support tailored for Out Station Ride solutions. Our platform allows you to establish your own branded presence in the outstation travel segment quickly and efficiently, without the hassle of developing complex tech infrastructure.",
                " With our white-label app, you can offer customers a seamless booking experience for journeys beyond city limits. Customize your service with features such as flexible scheduling, vehicle selection, real-time tracking, and reliable driver management. Our solution is designed to enhance user convenience and satisfaction, making it ideal for travelers, families, and business commuters.",
                "Launch your outstation travel service with confidence using our ready-to-deploy solution. Take advantage of our expertise and robust technology to differentiate your brand and capture a share of the growing market for outstation rides. Start driving your business forward today with our white-label Out Station Ride solution."
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default IntracityBusManagement