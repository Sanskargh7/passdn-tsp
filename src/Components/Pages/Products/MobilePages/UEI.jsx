import React from 'react'
import { menuItems } from '../../../../Data/Menu'
import bg from '../../../../assets/about/aboutUsCircle.png'
import bluemark from '../../../../assets/bluemark2.png'
import Card from '../Card'
import Nav from '../../../Nav'
import Footer from '../../../Footer'


function UEI() {

    const filterAndExtractDescriptions = (menuItems, altTitle) => {
        return menuItems
            .filter(item => item.altTitle === altTitle)
            .flatMap(item => item.description);
    };

    const selectedMenuItem = filterAndExtractDescriptions(menuItems, 'UEI');


    return (
        <div className='flex flex-col'>
            <Nav></Nav>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[515px] overflow-hidden'>
                <div className='absolute inset-0 bg-[#151515]'>
                    <img src={bg} alt="Background" className='w-full h-full object-cover object-center ' />
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-white font-roboto text-[40px] sm:text-[54px] md:text-[74px] font-semibold leading-tight sm:leading-snug md:leading-tight tracking-[-0.48px] mb-2 sm:mb-4 md:mb-6 pt-[90px]'>
                            UEI
                        </h1>
                        <img
                            src={bluemark}
                            alt="Blue Mark"
                            className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[310px] mx-auto -mt-4 sm:-mt-6 md:-mt-8'
                        />
                    </div>
                </div>
            </div>

            <div className='flex-1 sm:overflow-y-scroll no-scrollbar'>
                <div className='bg-white p-4 text-white lg:grid lg:grid-cols-2 gap-4  overflow-y-auto'>
                    {selectedMenuItem.map((el) => {
                        return <Card key={el.id} el={el} />
                    })}
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default UEI