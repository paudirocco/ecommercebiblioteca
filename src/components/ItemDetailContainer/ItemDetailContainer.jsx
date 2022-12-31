import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../Productos'
import ItemDetail from '../ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState ({})
    const [loading, setLoading] = useState (true)
    const {id} = useParams()

    useEffect(() => {
        getFetch
        .then((res) => setItemDetail(res.find(item => item.id == id)))
        .catch ((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    console.log(itemDetail);

    return (
    <div>
        { loading ? <CircularProgress className='cargando' />
        : <ItemDetail product={itemDetail} />}
    </div>
    )
}

export default ItemDetailContainer