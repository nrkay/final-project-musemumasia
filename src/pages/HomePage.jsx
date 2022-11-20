import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Developer from '../components/Developer'
import Footer from '../components/Footer'
import NavHomePage from '../components/NevHomePage'

function HomePage() {
  return (
    <div className='Home Page'>
      <NavHomePage />
      <Header />
      <Developer />
    </div>
  )
}

export default HomePage