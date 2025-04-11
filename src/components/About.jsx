import React from 'react'
import myWork from '../assets/mywork.svg'
import myWorkMobile from '../assets/myworkmobile.svg'

const About = () => {
  
  return (
    <div id='about' className='px-[10%] pt-5'>
      <div className=' flex flex-col gap-3 items-center justify-center'>
        <p className='font-bold text-lg text-gray-500'>ABOUT ME</p>
        <p className='text-2xl font-bold lg:text-3xl'>My <span className='text-blue-500'>Work Process</span></p>
        <p className='text-center pb-5'>I follow a simple step-by-step process to complete every project:</p>
        <img src={myWorkMobile} alt="my workprocess" className='md:hidden' />
        <img src={myWork} alt="my workprocess" className='hidden md:flex' />
      </div>
      <div>
        <p>hello</p>
      </div>
    </div>
  )
}

export default About
