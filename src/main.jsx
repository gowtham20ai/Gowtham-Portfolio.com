import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Header from './components/Hearder.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import MyProjects from './components/MyProjects.jsx'
import Skill from './components/Skill.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.jsx'

const ClickMe = () => {
  useScrollReveal()

  return(
    <>
   <Header />
   <Hero />
   <About />
   <MyProjects />
   <Skill />
   <Footer/>

    </>
  )
}

createRoot(document.getElementById('root')).render(
    <ClickMe />
  
)
