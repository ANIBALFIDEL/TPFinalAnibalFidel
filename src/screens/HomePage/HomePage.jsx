import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'
import './HomePage.css'


const HomePage = () => {

    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [currentProducts, setCurrentProducts] = useState(products)

    useEffect(() => {
      setCurrentProducts(products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase())))
    }, [searchProduct])

  return (
    <div className="mainContainer">
      <main>
        <div className='searcherContainer'>
          <i className="bi bi-search"></i>
          <input type="text" placeholder='Buscar Productos...' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
        </div>
        <h2>Elegí tu producto:</h2>
        <div className='productContainer'>
          {currentProducts.map(producto => (
            <ProductCard producto={producto} key={producto.id} />
          ))}
        </div>
      </main>
      <aside>
        <iframe src="https://mipostulacion.com/tendencias-en-tecnologia-movil-2023/" frameBorder="0"></iframe>
      </aside>
    </div>
  )
}

export default HomePage