import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import img from '../../assets/about/image.png';
import bluemark from '../../assets/bluemark2.png';
import bg from '../../assets/about/aboutUsCircle.png';
import EraSection from '../EraSection';

export default function About() {
    return (
        <>
            <Nav />

            <div className='relative flex flex-col items-center overflow-x-hidden pt-[90px]'>
                <div className='relative w-full h-[300px] sm:h-[400px] md:h-[515px] overflow-hidden'>
                    <div className='absolute inset-0 bg-[#151515]'>
                        <img src={bg} alt="Background" className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center'>
                            <h1 className='text-white font-roboto text-[40px] sm:text-[54px] md:text-[74px] font-semibold leading-tight sm:leading-snug md:leading-tight tracking-[-0.48px] mb-2 sm:mb-4 md:mb-6'>
                                About Us
                            </h1>
                            <img
                                src={bluemark}
                                alt="Blue Mark"
                                className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[310px] mx-auto -mt-4 sm:-mt-6 md:-mt-8'
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[1440px] bg-white flex flex-col items-center gap-8 mt-[50px] px-[20px] md:px-[50px] lg:px-[100px]">
                    {/* <img className="w-full max-w-[1192px] h-auto rounded mb-[32px]" src={img} alt="Building driver-centric solutions" /> */}
                    <div className="text-center text-[#2F313F66] text-[30px] md:text-[50px] lg:text-[70px] font-semibold font-['Roboto'] leading-[40px] md:leading-[60px] lg:leading-[82.43px] pb-[32px]">
                        New age Tech Company.
                    </div>
                    <div className="text-center text-black text-[16px] md:text-[24px] lg:text-[32px] font-normal font-['Roboto'] leading-[24px] md:leading-[36px] lg:leading-[48px] mb-24   ">
                        Passdn is new-age Tech company that provide innovative tech solutions only,
                        We love to build products on ONDC and also co-building large business by providing our scalable tech solutions. <br />

                        If you have business ideas and want to build scalbe tech soluton by levaring new age tech like Ond, DPIs, we are here to talk to you.
                    </div>
                </div>

                <EraSection />

                <Footer />
            </div>
        </>
    );
}
