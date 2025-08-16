import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trustedby />
      <Services />
    </div>
  )
}

export default App