import React from 'react'
import DaftarBarang from '../components/DaftarBarang'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Collection() {
  return (
    <div className="collection" id="collection">
      <Navbar />
      <DaftarBarang />
      <Footer />
    </div>
  );
}

export default Collection