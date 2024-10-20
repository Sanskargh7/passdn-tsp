import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Retails/sellerappforall.jpeg'
function UniversalSellerApp() {
    const heroData = {
        title: "Seller app for all",
        subtitle: "Universal retail selling platform, seamlessly integrated with ONDC",
        buttonText: "Book Now",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Seller app for all",
            content: ['Our Seller App empowers businesses to thrive on the ONDC network. By providing a comprehensive platform for product catalog management, order processing, inventory control, and payment integration, we streamline operations and enhance efficienc',
                'Our app caters to a diverse range of businesses, including grocery, fashion, electronics, home and furniture, food and beverages, travel, and services. With features like analytics and insights, sellers can make data-driven decisions to optimize their offerings. ',
                'Join us in revolutionizing the way you do business on the ONDC platform.'
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default UniversalSellerApp;
