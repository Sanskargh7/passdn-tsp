import React from 'react'
import { cardList2 } from '../../../Data/data'
import BenefitsCard from './BenefitsCard'
function BenefitsSection() {
    return (
        <>
            <div className='font-roboto text-[48px] leading-[56px] font-semibold text-[#2F313F] text-center pt-[96px] z-10'> Benefits of working with Passdn</div >
            <div className='font-roboto font-normal text-base text-center text-[#121D2B99] pt-[23px] px-6 pb-[32px]'>Empowering Our Drivers with Essential Tools and Benefits
            </div>
            <div className="mb-[96px] md:mx-28 mx-8 md:grid grid-cols-2 gap-4 ">
                {cardList2.map(card => (
                    <BenefitsCard card={card} key={card.h} />
                ))}
            </div>
        </>
    )
}

export default BenefitsSection

// grid grid-cols-2 gap-y-[32px] gap-x-[24px]