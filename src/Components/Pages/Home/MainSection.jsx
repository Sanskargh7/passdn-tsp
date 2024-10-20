import React from 'react'
import Nav from '../../Nav'
import circleMain2 from '../../../assets/Home/circleMain2.png'
import img1 from '../../../assets/Home/icons/nest.png'
import img2 from '../../../assets/Home/icons/govstack.png'
import img3 from '../../../assets/Home/icons/ondc.png'
import img4 from '../../../assets/Home/icons/arvr.png'

import img5 from '../../../assets/Home/icons/uhi.png'
import img6 from '../../../assets/Home/icons/aiCircle.png'
import img7 from '../../../assets/Home/icons/uei.png'


function MainSection() {
    return (
        <div className='hidden xl:block'>
            <Nav className='z-[50]'></Nav>

            <div className='pt-[100px] h-[1100px] bg-[#151515]  z-[-20]  overflow-hidden'>

                <div className=' absolute left-[600px] z-[0]'>
                    <img src={circleMain2} alt="" className='w-[100%]' />
                </div>

                {/* <div
                    className="bg-cover bg-center min-h-screen w-full"
                    style={{
                        backgroundImage: `url(${circleMain})`,
                    }}
                ></div> */}

                <img src={img1} alt="" className='absolute left-[50vw] w-[124px] mt-[10px]' />
                <img src={img2} alt="" className='absolute left-[80vw] mt-[150px]' />
                <img src={img3} alt="" className='absolute left-[60vw] mt-[257px]' />
                <img src={img1} alt="" className='absolute right-1 mr-[5px] mt-[500px]' />
                <img src={img5} alt="" className='absolute left-[50vw] mt-[55vh]' />
                <img src={img6} alt="" className='absolute left-[700px] mt-[90vh]' />
                <img src={img7} alt="" className='absolute left-[1020px] mt-[80vh]' />

                <div className='relative font-roboto text-white pl-[100px] pt-[274px] z-[10]'>
                    < h1 className='text-white font-roboto text-[74px] font-semibold leading-[111px] tracking-[-0.48px] z-[10] ' > Provide Open Networks <br />Solutions</h1 >
                </div >
            </div >
        </div>
    )
}

export default MainSection