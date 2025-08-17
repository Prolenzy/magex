import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import OurWork from './components/OurWork'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trustedby />
      <Services />
      <OurWork />
      <Teams />
    </div>
  )
}

export default App