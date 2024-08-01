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
      <div id="icons-style" className="flex items-center justify-between ml-10 mr-10 mt-10">        
        <a href="https://www.linkedin.com/in/zeerak-asim" target="_blank"><FaLinkedin id="social-styles" color="white" size={100}/></a>        
        <a href="https://github.com/hahazz4" target="_blank"><AiFillGithub id="social-styles" color="white" size={100}/></a>        
        <a href="mailto:asim.zeerak@gmail.com" target="_blank"><FiMail id="social-styles" color="white" size={100}/></a>        
        <a href="https://www.reddit.com/user/hahazz4/" target="_blank"><AiFillRedditCircle id="social-styles" color="white" size={100}/></a>
      </div>
    </div>
  )
}

export default projects