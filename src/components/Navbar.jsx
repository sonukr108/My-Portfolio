import React, { useState } from 'react'
import Logo from '../../public/favicon.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className='w-full px-2 py-3 fixed top-0 left-0 font-bold z-50'>
            <div className="bg-gray-800/30 backdrop-blur border-1 border-gray-600 flex flex-col items-center justify-between rounded-lg px-4 md:px-5 xl:px-8 py-4 max-w-[1280px] mx-auto">
                <div className='w-full flex items-center justify-between lg:text-xl'>
                    <a href='#'>
                        <div className="logo-part flex gap-2 items-center">
                            <img src={Logo} alt="S logo" className='h-9' />
                            <h1 className='text-xl font-semibold hidden md:flex'>SONU KUMAR VERMA</h1>
                            <h1 className='text-xl font-semibold md:hidden'>SONU</h1>
                        </div>
                    </a>
                    <div className="menu-options md:hidden" onClick={() => setMenu(!menu)}>
                        {menu ? <RxCross2 size={25} /> : <IoMenu size={25} />}
                    </div>
                    <div className='hidden md:flex text-sm lg:text-lg'>
                        <ul className='list-none text-gray-300 w-full flex gap-2 lg:gap-7 items-center justify-center'>
                            <li className='py-1 hover:text-white hover:border-b-2'><a href="#home">HOME</a></li>
                            <li className='py-1 hover:text-white hover:border-b-2'><a href="#about">ABOUT ME</a></li>
                            <li className='py-1 hover:text-white hover:border-b-2'><a href="#projects">PROJECTS</a></li>
                            <li className='py-1 hover:text-white hover:border-b-2'><a href="#contact">CONTACT US</a></li>
                            <li className='py-2 hover:text-black hover:bg-white px-3 border-2 hover:rounded-xl transition-all duration-400'><a href="https://github.com/sonukr108" target='_blank'>MY GITHUB</a></li>
                        </ul>
                    </div>
                </div>
                {menu &&
                    <div className='w-full pt-4 flex items-center justify-center'>
                        <ul className='list-none w-full flex flex-col gap-3 items-center justify-center'>
                            <li><a href="#home" onClick={() => setMenu(false)}>HOME</a></li>
                            <li><a href="#about" onClick={() => setMenu(false)}>ABOUT ME</a></li>
                            <li><a href="#projects" onClick={() => setMenu(false)}>PROJECTS</a></li>
                            <li><a href="#contact" onClick={() => setMenu(false)}>CONTACT US</a></li>
                            <li className='py-2 text-black bg-white px-3 border-2 rounded-xl transition-all duration-400'><a href="https://github.com/sonukr108" target='_blank'>MY GITHUB</a></li>
                        </ul>
                    </div>}
            </div>

        </div>
    )
}

export default Navbar