import React from 'react'
import Image from 'next/image'
import ScrollButton3 from './scrollbutton3'
import { caveat, roboto } from '@/app/fonts';

const Certs = () => {
  return (
    <div className="mt-10">
      <h2 className="text-white text-center text-3xl md:text-4xl">
        <span className={caveat.className}><b>Certifications</b></span>
      </h2>
        <a className="sm:p-2 md:p-4 lg:p-5 xl:p-5 rounded-xl text-white" href='https://catalog-education.oracle.com/ords/certview/sharebadge?id=265761F6090F99DB28640373E9C6E2041832FACFE54603A4BBA0F09B86E58529' target="_blank">
          <Image 
              src="/images/OCI25AIBadge.png"
              alt="Image of OCI AI Foundations Associate Badge"
              width={200}
              height={200}
              className="rounded-full aspect-square object-cover mx-auto"/>
        </a>

        <a className="sm:p-2 md:p-4 lg:p-5 xl:p-5 rounded-xl text-white" href='/food_handler_cert.pdf' target="_blank">
          <Image 
              src="/images/food_handler_badge.png"
              alt="Image of Food Handler Badge"
              width={200}
              height={200}
              className="mt-5 rounded-full aspect-square object-cover mx-auto"/>
        </a>

        <a className="sm:p-2 md:p-4 lg:p-5 xl:p-5 rounded-xl text-white">
          <Image 
              src="/images/first_aid_cpr_badge.png"
              alt="Image of Life Saving Society Badge (First Aid + CPR-C)"
              width={200}
              height={200}
              className="rounded-full aspect-square object-cover mx-auto"/>
          <h5 className='text-white text-center text-md px-5 md:text-lg lg:text-xl'><span className={roboto.className}>(First Aid + CPR-C)</span></h5>
        </a>

        <div className="mt-10">
          <ScrollButton3 />
        </div>
    </div>
  )
}

export default Certs