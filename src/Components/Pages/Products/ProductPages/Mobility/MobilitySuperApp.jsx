import React from 'react'
import LandingPage from '../../Landingpage'
import bg from '../../../../../assets/backgroundimgs/Mobility/mobilitysuperapp.jpeg'
function MobilitySuperApp() {
    const heroData = {
        title: "About Mobility Super app",
        subtitle: "Your reliable transportation solution",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Mobility Super app",
            content: ["Introducing our Mobility Super App, a versatile white-label solution designed specifically for enhancing intra-city transportation.",
                "Tailored for city authorities and transportation bodies, this comprehensive platform integrates advanced features to optimize urban mobility. Our Mobility Super App includes seamless booking functionalities, real-time ride tracking, and robust management tools to streamline operations and improve passenger experience.",
                "Whether you aim to brand the app with your city's identity or integrate it into existing public transportation systems, our solution offers flexibility and customization. Join us in revolutionizing urban mobility with our Mobility Super App, empowering cities to enhance efficiency, sustainability, and accessibility in intra-city transportation solutions."
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default MobilitySuperApp