import React from 'react'
import ScrollButton3 from './scrollbutton3'
import { GiClick } from "react-icons/gi";

const resume = () => {
  return (
    <div id="resume_box" className="justify-center items-center mt-20">
      <h1 className="text-white text-center text-lg font-sm md:text-4xl">
        Zeerak&apos;s Resume
      </h1>
      <div className="flex text-white justify-center mt-3">
        <p className="text-white text-center mr-2">Click Here -&gt;</p>
        <a href = "/Zeerak_Resume_V4.5.pdf" target = "_blank"><GiClick color='white' size={35}/></a>
      </div>
      <div className="mt-10">
          <ScrollButton3 />
      </div>
    </div>
  )
}

export default resume
