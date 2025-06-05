import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'
import MyProjects from './sections/MyProjects'
import ContactMe from './sections/ContactMe'

const App = () => {
  return (
    <div className='mb-80'>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  )
}

export default App