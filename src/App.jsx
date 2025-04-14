import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'


const App = () => {
  return (
    <div className='bg-black text-white h-full w-full scroll-smooth'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App
