import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import '../App.css'
import Companies from '../Components/Companies/Companies'
import Residencies from '../Components/Residencies/Residencies'
import Value from '../Components/Value/Value'
import Contact from '../Components/Contact/Contact'
import GetStarted from '../Components/GetStarted/GetStarted'
import Footer from '../Components/Footer/Footer'
function Website() {
  return (
    <div className='App'>
    <div  >
      <div className='absolute w-80 h-80 bg-[rgb(255,255,255,0.532)] blur-[100px] rounded-[100px] ' />
   
    <Hero />
    </div>
     <Companies />
    <Residencies />
    <Value />
    <Contact />
    <GetStarted />
    
  </div>
  )
}

export default Website