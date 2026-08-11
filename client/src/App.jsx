import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import ToScroller from './components/ToScroller'
import CourseDetailsPage from './pages/CourseDetailsPage'

const App = () => {
  return (
    <div>
      <ToScroller/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details' element={<CourseDetailsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App