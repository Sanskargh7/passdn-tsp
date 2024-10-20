import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Card({ el }) {
    let src = el.iconblack
    const [imgSrc, setImgSrc] = useState(src);
    const handleMouseEnter = () => {
        setImgSrc(el.iconwhite);
    };

    const handleMouseLeave = () => {
        setImgSrc(src);
    };

    const [enter, setEnter] = useState(false);
    const handleEnter = () => {
        setEnter(!enter);
    }

    return (
        <Link to={`/Products/${el.altTitle}/${el.heading}`} >
            <div className='text-xs text-black flex-col hover:bg-black hover:text-white p-3' onMouseEnter={handleEnter} onMouseLeave={handleEnter} >
                <img src={enter ? el.iconwhite : el.iconblack} alt="" className='w-6' />
                <div className='font-semibold my-2'>
                    {el.h}
                </div>
                <div className='text-[9px]'>
                    {el.sub}
                </div>
            </div>
            {console.log(`/Products/${el.altTitle}/${el.heading}`)}
        </Link>
    )
}

export default Card