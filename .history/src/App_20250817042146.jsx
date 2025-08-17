import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster
      <Navbar />
      <Hero />
      <Trustedby />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
    </div>
  )
}

export default App