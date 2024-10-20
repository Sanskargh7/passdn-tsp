import React from 'react'

function IndustryCard(props) {
    const { card } = props;
    return (
        <div className="self-stretch px-6 pt-6 pb-12 md:pb-16 sm:pb-20 rounded-2xl border border-zinc-300 justify-center items-start inline-flex relative z-10 bg-white">
            <div className="pr-24 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-slate-800 text-2xl font-semibold font-['Roboto'] leading-[30px]">{card.h}</div>
                <div className="text-gray-600 text-base font-normal font-['Roboto'] leading-normal">{card.sub}</div>
            </div>
            <img className="flex-end absolute bottom right-4 top-16 sm:top-28 md:top-20 overflow-hidden lg:top-[5rem] max-h-[110px] max-w-full z-10" src={card.img} />
        </div>
        // <div className="h-[186px] px-6 pt-6 pb-[76px] rounded-2xl border border-zinc-300 justify-center items-start inline-flex relative z-0">
        //     <div className="grow shrink basis-0 pr-[104px] flex-col justify-start items-start gap-2 inline-flex">
        //         <div className="self-stretch text-slate-800 text-2xl font-semibold font-['Roboto'] leading-[30px]">{card.h}</div>
        //         <div className="text-[#121D2B99] text-base font-normal font-['Roboto'] leading-normal">{card.sub}</div>
        //     </div>
        //     <img className="left-[300px] top-[100px] absolute" src={card.img} />
        // </div>
    )
}

export default IndustryCard