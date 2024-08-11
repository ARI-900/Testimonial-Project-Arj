import React, { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {

    // Hook section......
    const review = props.review;
    const [showText, setText] = useState(false);
    const description = review.text;

    // logical section.....

    function clickHandler() {
        setText(!showText);
    }


    // UI section....
  return (

    <div className='flex flex-col md:relative'>

        {/* Image section */}
        <div className='absolute top-[-5.5rem] z-10'>
            <img src={review.image} alt='img'
            className='aspect-square w-[140px] rounded-full z-[50]'
             />
            <div className='aspect-square rounded-full w-[140px] bg-violet-600 absolute top-[-4px] left-[4px] z-[-10]'></div>
        </div>

        {/* card About section */}
        <div className='flex justify-center items-center flex-col gap-1 mt-7'>
            <h3 className='font-bold text-3xl mb-1 tracking-wide capitalize'>{review.name}</h3>
            <p className='uppercase font-semibold text-sm text-violet-300'>{review.job}</p>
        </div>
        
        {/* description */}
        <div className='flex flex-col justify-center items-center mt-5 mb-5'>

            <FaQuoteLeft className=' font-semibold text-[1.5em] text-violet-400' />
            <p
                className='text-slate-500 text-justify my-3 mx-auto'
            >
            {   
                !showText? (description.substring(0, 230)+'... ' ) : description + ' '
            }
            <span className='font-bold text-[0.8rem] text-blue-500 cursor-pointer' onClick={clickHandler}>
                {
                    showText? "show-less" : "show-more"
                }
            </span>
            </p>
            <FaQuoteRight className='font-bold text-[1.5em] text-violet-400' />
        </div>
    </div>
  )
}

export default Card