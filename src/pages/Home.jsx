import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Developer from '../components/Developer'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Header />
      <Carousel />
      <Developer />
      <Footer />
    </div>
  )
}

export default Home