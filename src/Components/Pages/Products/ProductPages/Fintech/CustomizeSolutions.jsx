import React from 'react'
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Fintech/customizesolutionforfintech.jpeg'
function CustomizeSolutions() {
    const heroData = {
        title: "Customize Solutions for Fin-tech",
        subtitle: "ONDC Mobility App for Driver Focus Only...",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About Customize Solutions for Fin-tech",
            content: ['Discover the power of our customizable Fin-tech solutions. We specialize in developing tailored technology solutions to address the unique needs of financial institutions. ',
                'By leveraging ONDC technology, we create innovative products and services that enhance operational efficiency, improve customer experience, and drive growth. ',
                'Our expertise spans across various fintech domains, including payments, lending, wealth management, and insurance. We collaborate closely with our clients to understand their specific requirements and deliver cutting-edge solutions that deliver tangible results.'
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default CustomizeSolutions