import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Retails/ecomintegrations.jpeg'
function ECommerceIntegrations() {
    const heroData = {
        title: "E Commerce Integrations ",
        subtitle: "Streamlined e-commerce operations, connected through ONDC for live in multiple platform",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About E Commerce Integrations ",
            content: ['Our E-commerce Integrations seamlessly connect your existing platform to the ONDC network, unlocking a vast market of potential customers. ',
                "Whether you are using Magento, Shopify, WooCommerce, or any other e-commerce platform, our integration solutions ensure a smooth transition. We handle the complexities of API integration, catalog synchronization, order management, and inventory updates, allowing you to focus on growing your business.",
                "By leveraging our expertise, you can expand your reach, increase sales, and stay ahead of the competition in the evolving e-commerce landscape."

            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default ECommerceIntegrations;
