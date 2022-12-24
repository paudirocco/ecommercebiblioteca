import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartFinish = () => {
    const {cartList, count, removeItem, clear} = useContext(CartContext);
    let costoTotal = 0;

    const addMonto = (num) => {
        costoTotal = costoTotal + num;
    };
    
    const onRemove = (id) => {
        removeItem(id);
    };
    
    const onClear = () => {
        clear();
    };

    const sendOrder = () => {
        const order = {
        items: cartList,
        total: costoTotal
        }
    }

    return (
        <div className="form-group space">
                <thead>
                <tr>
                    <th>Articulo</th>
                    <th>Precio por Unidad</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                    <th>Editar</th>
                </tr>
                </thead>
                <tbody>
                {cartList.map((item) => {
                    const costoNum = item.precio;
                    let total = item.cantidad * costoNum;
                    addMonto(total);

                    return <tr key={item.id}><td>{item.nombre}</td><td>{item.precio}</td><td>{item.cantidad}</td><td> ${total}</td>
                    <td><button onClick={() => { onRemove(item.id); }} >Eliminar item</button></td></tr>;
                })}
                {cartList.length > 0 && <tr><td colSpan={3}>COSTO TOTAL: </td><td colSpan={2}>$ {costoTotal}</td></tr>}
                {cartList.length === 0 && <tr><td colSpan={3}>No hay productos en tu carrito</td><td colSpan={2}><Link to={`/`}><button>Agregar productos</button></Link></td></tr>}

                </tbody>
            <button className="space" disabled={count === 0} onClick={() => { onClear(); }}>Vaciar carrito</button>
            <button className="space" disabled={count === 0} onClick={() => { sendOrder(); }}>Confirmar Compra</button>

            </div>












    )
}

export default CartFinish