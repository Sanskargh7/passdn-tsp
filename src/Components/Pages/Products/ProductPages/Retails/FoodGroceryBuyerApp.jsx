import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Retails/foodandgrocery.jpeg'
function FoodGroceryBuyerApp() {
    const heroData = {
        title: "Food And Grocery Buyer App",
        subtitle: "Convenient fod and grocery shopping, seamlessly connected with ONDC",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Food And Grocery Buyer App",
            content: ["Our Food and Grocery Buyer App revolutionizes the way you shop for essentials. Discover a vast array of fresh produce, staples, packaged food, and beverages from local and national brands. ",
                "Enjoy the convenience of browsing through multiple stores, comparing prices, and placing orders from a single app. With features like real-time inventory updates, order tracking, and multiple payment options, your grocery shopping experience becomes effortless. ",
                "Experience the future of grocery shopping with our app."
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default FoodGroceryBuyerApp;
