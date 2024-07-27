import React from 'react'
import ScrollButton3 from './scrollbutton3'
import { LuArrowRightCircle } from 'react-icons/lu'

const resume = () => {
  return (
    <div className="flex justify-center mt-20">
      <h1 className="text-white text-center text-lg font-sm md:text-4xl">
        Zeerak's Resume
      </h1>
      <div className="ml-10 mr-10">
        <LuArrowRightCircle size={50} color='white'/>
      </div>
      <div className="text-white">
        <a href = "/Zeerak_Resume_S24.PDF" target = "_blank">Click Here</a>
      </div>
    </div>
  )
}

export default resume