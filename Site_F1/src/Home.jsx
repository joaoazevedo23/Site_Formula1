import { useState } from 'react'
import './Home.css'
import Logo from './assets/LogoMercedes.png'

function Home() {
  return (
    <div className="body">
      <header className='header'>
        <img src={Logo} alt="Logo da Mercedes" />
        <nav>
          <ul className='ul_header'>
            <li>Home</li>
            <li>História</li>
            <li>Carros Icônicos</li>
            <li>Calendário</li>
            <li>Entre em Contato</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Home
