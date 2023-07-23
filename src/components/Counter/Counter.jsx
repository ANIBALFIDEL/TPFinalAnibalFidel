import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './Counter.css'

const Counter = ({initialValue, stock, id}) => {

    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    
  return (
    <>
        <div className='counter'>
            <button className='btn' onClick={() => setQuantity(quantity > 1 ? quantity -1 : quantity)}>-</button>
            <span>{quantity}</span>
            <button className='btn' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
        </div>
        <button className='btn' onClick={() => addProductCart(id, quantity)}>Agregar al carrito</button>
    </>
)
}

export default Counter