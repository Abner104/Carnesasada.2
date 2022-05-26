
import Card from '../Card/Card';
import { CardGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ItemCart = ({title }) => {
        const [ item, setItem,] = useState([])
        const ItemCartList= [
            {
                title: 'Lomo Vetado',
                price: 11000,
                image: 'pr2.jpg',
                description: '',
                stock: 11,
                id: 1
            },
            {
                title: 'Lomo liso',
                price: 8700,
                image: 'pr2.jpg',
                description: '',
                stock: 8,
                id: 2
            },
            {
                title: 'Entrecot',
                price: 15000,
                image: 'pr2.jpg',
                description: '',
                stock: 12,
                id: 3
            },
            {
                title: 'Biffe Chorizo',
                price: 12000,
                image: 'pr2.jpg',
                description: '',
                stock: 9,
                id: 3
            },
        ]

        const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {

                    resolve(item)
                }, 2000)
            })
        }

        useEffect(() => {
            getItem()
                .then((response) => {
                    console.log("Respuesta Promesa", response)
                    setItem(response)
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
                        ItemCartList.map(({ title, price, image, id, stock }) => {

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

export default ItemCart