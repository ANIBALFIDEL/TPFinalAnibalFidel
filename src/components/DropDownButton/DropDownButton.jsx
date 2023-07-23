import React, { useState } from 'react'
import './DropDownButton.css'
import { NavLink } from 'react-router-dom'

const DropDownButton = () => {

    const [visible, setVisible] = useState(true)

    const handleClic = (evento) => {
        evento.preventDefault()
        setVisible(!visible)
    }

  return (
    <>
    <div className="alignButtonMenu">
        <button className='btn-dropdown' onClick={handleClic}><i className="bi bi-three-dots-vertical"></i></button>
        <div className={visible && 'oculto'}>
            <div className='DropDownButton-linkContainer backgroundDropdown'>
                <NavLink className='navLink' to={'/'}><i className="bi bi-house-door-fill"></i></NavLink>
                <NavLink className='navLink' to={'/contact'}>Contacto</NavLink>
                <NavLink className='navLink' to={'/cart'}><i className="bi bi-cart3"></i></NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default DropDownButton