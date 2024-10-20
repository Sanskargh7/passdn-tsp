import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Mobility/metrosellerapp.jpeg'
function MetroManagement() {
    const heroData = {
        title: "Metro Seller App",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About ONDC Metro Management  Suite",
            content: ["Introducing our white-label Metro Seller App, designed to empower you to launch your own branded e-commerce platform swiftly and effortlessly. Whether you're a",
                "With our Metro Seller App, you can customize and deploy a feature-rich e-commerce platform tailored to your brand's identity and customer needs. Enjoy seamless integration with robust features such as product catalog management, secure payment gateways, order tracking, customer support, and detailed analytics. Our solution is built to enhance user experience and streamline operations, ensuring your business thrives in the digital landscape.",
                "Transform your e-commerce vision into reality with our white-label Metro Seller App. Gain a competitive edge and capitalize on the growing demand for online shopping. Start your journey toward e-commerce success today with our comprehensive solution.",
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default MetroManagement