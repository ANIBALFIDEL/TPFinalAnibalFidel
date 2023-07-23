import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {

  const handleRegisterUser = (evento) => {
    evento.preventDefault()
    if (formContactData.nombre.length > 0 && formContactData.email.length > 0 && formContactData.message.length > 0){
      setSendEmail(true)
      setShowMessage(true)
      setformContactData({
        nombre:'',
        email:'',
        message:''
      })
    } else{
      setSendEmail(false)
      setShowMessage(true)
    }

  }

  const [formContactData, setformContactData] = useState({
    nombre:'',
    email:'',
    message:''
  })

  const handleChangeRegisterUser = (evento) => {
    setformContactData({...formContactData, [evento.target.name]: evento.target.value})
  }

  const [sendEmail, setSendEmail] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  return (
    <>
      <h3>Contacto:</h3>
      <form onSubmit={handleRegisterUser} className='contactForm'>
        <label htmlFor="nombre">Nombre completo*</label>
        <input type="text" name='nombre' onChange={handleChangeRegisterUser} value={formContactData.fullName} />
        <label htmlFor="email">Email*</label>
        <input type="email" name='email' onChange={handleChangeRegisterUser} value={formContactData.email} />
        <label htmlFor="message">Mensage*</label>
        <textarea type="text" rows={7} name='message' onChange={handleChangeRegisterUser} value={formContactData.message} />
        <button className='btn' type='submit'>Enviar</button>
        {
          showMessage &&
          (sendEmail ? 
          <span>Se envió su mensaje. Será respondido a la brevedad.Gracias!</span>
          : <span>{'* '} Por favor llenar todos los campos.</span>)
        }
      </form>
    </>
  )
}

export default ContactForm