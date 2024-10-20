import React from 'react'
import img from '../../../assets/Home/contactImage.png'
import bgCircle2 from '../../../assets/Home/bgCircle2.png'
function GetInTouchSection() {
    return (
        <>
            <div className='relative'>
                <img src={bgCircle2} alt="" className='absolute z-[-1] w-[500px] pt-[42px] hidden lg:block' />
                <div className='py-[48px] sm:py-[96px] px-4 sm:px-10 xl:px-28'>
                    <div className="text-center sm:hidden text-[#6941C6] text-xl sm:text-2xl font-bold font-['Roboto'] mb-4">Contact Us</div>
                    <div className="text-center text-slate-800 text-3xl sm:text-4xl md:text-5xl font-semibold font-['Roboto'] leading-tight sm:leading-[56px] mx-auto">Get in touch</div>
                    <div className="text-center text-[#121D2B99] text-sm sm:text-base font-normal font-['Roboto'] leading-normal mx-auto mt-[16px] mb-[32px]">Our friendly team would love to hear from you.</div>
                    <div className='p-4 sm:p-[32px] flex flex-col lg:flex-row justify-between bg-white rounded-[8px] border-[1px] border-[#E6E6E6]'>
                        <div className='w-full lg:w-1/2 lg:pr-[32px]'>
                            <div className="mb-6">
                                <label className="block text-slate-700 text-sm font-medium font-['Roboto'] leading-tight mb-1.5">First name</label>
                                <input placeholder="First Name" className="w-full px-4 py-3 bg-white rounded-lg shadow border border-gray-300" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-slate-700 text-sm font-medium font-['Roboto'] leading-tight mb-1.5">Last name</label>
                                <input placeholder="Last Name" className="w-full px-4 py-3 bg-white rounded-lg shadow border border-gray-300" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-slate-700 text-sm font-medium font-['Roboto'] leading-tight mb-1.5">Email</label>
                                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white rounded-lg shadow border border-gray-300" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-slate-700 text-sm font-medium font-['Roboto'] leading-tight mb-1.5">Phone Number</label>
                                <div className='flex bg-white rounded-lg shadow border border-gray-300'>
                                    <select className="text-slate-700 text-sm font-medium font-['Roboto'] leading-tight p-3">
                                        <option>IND</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                    </select>
                                    <input placeholder="+91 00000-00000" className="flex-grow px-4 py-3" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-slate-700 text-sm font-medium font-['Roboto'] leading-tight mb-1.5">Message</label>
                                <textarea className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 h-[128px]"></textarea>
                            </div>
                            <button className="w-full h-12 px-5 py-3 bg-slate-800 rounded-lg shadow border border-slate-800 text-white text-base font-medium font-['Roboto'] leading-normal">Send message</button>
                        </div>
                        <div className='hidden lg:block lg:w-1/2'>
                            <img src={img} alt="" className='max-w-full h-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouchSection
