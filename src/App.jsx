import React from 'react'
import Testimonial from './components/Testimonial'
import reviews from './data'

const App = () => {





  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-200'>

      <div className="text-center">
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='h-[4px] w-2/3 bg-violet-600 mx-auto mt-2'></div>
      </div>

      {/* Testimonials card comonents */}
      <Testimonial reviews={reviews} />
    </div>
  )
}

export default App