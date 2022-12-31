import React from 'react'
import ItemCount from '../ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './ItemDetail.scss'

const ItemDetail = ({product}) => {
    const {cartList, addToCart} =  useContext(CartContext);

    const onAdd = (count) => {
        addToCart(product,count)
        console.log("carrito: " + cartList);
        alert(`La cantidad elegida es: ${count}`)};

    return (
        <div className='containerDetail'>
            <div>
                <img src={product.img} alt={product.nombre} height="350px" />
            </div>
            <div className='detail'>
                <div> <h2 className='tituloProd'>{product.nombre}</h2></div>
                <div className='detalleProd'>
                    <div className='precioProd'><p>${product.precio}</p></div>
                    <div><ItemCount stock={product.stock} initial={0} onAdd={onAdd} /></div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail