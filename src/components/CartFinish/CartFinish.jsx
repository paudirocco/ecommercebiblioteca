import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import {serverTimestamp } from 'firebase/firestore'

const CartFinish = () => {
    const {cartList, count, removeItem, clear} = useContext(CartContext);
    const [fName, setfName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [secondEmail, setSecondEmail] = useState('');
    let costoTotal = 0;
    const navegar = useNavigate()
    const addMonto = (num) => {
        costoTotal = costoTotal + num;
    };
    
    const onRemove = (id) => {
        removeItem(id);
    };
    
    const onClear = () => {
        clear();
    };

    const sendOrder = (e) => {
        e.preventDefault()
        if (email !== '' && secondEmail !== '' && email === secondEmail){
            let order = {
                items: cartList,
                total: costoTotal,
                fecha: serverTimestamp(),
                state: 'Generada',
                buyer: { name: fName, phone: phone, email: email }
            }

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection,order).then((res) => {
            alert(`Orden con id: ${res.id}`);
            console.log(res.id)
            clear()
            navegar('/')
            })
        }else{
            alert('Por favor verifique los datos ingresados')
        }
    }

    return (
        <form onSubmit={sendOrder}>

            <div>
                <label>Nombre Completo</label>
                <input type="text" placeholder="Nombre y Apellido"
                    value={fName} onChange={e => setfName(e.target.value)} />
                <label>Telefono</label>
                <input type="text" placeholder="Incluya código de área"
                    value={phone} onChange={e => setPhone(e.target.value)} />
                <label>Correo electrónico</label>
                <input type="text" placeholder="email"
                    value={email} onChange={e => setEmail(e.target.value)} />
                <label>Correo electrónico</label>
                <input type="text" placeholder="Vuelva a ingresar su email"
                    value={secondEmail} onChange={e => setSecondEmail(e.target.value)} />
                </div>
            
            <div className="form-group space">
                <table>
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
                </table>
                <button className="space" disabled={count === 0} onClick={() => { onClear() }}>Vaciar carrito</button>
                <button className="space" disabled={count === 0 && email === '' && secondEmail === '' }  type='submit'>Realizar Compra</button>

                </div>
            </form>

    )
}

export default CartFinish



// const CartFinish = () => {
//     const order = {
//         buyer: {
//           name: "pablo",
//           phone: "2222",
//           email: "prueba@coder.com",
//         },
//         items: [
//           {
//             name: "bicicleta",
//             price: 2000,
//           },
//         ],
//         total: 250,
//       };
//   const sendOrder = () => {
//     const db = getFirestore();
//     const ordersCollection = collection(db, "orders");
//     addDoc(ordersCollection,order).then(({id})=> alert(id))
//   };

//   return (
//     <div>
//       <h1>Finaliza tu compra</h1>
//       <div className="producto-buyer">
//         <div>
//           <label>Nombre</label>
//           <input type="text" />
//         </div>
//         <div>
//           <label>dirección</label>
//           <input type="text" />
//         </div>
//         <div>
//           <label>Numero telefonico</label>
//           <input type="text" />
//         </div>
//       </div>
//       <div>
//         <button onClick={()=>sendOrder()}>Generar order</button>
//       </div>

//     </div>
//   );
// };




// export default CartFinish