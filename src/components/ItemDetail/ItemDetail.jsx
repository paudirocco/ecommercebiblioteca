import React from 'react'
// import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
    // const onAdd = (cantidad) => {
    //     console.log(`La cantidad elegida es: ${cantidad}`)};
    
    return (
        <div className='containerDetail'>
            <div>
                <img src={product.img} alt={product.nombre} className="imagenProd" height="350px" />
            </div>
            <div className='detail'>
                <div> <h2 className='tituloProd'>{product.nombre}</h2></div>
                <div>
                    <div className='precioProducto'><p>${product.precio}</p></div>
                    {/* <div><ItemCount stock={product.stock} initial={1} onAdd={onAdd} /></div> */}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail