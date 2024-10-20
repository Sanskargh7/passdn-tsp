import React from 'react'
import Nav from '../Nav';
import Footer from '../Footer';
import img from '../../assets/about/image.png';
import bluemark from '../../assets/bluemark2.png';
import bg from '../../assets/about/aboutUsCircle.png';
import EraSection from '../EraSection';
import GetInTouchSection from './Home/GetInTouchSection';


function Contact() {
    return (
        <>
            <Nav></Nav>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[515px] overflow-hidden'>
                <div className='absolute inset-0 bg-[#151515]'>
                    <img src={bg} alt="Background" className='w-full h-full object-cover object-center' />
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-white font-roboto text-[40px] sm:text-[54px] md:text-[74px] font-semibold leading-tight sm:leading-snug md:leading-tight tracking-[-0.48px] mb-2 sm:mb-4 md:mb-6'>
                            Contact US
                        </h1>
                        <img
                            src={bluemark}
                            alt="Blue Mark"
                            className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[310px] mx-auto -mt-4 sm:-mt-6 md:-mt-8'
                        />
                    </div>
                </div>
            </div>
            <GetInTouchSection></GetInTouchSection>

            <EraSection></EraSection>
            <Footer></Footer>
        </>
    )
}

export default Contact