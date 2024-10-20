import React from 'react'
import IndustryCard from './IndustryCard'
import { cardList } from '../../../Data/data'
function IndustriesSection() {
    return (
        <>
            <div className='font-roboto text-4xl sm:text-[48px] leading-[56px] font-semibold text-[#2F313F] text-center pt-[96px] bg-white'> Industries we Serve </div >
            <div className='font-roboto font-normal text-sm sm:text-base text-center text-[#121D2B99] pt-[23px] px-6 pb-[32px]'>Stay updated with evolving tech
            </div>
            <div className='flex justify-center items-center'>
                <div className="px-6 mb-18 sm:mb-24 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center sm:justifiy-center sm:items-center md:justify-center md:items-center lg:justify-center lg:items-center xl:px-24">
                    {cardList.map(card => (
                        <IndustryCard card={card} key={card.h} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default IndustriesSection