import { useParams } from 'react-router-dom'
import './DetailPage.css'
import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'

const DetailPage = () => {
  const {id} = useParams()
  const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()
  const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

  return (
    <div className='productContainer'>
      <div>
        <img className='productContainerImg' src={productDetail.imagen} alt={productDetail.categoría} />
        <h2>{productDetail.nombre}</h2>
        <h3>Precio: $ {productDetail.precio}</h3>
        <p>Descripción: {productDetail.descripcion}</p>
        {
          isInCart(id) ? 
          <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id} />
          :
          <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id} />
        }
        </div>
    </div>
  )
}

export default DetailPage