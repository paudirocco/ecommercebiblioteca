import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './CartWidget.scss'

const CartWidget = () => {
    const {count} = useContext(CartContext)

    return (
        <div className="carrito">
            <Link to="/cart">
                <button className="botonCarrito">
                    <img src="https://pic.onlinewebfonts.com/svg/img_383571.png" alt="carrito"/>
                    <p className="cantItems">{count}</p>
                </button>
            </Link>
            <Link to="/cart">Finalizar compra</Link>
        </div>
    )
}

export default CartWidget;