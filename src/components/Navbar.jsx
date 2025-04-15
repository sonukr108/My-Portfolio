import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react'
import Logo from '../../public/favicon.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";import 'aos/dist/aos.css';
import Aos from 'aos';


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState('');
    useEffect(() => {
        if (window.innerWidth < 768) {
          document.querySelectorAll('.desktop-aos').forEach(el => {
            el.removeAttribute('data-aos');
          });
        }
    
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <div className='w-full px-2 py-3 fixed top-0 left-0 font-bold z-50' data-aos="fade-down">
            <div className="bg-gray-800/30 backdrop-blur border-1 border-gray-600 flex flex-col items-center justify-between rounded-lg px-4 md:px-5 xl:px-8 py-4 max-w-[1280px] mx-auto">
                <div className='w-full flex items-center justify-between lg:text-xl'>
                    <Link to="home" smooth={true} duration={500} offset={-70}>
                        <div className="logo-part flex gap-2 items-center cursor-pointer">
                            <img src={Logo} alt="S logo" className="h-9" />
                            <h1 className="text-xl font-semibold hidden md:flex">SONU KUMAR VERMA</h1>
                            <h1 className="text-xl font-semibold md:hidden">SONU</h1>
                        </div>
                    </Link>
                    <div className="menu-options md:hidden" onClick={() => setMenu(!menu)}>
                        {menu ? <RxCross2 size={25} /> : <IoMenu size={25} />}
                    </div>
                    <div className='hidden md:flex text-sm lg:text-lg'>
                        <ul className='list-none text-gray-300 w-full flex gap-2 lg:gap-7 items-center justify-center'>
                            {['home', 'about', 'projects', 'contact'].map((item) => (
                                <li key={item} className={`${active === item ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-300'} py-1 hover:text-blue-300 hover:border-b-2 hover:border-white cursor-pointer transition-all duration-300`}>
                                    <Link to={item} spy={true} smooth={true} offset={-70} duration={500} onClick={() => setActive(item)} className='uppercase'>{item === 'about' ? 'About Me' : item === 'contact' ? 'Contact Us' : item}</Link>
                                </li>
                            ))}
                            <li className='py-2 hover:text-black hover:bg-white px-3 border-2 hover:rounded-xl transition-all duration-400 cursor-pointer'>
                                <a href="https://github.com/sonukr108" target='_blank' rel="noreferrer" className='uppercase'>My Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {menu &&
                    <div className='w-full pt-4 flex items-center justify-center'>
                        <ul className='list-none w-full flex flex-col gap-3 items-center justify-center'>
                            {['home', 'about', 'projects', 'contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item} spy={true} smooth={true} offset={-70} duration={500} onClick={() => { setActive(item); setMenu(false); }} className={`uppercase cursor-pointer ${active === item ? 'text-blue-500' : 'text-gray-300'} transition-all duration-300`}>
                                        {item === 'about' ? 'About Me' : item === 'contact' ? 'Contact Us' : item}
                                    </Link>
                                </li>
                            ))}

                            <li className='py-2 text-black bg-white px-3 border-2 rounded-xl transition-all duration-400'>
                                <a href="https://github.com/sonukr108" target='_blank' rel="noreferrer" className='uppercase'>My Github</a>
                            </li>
                        </ul>
                    </div>}
            </div>

        </div>
    )
}

export default Navbar