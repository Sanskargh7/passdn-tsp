import React from 'react'
import { cardList3 } from '../../../Data/data'
import OurViewCard from './OurViewCard'
import img from '../../../assets/Home/Image.png'


function OurViewSection() {
    return (
        <div className="px-8 py-24 bg-neutral-900 ">

            <div className=" text-center text-white text-3xl sm:text-5xl font-semibold font-['Roboto'] sm:leading-[56px]">What our view on DPI and Indian Market and Startup</div>
            <div className=" text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal mt-[16px]">We love to build for future and collaborate with innovative tech builder that really understand the their industries </div>

            <div className="hidden justify-center items-center gap-6 md:flex my-[32px] mx-8 ">
                {cardList3.map((el) => (
                    <OurViewCard key={el.id} card={el} />
                ))}

            </div>
            <div className='md:hidden my-8 flex justify-center '>
                <div className="max-w-[400px] sm:max-w-[60%] px-6 pt-6 pb-8 bg-white rounded shadow border border-gray-300 flex-col justify-evenly items-start gap-8 inline-flex ">
                    <img className=" h-60 relative" src={img} />
                    <div className=" grow shrink basis-0 flex-col justify-between items-start flex">
                        <div className=" flex-col justify-start items-start gap-3 flex">
                            <div className=" text-violet-700 text-sm font-semibold leading-tight">DPIs</div>
                            <div className=" flex-col justify-start items-start gap-3 ">
                                <div className="grow shrink basis-0 text-gray-900 text-xl sm:text-2xl font-semibold ">What is Open Credit Enablement Network?</div>
                                <div className=" text-gray-500 sm:text-base text-sm font-normal leading-normal mt-4">In this article, we will delve into the intricacies of OCEN, its impact on the financial sector</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-3 inline-flex">
                            <div className="flex-col justify-start items-start  flex-wrap mt-4">
                                <div className="text-gray-900 text-sm font-medium leading-tight">Keval Sondarva</div>
                                <div className="text-gray-500 text-sm font-normal leading-tight">20 Jan 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full flex justify-center'>
                <button className='text-center text-black text-base font-semibold font-roboto leading-tight w-[230px] h-12 px-6 py-3.5 bg-white justify-center items-center inline-flex'>See More</button>

            </div>


        </div >

    )
}

export default OurViewSection