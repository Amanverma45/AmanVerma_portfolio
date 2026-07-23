import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import ScrollProgress from './Components/ScrollProgress'
import CursorGlow from './Components/CursorGlow'
import NotFound from './Components/NotFound'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App