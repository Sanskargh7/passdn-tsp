import React from 'react';
import EraSection from '../../EraSection';
import Footer from '../../Footer';
import Nav from '../../Nav';

const HeroSection = ({ title, subtitle, buttonText, backgroundImage }) => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10" />
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

const ContentSection = ({ title, content }) => {
    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">{title}</h2>
            {content.map((item, index) => (
                <p key={index} className="text-center text-lg py-3">{item}</p>
            ))}
        </div>
    );
};

const LandingPage = ({ heroData, contentSections }) => {
    return (
        <div>
            <Nav></Nav>
            <HeroSection {...heroData} />
            {contentSections.map((section, index) => (
                <ContentSection key={index} {...section} />
            ))}
            <EraSection />
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;