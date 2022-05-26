import React from 'react'
import './Card.css'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '@mui/material/Button';



const Card = ({ image, title, price, stock }) => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(1)
    const handleClose = () => {
        setOpen(false)
    }
    const addCount = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if (count > 0) {

            setCount(count - 1)
        }
    }


    return (

        <div className="card-item">
            <div class="card" style={{ width: "18rem" }}>
                <img src={`./${image}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <span class="card-price">{price}</span>
                </div>
                <div className='count-item'>
                    <Button onClick={removeCount}>-</Button>
                    <p>{count}</p>
                    <Button onClick={addCount}>+</Button>
                </div>
                <Button className="btn btn-outline-primary" onClick={() => setOpen(true)}>Detalle</Button>
            </div>
            {open && (

            <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
                <img src={`./${image}`} width="550px" />
            </Modal>
            ) }
        </div>


    )
}

export default Card