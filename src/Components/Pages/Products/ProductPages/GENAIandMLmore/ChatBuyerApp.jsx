import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/aiml/buyer.jpg'
function ChatBuyerApp() {
    const heroData = {
        title: "Chat Buyer app",
        subtitle: "Advanced AI-powered chat purchasing experience, seamlessly integrated with OND",
        buttonText: "Contacts",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Chat Buyer app",
            content: ["Coming soon"]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default ChatBuyerApp;
