import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Retails/sellerappcustomizecategory.jpeg'
function CustomCategorySellerApp() {
    const heroData = {
        title: "Seller app for Customize category",
        subtitle: "Tailored retail solutions for specific categories, powered by ONDC integration",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Seller app for Customize category",
            content: ['Our Seller App for Customize Category empowers businesses to showcase their unique offerings on the ONDC network. ', 'With a focus on personalization, our app allows sellers to effectively list and manage customized products, providing customers with tailored options. ', 'From apparel and accessories to home decor and electronics, businesses can leverage our platform to differentiate their offerings and cater to specific customer preferences. Our intuitive interface and robust features make it easy to create, manage, and promote customized products, driving sales and customer satisfaction.']
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default CustomCategorySellerApp;
