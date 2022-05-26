import Card from '../Card/Card';
import { CardGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
const CardList = ({ title }) => {
  const [products, setProducts,] = useState([])
  const productos = [
    {
      title: 'PARRILADA TRADICIONAL',
      price: 4100,
      image: 'Producto.JPG',
      description: '',
      stock: 5,
      id: 1
    },
    {
      title: 'PARRILADA CERDO-VACUNO',
      price: 46700,
      image: 'Producto.JPG',
      description: '',
      stock: 4,
      id: 2
    },
    {
      title: 'PARRILADA ESPECIAL-VACUNO',
      price: 48900,
      image: 'Producto.JPG',
      description: '',
      stock: 6,
      id: 3
    },
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve(productos)
      }, 2000)
    })
  }

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log("Respuesta Promesa", response)
        setProducts(response)
      })
      .catch((err) => {
        console.log("Fallo la llamada.")
      })
      .finally(() => {
        console.log("Termino la promesa.")
      })

  }, [])


  return (
    <>
      <h1>{title}</h1>
      <CardGroup container className='m-2'>
        {
          products.map(({title, price, image, id,stock}) => {
          
            return (
              <CardGroup item md={4} key={id} >
                <Card title={title} price={price} image={image} stock={stock} />
              </CardGroup>
            )
          })
        }
      </CardGroup>
    </>
  )
}

export default CardList