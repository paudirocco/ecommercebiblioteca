import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const {count} = useContext(CartContext)

    return (
        <div className="carrito">
            <Link to="/cart">
                <button className="boton__carrito">
                    <img src="https://pic.onlinewebfonts.com/svg/img_383571.png" alt="carrito"/>
                    <p className="cant__items">{count}</p>
                </button>
            </Link>
            <Link to="/cart">Finalizar compra</Link>
        </div>
    )
}

export default CartWidget;