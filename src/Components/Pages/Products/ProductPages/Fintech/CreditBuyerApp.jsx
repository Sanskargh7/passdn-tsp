import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Fintech/creditbuyerapp.jpeg'
function CreditBuyerApp() {
    const heroData = {
        title: "Credit Buyer app",
        subtitle: "Simplified credit purchase processes, connected through ONDC for reliable service",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Credit Buyer app",
            content: ["Introducing our Credit Buyer App, a cutting-edge platform designed to revolutionize the way businesses connect with potential buyers. .",
                'Our app offers a seamless solution for enterprises seeking to expand their customer base and optimize their sales process. By leveraging ONDC technology, we provide a robust platform that enables businesses to discover creditworthy buyers, manage sales leads effectively, and accelerate revenue growth. ',
                'With features such as advanced search filters, credit rating assessment, and secure communication tools, our Credit Buyer App empowers businesses to make informed decisions and build lasting partnerships']
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default CreditBuyerApp