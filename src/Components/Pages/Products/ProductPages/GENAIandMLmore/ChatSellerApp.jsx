import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/aiml/seller.jpg'
function ChatSellerApp() {
    const heroData = {
        title: "Chat seller app",
        subtitle: "Efficient AI-driven chat selling solutions, connected Multiple Platform through ONDC",
        buttonText: "Contact",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Chat seller app",
            content: ["Coming soon"]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default ChatSellerApp;
