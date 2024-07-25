import React from 'react'
import { LampContainer, LampDemo } from './ui/lamp'
import ScrollButton2 from '@/components/scrollbutton2'

const hero = () => {
  return (
    // <div className="pb-20 pt-36">
    <div className="mt-40">
      <h1 className="text-white text-center text-4xl font-medium 
        md:text-5xl">My name is Zeerak.</h1>
      <ScrollButton2/>
    </div>
  )
}

export default hero