import React, {useState} from 'react'
import './ItemCount.scss'

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial)
  
  const sumar = () => {
    if((count+1) <= stock){
      setCount(count + 1)
    }
  }

  const restar = () => {
    if(count >= 1){
      setCount(count - 1)
    }
  }

  const AgregarCant = () => {
    onAdd(count)
  }

  return (
    <div className='itemCountContainer'>
    <div className='containerButton'>
      <button className='botonSumaResta' onClick={restar}  disabled={count === 0}> - </button>
      <label>{count}</label>
      <button className='botonSumaResta' onClick={sumar}> + </button>
    </div>
    <button className='agregar' onClick={AgregarCant} disabled={count === 0 ? true : null}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount