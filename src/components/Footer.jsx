import React from 'react'
import { Link } from 'react-scroll'
import LogoImg from '../../public/favicon.png'

const Footer = () => {
    return (
        <div className='bg-[#17171A] px-[10%] py-5 w-full flex flex-col gap-3'>
            <Link to="home" smooth={true} duration={500} offset={-70}>
                <div className="logo-part flex gap-2 items-center cursor-pointer">
                    <img src={LogoImg} alt="S logo" className="h-9" />
                    <h1 className="text-xl font-semibold hidden md:flex">SONU KUMAR VERMA</h1>
                    <h1 className="text-xl font-semibold md:hidden">SONU</h1>
                </div>
            </Link>
            <div>
                <p>&copy; {new Date().getFullYear()} Coding W0rld, Pvt. Ltd. &nbsp;&nbsp; ♡ &lt;Sonu Kumar Verma /&gt;</p>
            </div>
        </div>
    )
}

export default Footer
