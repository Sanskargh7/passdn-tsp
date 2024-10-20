import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Fintech/fintechsuperseller.jpeg'
function FintechSuperSeller() {
    const heroData = {
        title: "Fintech super seller",
        subtitle: "Comprehensive fintech solutions integrated with ONDC for seamless transactions",
        buttonText: "Book Demo",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Fintech super seller",
            content: ["Our White Label solution is crafted specifically for banks, NBFCs, and other financial institutions aiming to leverage the ONDC platform seamlessly for managing and offering services such as loans, insurance, and mutual funds.",
                "This customizable platform empowers institutions to establish their branded digital marketplace effortlessly, enabling efficient service listing, management, and customer engagement.",
                "By integrating our White Label ONDC solution, financial entities can enhance their digital presence, optimize operational efficiency, and improve customer accessibility through a user-friendly interface for browsing, comparing, and applying for financial products. Join us in transforming the financial services landscape with our tailored solution, designed to streamline operations and deliver enhanced value to clients in the digital age."
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default FintechSuperSeller;
