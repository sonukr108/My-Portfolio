import React, { useState } from 'react'
import myImage from '../assets/myphoto.jpg'


const About = () => {

  const [aboutSection, setAboutSection] = useState('skills');
  return (
    <div id='about' className='px-[10%] py-10 w-full min-h-[140vh] md:min-h-[100vh]' data-aos="fade-up">
      <div className=' flex flex-col gap-3 items-center justify-center'>
        <p className='font-bold text-xl lg:text-2xl text-gray-500'>ABOUT ME</p>
        <p className='text-xl lg:text-2xl font-semibold pb-3'>My <span className='text-blue-400'>Other Details</span></p>

        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-15 items-start">
          <img src={myImage} alt="my workprocess" className='rounded-xl md:h-80 desktop-aos' data-aos="fade-right"/>

          <div className="text-sm md:text-lg desktop-aos" data-aos="fade-left">
            <p className='text-base'>Hi, I'm Sonu. I'm dedicated to crafting seamless and delightful digital experiences, from initial design to front-end implementation. My skills span UI/UX (Figma, responsive design) and web development (HTML, CSS, JavaScript, Node.js, Tailwind CSS, Bootstrap). I strive to build impactful products. Let's collaborate and bring your vision to life!</p>
            <div className="buttons flex gap-6 my-5">
              <button className={`cursor-pointer py-1  ${aboutSection === 'skills' ? 'text-blue-400 border-b-1 border-blue-400 transition-all duration-200' : 'text-gray-200'} font-semibold hover:text-blue-300`} onClick={() => setAboutSection('skills')}>
                SKILLS
              </button>
              <button className={`cursor-pointer py-1  ${aboutSection === 'experience' ? 'text-blue-400 border-b-1 border-blue-400 transition-all duration-200' : 'text-gray-200'} font-semibold hover:text-blue-300`} onClick={() => setAboutSection('experience')}>
                EXPERIENCE
              </button>
              <button className={`cursor-pointer py-1  ${aboutSection === 'education' ? 'text-blue-400 border-b-1 border-blue-400 transition-all duration-200' : 'text-gray-200'} font-semibold hover:text-blue-300`} onClick={() => setAboutSection('education')}>
                EDUCATION
              </button>
            </div>

            {aboutSection === 'skills' && (
              <div className="skills flex flex-col gap-5 min-h-full">
                <div>
                  <p className='text-blue-300 font-semibold text-lg'>Web Development</p>
                  <li>Web Development using MERN Stack (MongoDB, Express.js, React, Node.js)</li>
                  <li>Web Development using ASP.NET Core / ASP.NET MVC</li>
                  <li>Web Development using JSP (JavaServer Pages) and Servlets</li>
                  <li>Version Control with Git and GitHub</li>
                </div>
                <div>
                  <p className='text-blue-300 font-semibold text-lg'>UI / UX</p>
                  <li>Designing user interfaces with Figma</li>
                  <li>Responsive design principles (mobile, tablet, desktop)</li>
                  <li>UI Design using Tailwind CSS</li>
                  <li>UI Design using Bootstrap</li>
                </div>
              </div>
            )}
            {aboutSection === 'experience' && (
              <div className="experience flex flex-col gap-5 min-h-full">
                <div>
                  <p className='text-blue-300 font-semibold text-lg'>Sutantra Technologies</p>
                  <li>Internship at Sutantra Technologies on React.</li>
                  <li>From 10 April,2025 to 10 May, 2025</li>
                  <li>Used technologies like React with Tailwindcss</li>
                  <li>Git and Github</li>
                </div>
                <div>
                  <p className='text-blue-300 font-semibold text-lg'>Sutantra Technologies</p>
                  <li>Internship at Sutantra Technologies on Real time project.</li>
                  <li>May, 2025 to till now</li>
                </div>
              </div>
            )}
            {aboutSection === 'education' && (
              <div className="education flex flex-col gap-5 min-h-full">
                <div>
                  <p className='text-blue-300 font-semibold text-lg'>Matriculation</p>
                  <li>UTKRAMIT HIGH SCHOOL BAGODIH Giridih, Jharkhand 825320</li>
                  <li>Completed in 2019</li>
                </div>
                <div>
                  <p className='text-blue-300 font-semibold text-lg'>Intermediate Of Science</p>
                  <li>IGSI College Mandu Ramgarh, Jharkhand 825316</li>
                  <li>Completed in 2021</li>
                </div>
                <div>
                  <p className='text-blue-300 font-semibold text-lg'>Bachelor Of Computer Applications</p>
                  <li>Annada College Hazaribag, Jharkhand, 825301</li>
                  <li>Completed in 2025</li>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
