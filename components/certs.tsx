import React from 'react'
import Image from 'next/image'
import ScrollButton3 from './scrollbutton3'

const Certs = () => {
  return (
    <div className="mt-10">
        <a className="sm:p-2 md:p-4 lg:p-5 xl:p-5 rounded-xl text-white" href='https://catalog-education.oracle.com/ords/certview/sharebadge?id=265761F6090F99DB28640373E9C6E2041832FACFE54603A4BBA0F09B86E58529' target="_blank">
        <Image 
            src="/images/OCI25AIBadge.png"
            alt="Image of OCI AI Foundations Associate Badge"
            width={200}
            height={200}
            className="rounded-full aspect-square object-cover mx-auto"/>
        </a>

        <div className="mt-10">
          <ScrollButton3 />
        </div>
    </div>
  )
}

export default Certs