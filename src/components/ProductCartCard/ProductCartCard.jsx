import React from 'react'
import './ProductCartCard.css'

const ProductCartCard = ({producto}) => {
  return (
    <div className='ProductCard'>      
        <img src={producto.imagen} alt={producto.categoría + ' image'}  />
        <h3>{producto.nombre}</h3>
        <p>Precio: $ {producto.precio}</p>
        <p>Cantidad: {producto.quantity}</p>
    </div>
)
}

export default ProductCartCard