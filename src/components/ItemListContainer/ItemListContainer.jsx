import {useEffect, useState} from 'react'
// import { getFetch } from '../../Productos'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {id} = useParams()

    useEffect (()=> {
        if(id){
            const db = getFirestore();
            const itemCollection = collection(db,"item")
            getDocs(itemCollection).then((result)=>{
                const paraFiltrar = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                const prodSeleccionados = paraFiltrar.filter (item => item.categoria === id);
                setLoading(false);
                setProductos(prodSeleccionados);
            })
        }else{
            const db = getFirestore();
            const itemCollection = collection(db,"item")
            getDocs(itemCollection).then((result)=>{
                setProductos(result.docs.map((doc)=>({id:doc.id,...doc.data()})))
                setLoading(false);
            })
        }
    },[id])



    // useEffect (() => {
    //     if (id===undefined){
    //     getFetch
    //     .then ((res) => setProductos (res))
    //     .catch ((err) => console.log(err))
    //     .finally(() => setLoading(false))}
    //     else{
    //         getFetch
    //         .then((res) => setProductos(res.filter(item => item.categoria === id)))
    //         .finally(() => setLoading(false))
    //     }
    // },[id]);

    // console.log(productos);

    return (
        <div>
            {
                loading
                ?
                <CircularProgress className='cargando' />
                :
                <div className='containerProd'>
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