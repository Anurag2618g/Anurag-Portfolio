import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'

const App = () => {
  return (
    <div className='mb-40'>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
    </div>
  )
}

export default App