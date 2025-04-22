import { useState } from 'react'
import './Home.scss'
import Header from '../components/Header/Header.jsx'
import Banner from '../components/Banner/banner.jsx'

function Home() {
  return (
    <div className="body">
      <Header />
      <Banner />
    </div>
  )
}

export default Home
