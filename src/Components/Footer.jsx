import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faFacebookSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import in1 from '../assets/Footer/initiative1.png'
import in2 from '../assets/Footer/initiative2.png'
import x1 from '../assets/Footer/x1.png'
import x2 from '../assets/Footer/x2.png'
import x3 from '../assets/Footer/x3.png'
import x4 from '../assets/Footer/x4.png'
import x5 from '../assets/Footer/x5.png'
import x6 from '../assets/Footer/x6.png'
import x7 from '../assets/Footer/x7.png'
import x8 from '../assets/Footer/x8.png'




export default function Footer() {

    return (
        <div className='px-8 sm:px-18 lg:px-[120px]'>
            {/*div below is follow us*/}
            <div className='py-[25px] flex items-center'>
                <span class="text-neutral-800 text-base font-medium text-[16px] py-2 font-['Roboto'] leading-normal inline-block mr-2">Follow us</span>
                <a href=''><FontAwesomeIcon className='min-h-[24px] min-w-[24px] px-2' icon={faInstagram}></FontAwesomeIcon> </a>
                <a href=''><FontAwesomeIcon className='min-h-[24px] min-w-[24px] px-2' icon={faYoutube}></FontAwesomeIcon> </a>
                <a href=''><FontAwesomeIcon className='min-h-[24px] min-w-[24px] px-2' icon={faLinkedin}></FontAwesomeIcon> </a>
                <a href=''><FontAwesomeIcon className='min-h-[24px] min-w-[24px] px-2' icon={faFacebookSquare}></FontAwesomeIcon> </a>
                <a href=''><FontAwesomeIcon className='min-h-[24px] min-w-[24px] px-2' icon={faXTwitter}></FontAwesomeIcon> </a>

            </div>
            <hr />

            <div className='md:flex-row flex flex-col gap-20 py-[40px]'>

                {/*this div wraps user app div and adresses div*/}
                <div className='flex sm:gap-24 gap-2'>

                    <div className='flex flex-col text-neutral-800 text-base font-medium font-roboto leading-normal gap-[8px] w-[183px] '>
                        <a href="" className='p-[10px]'>User App</a>
                        <a href="" className='p-[10px]'>Life At Passdn</a>
                        <a href="" className='p-[10px]'>Driver App</a>
                        <a href="" className='p-[10px]'>About us</a>
                        <a href="" className='p-[10px]'>About ONDC</a>
                    </div>


                    <div className=" flex-col justify-start items-start gap-4 inline-flex lg:min-w-[40%]">
                        <div className="px-2 justify-center items-center gap-2.5 inline-flex text-gray-600 text-base font-normal font-['Roboto'] leading-normal">Addresses </div>


                        <div className=" p-2 justify-center items-center gap-2 inline-flex max-w-[357px] text-gray-600 text-base font-normal font-['Roboto'] leading-normal">GUSEC West Wing, Near Department of Botany University School of Sciences Gujarat University, Gujarat 380009</div>

                        <div className=" w-full border-b-2 border-gray"></div>

                        <div className=" text-gray-600 text-base font-normal font-['Roboto'] leading-normal">OUR Initiative </div>
                        <div className=" justify-start items-start gap-4 inline-flex">
                            <img className="w-16 h-16" src={in1} />
                            <img className="w-[64.67px] h-16 rounded-[336.84px]" src={in2} />
                        </div>


                    </div>
                </div>



                <div className=''>
                    <div className='max-w-full text-[#5F6368] text-base font-normal font-roboto pb-4'>Supported by</div>
                    <div className='w-[100%]'>
                        <div className='flex gap-4 flex-wrap '>
                            <img src={x1} alt="manipal" className='max-w-full max-h-[80px] ' />

                            <img src={x2} alt="" className='max-w-full max-h-[80px]' />

                            <img src={x3} alt="" className='max-w-full max-h-[80px]' />

                            <img src={x4} alt="" className='max-w-full max-h-[80px]' />
                            <img src={x5} alt="" className='max-w-full max-h-[80px]' />

                            <img src={x6} alt="" className='max-w-full max-h-[80px]' />

                            <img src={x7} alt="" className='max-w-full max-h-[80px]' />

                            <img src={x8} alt="" className='max-w-full max-h-[80px]' />

                        </div>
                    </div>
                </div>





                {/* <div className='p-[8px]'>
                    <div className='max-w-full text-[#5F6368] text-base font-normal font-roboto'>Supported by</div>
                    <div className='w-[100%]'>
                        <div className='flex gap-[16px] py-[16px]'>
                            <img src={r1c1} alt="manipal" className='max-w-full' />
                            
                            <img src={r1c2} alt="" className='max-w-full' />
                            
                            <img src={r1c3} alt="" className='max-w-full' />
                            
                            <img src={r1c4} alt="" className='max-w-full' />
                        </div>
                        <div className='flex gap-[16px]'>
                            <img src={r2c1} alt="" className='max-w-full' />
                            
                            <img src={r2c2} alt="" className='max-w-full' />
                            
                            <img src={r2c3} alt="" className='max-w-full' />
                            
                            <img src="" alt="" className='max-w-full' />

                        </div>
                    </div>
                </div> */}

            </div>


            <hr />
            <div className='flex justify-between items-centre font-roboto text-[#5F6368] text-sm sm:text-base font-medium my-6 md:flex-row flex-col w-full gap-6'>
                <div className='flex justify-evenly'>
                    <a href="" className='p-2'>Privacy</a>
                    <a href="" className='p-2'>Terms</a>
                    <a href="" className='p-2'>Payment Policy</a>
                    <a href="" className='p-2'>Help</a>

                </div>
                <div>
                    <span className='sm:text-sm text-xs text-right flex justify-center w-full flex-wrap p-2'>COPYRIGHT © 2024-26. ALL RIGHTS RESERVED BY <a href="https://passdn.com/" className='underline text-left'>Passdn Technologies PVT. LTD.</a></span>

                </div>
            </div>

        </div>


    )
}

