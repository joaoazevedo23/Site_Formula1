import React from 'react'
import './Header.scss'
import Logo from './../../assets/LogoMercedes.png'

function Header(){
  return(
      <header className='header'>
        <img src={Logo} alt='Logo da Mercedes' className='logo'/>
        <nav className='lista'>
          <ul>
            <li>Home</li>
            <li>Carros</li>
            <li>Sobre Nós</li>
          </ul>
        </nav>
      </header>
  )
}

export default Header