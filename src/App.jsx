import React from 'react'
import Navbar from './components/Navbar'
import HeroHeader from './components/HeroHeader'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroHeader/>
      <About/>
      <Experience/>
      <Education/>
    </div>
  )
}

export default App
