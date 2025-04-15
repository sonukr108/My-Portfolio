import React, { useRef } from 'react'
import { MdOutlineRocketLaunch, MdArrowForward, MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const Contact = () => {

  const formRef = useRef();

  const serviceKey = import.meta.env.VITE_EMAILSERVICEID
  const tempelateKeyMe = import.meta.env.VITE_TEMPLATEID_ME
  const tempelateKeyUser = import.meta.env.VITE_TEMPLATEID_USER
  const publicProductKey = import.meta.env.VITE_PUBLICKEY

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        serviceKey,
        tempelateKeyMe,
        formRef.current,
        publicProductKey
      ).then(
        (result) => {
          console.log('SUCCESS!', result.text)
          toast.success('Message sent successfully!')
          formRef.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
          toast.error('Failed to send message. Please try again.')
        }
      )
      emailjs.sendForm(
        serviceKey,
        tempelateKeyUser,
        formRef.current,
        publicProductKey
      ).then(
        (result) => {
          console.log('SUCCESS! to user', result.text)
        },
        (error) => {
          console.log('FAILED... to user', error.text)
        }
      )
  };

  return (
    <div id='contact' className='px-[10%] py-10 w-full min-h-[140vh] md:min-h-[100vh]'>
      <div className=' flex flex-col gap-3 items-center justify-center'>
        <p className='font-bold text-xl lg:text-2xl text-gray-500'>CONTACT</p>
        <p className='text-xl lg:text-2xl font-semibold pb-4'>Contact <span className='text-blue-400'>With Me</span></p>

        <div className='flex flex-col md:flex-row gap-5 w-full justify-between'>

          <div className="left w-full md:w-[50%] md:px-5 lg:px-10 flex flex-col gap-8 justify-center ">
            <p className='text-2xl md:text-4xl font-semibold'>Let’s <span className='text-blue-500'>connect!</span> <br />I’m open to discussing <span className='text-blue-500'>projects</span>, <span className='text-blue-500'>collaborations</span>, or <span className='text-blue-500'>job</span> opportunities.</p>
            <div className='flex gap-1 md:gap-3 items-center bg-[#17171A] p-2 md:p-3 w-fit text-sm rounded-lg'>
              <MdOutlineEmail size={40} className='bg-[#2b2b31]  p-1 rounded-lg'/>
              <div>
                <p className='font-semibold'>Mail me at</p>
                <a href="mailto:bhaiyasonu108@gmail.com" className='text-blue-500'>bhaiyasonu108@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="right w-full md:w-[50%] lg:w-[40%] bg-[#17171A] p-4 md:p-7 rounded-lg">
            <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <p className='flex items-center gap-3 text-lg md:text-xl font-semibold'>Send me a message <MdOutlineRocketLaunch /></p>
              <input type="text" placeholder='Full name *' name='name' required className='w-full border-1 border-gray-500 p-3 rounded-sm outline-none focus:border-green-500' />
              <input type="text" placeholder='Phone number *' name='phone' className='w-full border-1 border-gray-500 p-3 rounded-sm outline-none' />
              <input type="email" placeholder='Email address *' name='email' required className='w-full border-1 border-gray-500 p-3 rounded-sm outline-none' />
              <input type="text" placeholder='Subject' name='subject' className='w-full border-1 border-gray-500 p-3 rounded-sm outline-none' />
              <div>
                <label htmlFor="message">Message <span className='text-red-600'>*</span></label>
                <textarea name="message" id="message" required className='w-full border-1 border-gray-500 p-3 rounded-sm outline-none'></textarea>
              </div>
              <button type="submit" className="w-fit bg-white text-black px-3 py-2 font-semibold rounded-sm hover:rounded-lg flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer">
                Send message <MdArrowForward />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