{/* <div class="w-[1296px] h-[331px] relative border-b border-gray-300">
                <div class="w-[1306px] pr-[334px] left-[-10px] top-[40px] absolute justify-center items-start gap-[30px] inline-flex">
                    <div class="grow shrink basis-0  pt-2 pb-[85px] flex-col justify-start items-start inline-flex">
                        <div class=" h-[169px] flex-col justify-start items-start gap-2 flex">
                            <div class=" h-[51px] pb-[7px] flex-col justify-start items-start flex">
                                <div class="p-2.5  rounded justify-start items-start inline-flex">
                                    <div class="text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">Programs</div>
                                </div>
                            </div>
                            <div class=" h-[51px] pb-[7px] flex-col justify-start items-start flex">
                                <div class="p-2.5  rounded justify-start items-start inline-flex">
                                    <div class="text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">Cloud</div>
                                </div>
                            </div>
                            <div class=" h-[51px] pb-[7px] flex-col justify-start items-start flex">
                                <div class="p-2.5  rounded justify-start items-start inline-flex">
                                    <div class="text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grow shrink basis-0  pt-2 pb-[85px] flex-col justify-start items-start inline-flex">
                        <div class=" h-[169px] flex-col justify-start items-start gap-2 flex">
                            <div class=" h-[51px] pb-[7px] flex-col justify-start items-start flex">
                                <div class="p-2.5  rounded justify-start items-start inline-flex">
                                    <div class="text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">Campus</div>
                                </div>
                            </div>
                            <div class=" h-[51px] pb-[7px] flex-col justify-start items-start flex">
                                <div class="p-2.5  rounded justify-start items-start inline-flex">
                                    <div class="text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">Alumni</div>
                                </div>
                            </div>
                            <div class=" h-[51px] pb-[7px] flex-col justify-start items-start flex">
                                <div class="p-2.5  rounded justify-start items-start inline-flex">
                                    <div class="text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">About us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grow shrink basis-0  pl-2.5 py-2 flex-col justify-start items-start inline-flex">
                        <div class=" h-[246px] flex-col justify-start items-start gap-2 flex">
                            <div class="w-[294px] h-[119px] relative">
                                <div class="h-12 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <div class="text-gray-600 text-base font-normal font-['Roboto'] leading-normal">Looking for information about your<br />nearest Google for Startups Campus?</div>
                                </div>
                            </div>
                            <div class="w-[294px] h-[119px] relative">
                                <div class="h-12 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <div class="text-gray-600 text-base font-normal font-['Roboto'] leading-normal">Looking for information on Google for<br />Startups Cloud Program?</div>
                                </div>
                                <div class="p-2.5 left-[-10px] top-[68px] absolute  rounded justify-start items-start inline-flex">
                                    <div class="text-blue-700 text-base font-medium font-['Roboto'] leading-normal">Find out more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div class="w-[1296px] h-[119px] pt-10 pb-2 justify-start items-start inline-flex">
                <div class="w-[1227px] h-14 relative">
                    <div class="w-[125px] pr-6 pb-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                        <div class=" rounded justify-start items-start inline-flex">
                            <div class="text-gray-600 text-base font-medium font-['Roboto'] leading-normal">Privacy</div>
                        </div>
                    </div>
                    <div class="w-[115px] pr-6 pb-4 left-[128.31px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div class=" rounded justify-start items-start inline-flex">
                            <div class="text-gray-600 text-base font-medium font-['Roboto'] leading-normal">Terms</div>
                        </div>
                    </div>
                    <div class="w-[77px] pr-6 pb-4 left-[278px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div class=" rounded justify-start items-start inline-flex">
                            <div class="text-gray-600 text-base font-medium font-['Roboto'] leading-normal">Payment policy</div>
                        </div>
                    </div>
                    <div class="w-[70px] pr-6 pb-4 left-[356.89px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div class=" rounded justify-start items-start inline-flex">
                            <div class="text-gray-600 text-base font-medium font-['Roboto'] leading-normal">Help</div>
                        </div>
                    </div>
                </div>
                <div class="w-[69px] pb-6 justify-start items-start flex">
                    <div class=" flex-col justify-start items-start inline-flex">
                        <div class=" rounded justify-start items-start gap-2 inline-flex">
                            <div class="w-6 h-6 justify-start items-center flex">
                                <div class="w-6 h-6 relative">
                                    <div class="w-6 h-6 left-0 top-0 absolute"></div>
                                </div>
                            </div>
                            <div class="text-gray-600 text-base font-medium font-['Roboto'] leading-normal flex items-center">  COPYRIGHT © 2024-26. ALL RIGHTS RESERVED BY Passdn Technologies PVT. LTD.</div>
                        </div>
                    </div>
                </div>
            </div> */}
