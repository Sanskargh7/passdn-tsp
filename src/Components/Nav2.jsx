import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ProductsHoverMenu from './Pages/Products/ProductsHoverMenu';
import productMobileArrow from '../assets/Product icons/productMobileArrow.png'
import productMobileArrow2 from '../assets/Product icons/productMobileArrow2.png'
import bluearrow from '../assets/Product icons/bluearrow.png'

export default function Nav() {
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return () => {

        }
    }, [])

    const [click, setClick] = useState(false);
    const [clickProducts, setClickProducts] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    //for mobile
    const handleProductsClick = () => {
        setClickProducts(!clickProducts)
    }

    //for pc 
    const [navProductsClick, setNavProductsClick] = useState(false);
    const handleHoverNav = () => {
        setNavProductsClick(!navProductsClick);

    };



    const content = <>
        <div className='sm:hidden block absolute top-14 w-full left-0 right-0 transition  bg-white mt-10'>
            <ul className='flex-col h-full text-black gap-8 text-[18px] items-center font-roboto font-medium'>
                <NavLink to={'/'} >
                    <li className='p-[15px] pl-4  text-sm font-roboto hover:bg-gray-300 cursor-pointer  '>Home</li>
                </NavLink>

                <NavLink to={'/about'}>
                    <li className='p-[10px] pl-4 text-sm font-p-[8px] font-roboto hover:bg-gray-300 cursor-pointer'>About us</li>
                </NavLink>

                <NavLink onClick={handleProductsClick}  >
                    <li className='p-[10px] px-4 font-medium text-sm font-p-[8px] font-roboto hover:bg-gray-300 cursor-pointer flex justify-between items-center ' >Products <img src={clickProducts ? productMobileArrow2 : productMobileArrow} className='w-3 h-2' alt="" /></li>
                </NavLink>

                <div>
                    {clickProducts && (
                        <ul>
                            <Link to={'/products/mobility'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>Mobility <img src={bluearrow} alt="" className='w-2' /></li></Link>
                            <Link to={'/products/fintech'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>Fintech <img src={bluearrow} alt="" className='w-2' /></li></Link>
                            <Link to={'/products/retails'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>Retails <img src={bluearrow} alt="" className='w-2' /></li></Link>
                            <Link to={'/products/logistics'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>Logistics <img src={bluearrow} alt="" className='w-2' /></li></Link>
                            <Link to={'/products/healthcare'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>Health Care <img src={bluearrow} alt="" className='w-2' /></li></Link>
                            <Link to={'/products/uei'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>UEI<img src={bluearrow} alt="" className='w-2' /></li></Link>
                            <Link to={'/products/genaiandmlmore'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>GEN AI and ML more <img src={bluearrow} alt="" className='w-2' /></li></Link>
                            <Link to={'/products/arvr'}><li className='flex justify-between items-center px-8 text-xs p-4 border-b-[1px] border-gray-300'>ARVR <img src={bluearrow} alt="" className='w-2' /></li></Link>


                        </ul>
                    )}
                </div>

                <NavLink to={'/blog'}>
                    <li className='p-[10px] pl-4 text-sm font-p-[8px] font-roboto hover:bg-gray-300 cursor-pointer'>Blog</li>
                </NavLink>
                <NavLink to={'/contact'} className=""><li className='p-[10px]  text-sm font-p-[8px] font-roboto  cursor-pointer'>
                    <div className='bg-black m-2 text-white p-3 text-center'>Contact</div></li></NavLink>



            </ul>

        </div>
    </>
    return (
        <>
            <div className="fixed z-50 text-black w-[100%] bg-[white]  border-b-[1px] border-[#828282]">

                <div className="h-4vh px-8 flex justify-between sm:justify-between z-auto sm:px-[3%] h-[40px] py-[48px] items-center w-full ">
                    <div className='text-black'>
                        <div className=" text-4xl font-semibold font-['Roboto'] leading-10">Passdn</div>
                    </div>

                    <ul className='sm:flex gap-10 text-[18px] items-center hidden justify-evenly sm:px-0 md:pl-12 mx-2'>
                        <NavLink to={'/'} className={({ isActive }) => {
                            return (isActive ? 'border-b-2 border-navBlue hover:border-0' : '')
                        }} >
                            <li className='p-[10px] font-semibold text-sm font-roboto hover:border-b-2 border-navBlue cursor-pointer  '>Home</li>
                        </NavLink>

                        <NavLink to={'/about'} className={({ isActive }) => {
                            return (isActive ? 'border-b-2 border-navBlue hover:border-0' : '')
                        }}>
                            <li className='p-[10px] font-semibold text-sm font-p-[8px] font-roboto hover:border-b-2 border-navBlue cursor-pointer whitespace-nowrap'>About us</li>
                        </NavLink>

                        <NavLink onClick={handleHoverNav} className={navProductsClick ? 'border-b-2 border-navBlue hover:border-0' : ''} >
                            <li className='p-[10px] font-semibold text-sm font-p-[8px] font-roboto hover:border-b-2 border-navBlue cursor-pointer'>Products</li>
                        </NavLink>

                        <NavLink to={'/blog'} className={({ isActive }) => {
                            return (isActive ? 'border-b-2 border-navBlue hover:border-0' : '')
                        }}>
                            <li className='p-[10px] font-semibold text-sm font-p-[8px] font-roboto hover:border-b-2 border-navBlue cursor-pointer'>Blog</li>
                        </NavLink>



                    </ul>
                    <div className="bg-black text-white md:w-[180px] h-12 px-6  justify-center items-center sm:inline-flex hidden" >

                        <NavLink to={'/contact'} className="text-center text-base font-semibold font-['Roboto'] leading-tight">Contact</NavLink>
                    </div>

                    <div className='sm:hidden'>
                        {click && content}
                    </div>

                    <button className='block sm:hidden transition' onClick={handleClick}>

                        {click ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>


                </div>


            </div >
            <div >
                {navProductsClick && (
                    <ProductsHoverMenu />
                )}
            </div>
        </>
    )
}
