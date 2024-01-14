import { useState } from 'react'
import { Header, 
         Body, 
         Professionals, 
         FeaturesSection, 
         Phone, 
         CTA, 
         Testimonials, 
         End 
        } from './components/main'
import './App.css'


function App() {
  return (
    <>
      <Header />
      <Body />
      <Professionals />
      <FeaturesSection />
      <Phone />
      <CTA />
      <Testimonials />
      <End />
    </>
  )
}

export default App
