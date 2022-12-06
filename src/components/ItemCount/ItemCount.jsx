import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial)
  
  const sumar = () => {
      setCount(count + 1)
  }

  const restar = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }

  const AgregarCant = () => {
    onAdd(count)
  }

  return (
    <div>
    <div className='containerButton'>
      <button className='botonSumaResta' onClick={restar}> - </button>
      <label>{count}</label>
      <button className='botonSumaResta' onClick={sumar}> + </button>
    </div>
    <button className='agregar' onClick={AgregarCant}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount