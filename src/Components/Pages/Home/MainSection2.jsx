import React from 'react'
import homeCircleBg from '../../../assets/Home/HomeCircleBg.png'
import mobileCircleMain from '../../../assets/Home/mobileCircleMain.png'
function MainSection2() {
    return (
        <div>
            <div className='bg-[#151515] w-full hidden sm:block relative '>
                <img src={homeCircleBg} alt="" className='h-[70%] pt-[100px] self-end ' />
                <div className='text-white absolute left-[5%] hidden sm:block sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold sm:top-[45%] xl:top-[40%]'>Provide Open Networks <br />Tech-Solutions</div>
            </div>


            <div className='bg-[#151515] w-full min-h-[90vh] sm:hidden flex-col justify-evenly flex gap-0'>
                <img src={mobileCircleMain} alt="" className=' h-[50%] pt-[100px] ' />
                <div className=" text-center text-white text-3xl font-semibold font-['Roboto'] px-4 pb-8">Provide Open Networks <br />Tech-Solutions</div>
            </div>
        </div>


    )
}

export default MainSection2
