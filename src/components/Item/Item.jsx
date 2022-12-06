import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    return (
    <div className='card'>
        <div className='title'>
            <h2 className='nombreProd'>{prod.nombre}</h2>
        </div>
        <div>
            <img src={prod.img} alt={prod.nombre} 
            className="imgProd" height="350px" />
        </div>
        <div className='containerDesc'>
            <p className='descProd'>{prod.descripcion}</p>
            <p className='precioProd'>${prod.precio}</p>
            <Link to={`item/${prod.id}`}>
            <button className='botonProd'>Ver descripción</button></Link>
        </div>
    </div>
    )
}

export default Item