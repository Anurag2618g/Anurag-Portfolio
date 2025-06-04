import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'

const App = () => {
  return (
    <div className='mb-40'>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
    </div>
  )
}

export default App