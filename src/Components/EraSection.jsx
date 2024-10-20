import React from 'react'
import img from '../assets/logoEra.png'
import mark from '../assets/bluemark.png'
import img2 from '../assets/illustration.png'
function EraSection() {
    return (
        <div className='py-8'>
            <div>
                <img src={img} alt="" className='xl:w-[9%] w-[15%] mx-auto xl:mb-[41px] mb-4' />
                <div className="w-full px-4 text-center text-[#2F313F66] xl:text-5xl text-2xl sm:text-3xl md:text-4xl font-semibold font-['Roboto'] xl:leading-[82.43px] mx-auto">NEW ERA OF DIGITAL LIFE</div>
                <img src={mark} alt="" className='absolute w-48 xl:w-[278px] left-[25%] md:left-[30%] lg:left-[40%] xl:left-[40%] flex-shrink-0' />
            </div>
            <img src={img2} alt="" className='mt-[10%] mx-0 self-stretch w-screen' />
        </div>
    )
}

export default EraSection