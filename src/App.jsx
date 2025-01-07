import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

const App = () => {
  return (
    <div className='bg-[#1C1C1C] h-screen w-screen'>
      <Navbar />
      <Work/>
      <Stripes/>
      <Products />
    </div>
  )
}

export default App