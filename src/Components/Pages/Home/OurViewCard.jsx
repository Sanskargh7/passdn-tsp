import React from 'react'
import img from '../../../assets/Home/Image.png'
function OurViewCard(props) {
    const { card } = props;
    return (
        <div className="w-full h-[580px] px-6 pt-6 pb-8 bg-white rounded shadow border border-gray-300 flex-col justify-evenly items-start gap-8 inline-flex">
            <img className=" h-60 self-center " src={img} />
            <div className="w-full grow shrink basis-0 flex-col justify-between items-start flex">
                <div className="w-full flex-col justify-start items-start gap-2 sm:gap-3 flex">
                    <div className="text-violet-700 text-xs sm:text-[13px] md:text-sm lg:text-[15px] font-semibold leading-tight">{card.sub}</div>
                    <div className="w-full flex-col justify-start items-start gap-2 sm:gap-3">
                        <div className="w-full text-gray-900 text-lg sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold">{card.h}</div>
                        <div className="w-full text-gray-500 text-sm sm:text-[15px] md:text-base lg:text-[17px] font-normal leading-normal mt-2 sm:mt-3 md:mt-4">{card.text}</div>
                    </div>
                </div>
                <div className="w-full justify-start items-center gap-2 sm:gap-3 inline-flex mt-3 sm:mt-4">
                    <div className="flex-col justify-start items-start flex-wrap">
                        <div className="text-gray-900 text-xs sm:text-[13px] md:text-sm lg:text-[15px] font-medium leading-tight">{card.author}</div>
                        <div className="text-gray-500 text-xs sm:text-[13px] md:text-sm lg:text-[15px] font-normal leading-tight">{card.date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurViewCard