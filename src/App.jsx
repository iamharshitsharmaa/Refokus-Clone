import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'

const App = () => {
  return (
    <div className='bg-[#1C1C1C] h-screen w-screen'>
      <Navbar />
      <Work/>
    </div>
  )
}

export default App