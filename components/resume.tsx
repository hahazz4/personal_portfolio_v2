import React from 'react'
// import ScrollButton3 from './scrollbutton3'
import { GiClick } from "react-icons/gi";
import { caveat, roboto } from '@/app/fonts';

const resume = () => {
  return (
    <div id="resume_box" className="justify-center items-center mt-20">
      <h1 className="text-white text-center text-xl font-sm md:text-5xl">
        <span className={caveat.className}>Zeerak&apos;s Resume</span>
      </h1>
      <div className="flex text-white justify-center mt-3">
        <p className="text-white text-center mr-2"><span className={roboto.className}>Click Here -&gt;</span></p>
        <a href = "\zeerak_asim_resume.pdf" target = "_blank"><GiClick color='white' size={35}/></a>
      </div>
    </div>
  )
}

export default resume
