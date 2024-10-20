import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Fintech/insurancesbuyerapp.jpeg'
function InsuranceBuyerApp() {
    const heroData = {
        title: "Insurances Buyer app",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Insurances Buyer app",
            content: ['Introducing our Insurance Buyer App, a user-friendly platform designed to simplify the insurance purchasing process for businesses and individuals. ',
                'Our app leverages ONDC technology to connect users with a wide range of insurance providers, offering comprehensive coverage options and competitive prices.',
                'With features such as policy comparison, real-time quotes, and secure online purchases, our Insurance Buyer App empowers users to make informed decisions and find the perfect insurance plan. By streamlining the insurance buying experience, we help businesses and individuals protect their assets with confidence.'
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default InsuranceBuyerApp;
