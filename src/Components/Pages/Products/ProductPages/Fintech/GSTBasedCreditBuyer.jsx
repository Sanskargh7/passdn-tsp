import React from 'react';
import LandingPage from '../../Landingpage';
import bg from '../../../../../assets/backgroundimgs/Fintech/gstcreditbuyer.jpeg'
function GSTBasedCreditBuyer() {
    const heroData = {
        title: "GST Based Credit Buyer app",
        subtitle: "Simplified credit purchase processes, connected through ONDC for reliable servicee",
        buttonText: "Contacts ",
        backgroundImage: bg
    };

    const contentSections = [
        {
            title: "About GST Based Credit Buyer app",
            content: ["Introducing our GST Based Credit Buyer App, a comprehensive solution tailored for businesses seeking to streamline their financial operations and mitigate credit risks.",
                "Our app leverages the power of ONDC technology to connect businesses with buyers who prioritize timely payments and accurate GST claims. ",
                "By integrating GST compliance into the buyer discovery process, we help businesses enhance cash flow, reduce bad debts, and ensure regulatory adherence. Our app offers features such as GST verification, automated payment reminders, and dispute resolution, providing businesses with a robust tool to manage their financial health effectively"
            ]
        },
        // Add more sections as needed
    ];

    return <LandingPage heroData={heroData} contentSections={contentSections} />;
}

export default GSTBasedCreditBuyer;
