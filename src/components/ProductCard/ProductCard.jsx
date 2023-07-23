import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'


const ProductCard = ({producto}) => {

  
  
    return (
      <div className='ProductCard'>      
        <img src={producto.imagen} alt={producto.categoría + ' image'}  />
        <h3>{producto.nombre}</h3>
        <p>Precio: $ {producto.precio}</p>
        <Link className='btnDetalle' to={'/detail/' + producto.id}>Ver detalle</Link>
    </div>
  )
}

export default ProductCard