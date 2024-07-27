import React from 'react'
import ScrollButton5 from './scrollbutton5'
import {AiFillGithub, AiFillRedditCircle} from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

const projects = () => {
  return (
    <div className="mt-20">
      <h1 className="text-white text-center text-lg font-sm md:text-4xl">
        My Socials
      </h1>
      <div className="flex items-center justify-between ml-10 mr-10 mt-10">
        {/* <div id="social-styles" className="hover:bg-white hover:text-[#0e0217] p-4 rounded-full"> */}
          <a href="https://www.linkedin.com/in/zeerak-asim" target="_blank"><FaLinkedin color="white" size={100}/></a>
        {/* </div> */}
        <div id="social-styles">
          <a href="https://github.com/hahazz4" target="_blank"><AiFillGithub color="white" size={100}/></a>
        </div>
        <div id="social-styles">
          <a href="mailto:asim.zeerak@gmail.com" target="_blank"><FiMail color="white" size={100}/></a>
        </div>
        <div id="social-styles">
          <a href="https://www.reddit.com/user/hahazz4/" target="_blank"><AiFillRedditCircle color="white" size={100}/></a>
        </div>
      </div>
    </div>
  )
}

export default projects