import React from 'react'
import Navbar from './components/Navbar'
import HeroHeader from './components/HeroHeader'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroHeader/>
      <About/>
      <Experience/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
