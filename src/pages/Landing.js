import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

function Landing() {
  return (
    <div className='flex flex-col h-[85vh]'>
      <Header />
      <Banner />
    </div>
  )
}

export default Landing