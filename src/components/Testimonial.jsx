import React, { useState } from 'react'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Testimonial = (props) => {
    
    // hook components
    const reviews = props.reviews;
    const [index, setIndex] = useState(0);


    // logical section
    function randomGenerateHandler() {
        
        while(true) {
            var randomIndex = Math.floor(Math.random() * reviews.length);

            if(randomIndex !== index) {
                break;
            }
        }
        setIndex(randomIndex);
    }

    function leftHandler() {

        if(index === 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightHandler() {

        if(index === reviews.length - 1) {
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }



    // UI components...
  return (
    <div className=' w-[25rem] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 rounded-lg shadow-md
     hover:shadow-2xl duration-700 transition-all'>
        <div>
            <Card review={reviews[index]} />
        </div>

        {/* common part for every cards */}
        <div className='flex justify-center items-center gap-5 mt-1'>
            <button className='text-4xl text-violet-400 font-semibold hover:text-violet-500 transition-all duration-300'
            onClick={leftHandler}>
                <FaAngleLeft  />
            </button>
            <button className='text-4xl text-violet-400 font-semibold hover:text-violet-500 transition-all duration-300'
            onClick={rightHandler}>
                <FaAngleRight  />
            </button>
        </div>

        
        {/* Surprise me button */}
        <button className='mt-3 font-bold text-[0.99rem] px-6 py-2 text-white bg-violet-400 rounded-lg 
        hover:bg-violet-600 transition-all duration-300 border-0'
        onClick={randomGenerateHandler}>
            Surprise Me
        </button>

    </div>
  )
}

export default Testimonial