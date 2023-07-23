import React from 'react'
import './App.css'
import { useCustomContext } from './ContextManager/ContextProvider'
import { Link, NavLink, Route, Routes } from "react-router-dom"
import imagenes from './assets/imagenes'
import { HomePage, ContactForm, DetailPage, CartPage } from './screens'
import { NavBar } from './components'


function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/contact' element={<ContactForm/>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>      
      <footer>
        <div>
          <p>Compañía:</p>
        </div>
        <div>
          <Link to={'#'}>Sobre nosotros</Link>
          <Link to={'/contact'}>Contacto</Link>
          <span>Copyright &copy; Tech Shop 2.023</span>
          <span>Av. Corrientes 3000, CP 1264, Parque Patricios, CABA</span>
        </div>
      </footer>
    </>
  )
}

export default App
