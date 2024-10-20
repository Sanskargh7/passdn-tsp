import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Fintech/mutualfunds.jpeg'
function MutualFundsBuyerApp() {
    const heroData = {
        title: "Mutual Fund",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Mutual Fund",
            content: ["Introducing our Mutual Fund platform, a comprehensive solution designed to simplify investing and help individuals achieve their financial goals. ",
                "Our platform leverages ONDC technology to provide a seamless and transparent investment experience. With a wide range of mutual fund schemes, in-depth fund analysis, and personalized recommendations, we empower investors to make informed decisions. ",
                "Our platform offers features such as goal-based investing, systematic investment plans (SIPs), and real-time portfolio tracking, ensuring a hassle-free investment journey."

            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default MutualFundsBuyerApp;
