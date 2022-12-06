import {useEffect, useState} from 'react'
import { getFetch } from '../../Productos'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {id} = useParams()

    useEffect (() => {
        if (id===undefined){
        getFetch
        .then ((res) => setProductos (res))
        .catch ((err) => console.log(err))
        .finally(() => setLoading(false))}
        else{
            getFetch
            .then((res) => setProductos(res.filter(item => item.categoria === id)))
            .finally(() => setLoading(false))
        }
    },[id]);

    // console.log(productos);

    return (
        <div>
            {
                loading
                ?
                <h1 className='cargando'>Cargando...</h1>
                :
                <div>
                    <h1 className='tituloListaProductos'>Lista de productos</h1>
                    <div className='listaProductos'>
                        <ItemList Prod = {productos} />
                    </div>
                </div>
            }     
        </div>
    )
}

export default ItemListContainer;