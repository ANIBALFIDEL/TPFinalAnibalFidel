import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'
import './CartPage.css'

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
  return (
    <>
    <h2>Carrito:</h2>
      <div>         
          {cart.map(product => (
            <div className='cartProductContainer'>
              <ProductCartCard key={product.id} producto={product} />
            </div>
          ))}
          <div className="totalCompra">
            <h4>Total Compra: $ {new Intl.NumberFormat("de-DE").format(getTotal())}</h4>
            <button className='btn' onClick={() => getTotal() > 0 ? alert('Gracias por su compra!') : alert('Carrito vacío!')}>Comprar</button>
          </div>
      </div>
    </>
  )
}

export default CartPage