import React from 'react'
import './NavBar.css'
import Logo from '../../assets/imagenes/Logo.svg'
import { NavLink } from 'react-router-dom'
import DropDownButton from '../DropDownButton/DropDownButton'

const NavBar = () => {
  return (

    <nav className='navBar'>
            <div className='navBarLogoContainer'>
              <img src={Logo} alt="Logo" className='imgLogo' />
              <h1>Tech Shop</h1>
            </div>
            <div className='navBar_iconContainer'>
              <NavLink className='navLink' to={'/'}><i className="bi bi-house-door-fill"></i></NavLink>
              <NavLink className='navLink' to={'/contact'}>Contacto</NavLink>
              <NavLink className='navLink' to={'/cart'}><i className="bi bi-cart3"></i></NavLink>
            </div>
            <div className='btn-dropdown-container'>
              <DropDownButton />
            </div>
          </nav>
  )
}

export default NavBar