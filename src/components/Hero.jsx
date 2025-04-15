import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from '../assets/herobg.svg'
import MyImage from '../assets/myimage.svg'
import { FaArrowRightLong } from "react-icons/fa6";

const texts = [
    "Web Developer",
    "React Developer",
    "Frontend Engineer",
    "MERN Stack Developer",
    "Creative Coder",
    "UI/UX Designer",
    "JavaScript Lover",
    "Tech Explorer",
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);
    return (
        <div id='home' className='w-full px-[10%] md:px-[5%] xl:px-[15%] flex flex-col items-center pt-30 md:pb-42 md:pt-25 scroll-smooth'>
            <div className='z-0 absolute hidden md:block'>
                <img src={Image} alt="my image" className='' />
            </div>
            <div className='z-0 md:hidden'>
                <img src={MyImage} alt="my image" />
            </div>
            <div className='w-full z-10'>
                <div className='pt-5 md:pt-20 lg:pt-32 md:w-[60%] flex flex-col gap-1 lg:gap-3'>
                    <p className='text-3xl font-bold lg:text-5xl'>HI, I AM SONU!</p>
                    <p className="text-xl lg:text-3xl font-semibold text-wrap">
                        I'm a&nbsp;
                        <span className="inline-block text-blue-500">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="inline-block"
                                >
                                    {texts[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </p>
                    <p className='mt-3 lg:text-lg'>I am a passionate Web Developer with a strong interest in Frontend Development. I love building responsive websites using React and modern web technologies. I'm always eager to learn new skills and work on challenging projects.</p>
                    <button className='w-fit mt-3 py-2 font-bold hover:text-black hover:bg-white px-3 border-2 hover:rounded-xl transition-all duration-400 flex gap-2 hover:gap-4 items-center'>
                        <a href="https://drive.google.com/file/d/1SyP3bXkn9N0Q7kvYHPCVak2qIL_lSv_V/view?usp=sharing">MY RESUME</a>
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
