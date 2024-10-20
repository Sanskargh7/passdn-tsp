import React, { useState } from 'react'
import { menuItems } from '../../../Data/Menu.js'
import Card from './Card.jsx'
import arrowwhite from '../../../assets/Product icons/arrowwhite.png'
import arrowblack from '../../../assets/Product icons/arrowblack.png'
function ProductsHoverMenu() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemHover = (des) => {
        setSelectedMenuItem(des);
    };

    const handleMenuItemNotHover = () => {
        setSelectedMenuItem(null)
    }
    return (
        <div className='bg-white text-white mt-[100px] w-[50%]  z-50 left-1/4   fixed sm:flex justify-around hidden overflow-y-auto ' onMouseLeave={() => handleMenuItemNotHover()}>
            <div className='xl:w-[16rem] bg-white min-h-[80vh] ' >
                <ul className='list-none xl:w-[16rem] sm:sticky'>
                    {menuItems.map((item) =>
                        <li className={`${selectedMenuItem === item.description ? 'bg-black text-white' : 'bg-white text-black'} p-4 flex justify-between text-sm   `} key={item.id} onMouseEnter={() => handleMenuItemHover(item.description)} >
                            <span>{item.title}</span>
                            <img src={selectedMenuItem === item.description ? arrowwhite : arrowblack} alt="" className='w-5' />
                        </li>
                    )}
                </ul>
            </div>

            <div className='flex-1 sm:overflow-y-scroll no-scrollbar'>
                {selectedMenuItem && (
                    <div className='bg-white p-4 text-white lg:grid lg:grid-cols-2 gap-2 absolute  overflow-y-auto'>
                        {console.log(selectedMenuItem)}
                        {selectedMenuItem.map((el) => {
                            return <Card key={el.id} el={el} />
                        })}
                    </div>
                )}

            </div>


        </div>
    )
}

export default ProductsHoverMenu