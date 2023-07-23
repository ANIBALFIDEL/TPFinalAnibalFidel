import React , {createContext, useContext, useState} from 'react'



const Context = createContext()


const ContextProvider = ({children}) => {

  const products =[
    {

        categoría: 'LAPTOPS',
        nombre: 'MackBook Air 13"',
        precio: 689000,
        imagen: 'https://m.media-amazon.com/images/I/71S4sIPFvBL._AC_SL1500_.jpg',
        id:1,
        descripcion: 'Notebook Apple Macbook Air 13" - M1 - 8gb - Ssd 512gb - Color Grey',
        stock: 5
    },
    {

        categoría: 'LAPTOPS',
        nombre: 'Asus X515EA',
        precio: 303322,
        imagen: 'https://m.media-amazon.com/images/I/71GKXeMFy-L._AC_SX679_.jpg',
        id:2,
        descripcion: 'Notebook Asus X515ea - Intel I3-1115 G4 - 4gb - Ssd256gb - 15,6" Fullhd',
        stock: 5
    },
    {

        categoría: 'LAPTOPS',
        nombre: 'Dell 3511',
        precio: 469724,
        imagen: 'https://m.media-amazon.com/images/I/51-uf6fr2cL._AC_SX679_.jpg',
        id:3,
        descripcion: 'Notebook Dell 3511 Intel I5-1135 - 8gb - Ssd 256gb - 15,6" Fhd - Ubuntu',
        stock: 5
    },
    {

        categoría: 'PHONES',
        nombre: 'Samsung Galaxy S23',
        precio: 873999,
        imagen: 'https://m.media-amazon.com/images/I/71ZXHg7Oh6L._AC_SX466_.jpg',
        id:4,
        descripcion: '128 GB, cámara de 50 MP, modo nocturno, batería de larga duración, pantalla adaptativa',
        stock: 5
    },
    {

        categoría: 'PHONES',
        nombre: 'Samsung Galaxy A54',
        precio: 654786,
        imagen: 'https://m.media-amazon.com/images/I/61A+wkddftL._AC_SX466_.jpg',
        id:5,
        descripcion: '128 GB con pantalla de 6.4 pulgadas, cámara de alta resolución, batería de larga duración',
        stock: 5
    },
    {

        categoría: 'TABLETS',
        nombre: 'Samsung Tab A7',
        precio: 234634,
        imagen: 'https://m.media-amazon.com/images/I/819hAP4xoGS._AC_SX466_.jpg',
        id:6,
        descripcion: '8.7" gris de 32GB (SM-T220NZAAXAR)',
        stock: 5
    },
    {

        categoría: 'TABLETS',
        nombre: 'Apple iPad',
        precio: 456543,
        imagen: 'https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX522_.jpg',
        id:7,
        descripcion: '10,2 pulgadas (Wi-Fi, 64GB) - Gris Espacio',
        stock: 5
    },
    {

        categoría: 'PHONES',
        nombre: 'Google Pixel 7',
        precio: 654234,
        imagen: 'https://m.media-amazon.com/images/I/61znAJyslHL._AC_SX569_.jpg',
        id:8,
        descripcion: '5G 128GB 8GB RAM Batería de 24 horas desbloqueada',
        stock: 5
    },
    {

        categoría: 'RELOJ',
        nombre: 'Apple Reloj SE',
        precio: 534243,
        imagen: 'https://m.media-amazon.com/images/I/71LfnkRgZ4L._AC_SX522_.jpg',
        id:9,
        descripcion: 'Reloj inteligente con caja de aluminio medianoche y correa',
        stock: 5
    },
    {

        categoría: 'TABLETS',
        nombre: 'Lenovo Tab P11 Plus',
        precio: 543000,
        imagen: 'https://m.media-amazon.com/images/I/61qCm9CmKwL._AC_SX522_.jpg',
        id:10,
        descripcion: '11" - Procesador MediaTek Octa-Core - Memoria 6 GB - Almacenamiento 128 GB - Android 11',
        stock: 5
    },
    {

        categoría: 'PHONES',
        nombre: 'Moto G Play',
        precio: 414555,
        imagen: 'https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SX466_.jpg',
        id:11,
        descripcion: 'cámara US 3/32 GB 16 MP azul marino - Desbloqueado',
        stock: 5
    },
    {

        categoría: 'PHONES',
        nombre: 'Motorola Moto G 5G',
        precio: 764342,
        imagen: 'https://m.media-amazon.com/images/I/613cvL2ZYHL._AC_SX466_.jpg',
        id:12,
        descripcion: 'US 4/128GB | Cámara 48 MP| Gris puerto',
        stock: 5
    },

]

    const getProductById = (id) => {
        return products.find(producto => producto.id === Number(id))
    }
    
    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) =>{
        if (isInCart(id)){
            setCart(cart.map(product => {
                if (product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    
    const getTotal = () => cart.reduce((totalCompra, product) => product.precio * product.quantity + totalCompra, 0)

  return (
    <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
}


export const useCustomContext = () => useContext(Context)
export default ContextProvider