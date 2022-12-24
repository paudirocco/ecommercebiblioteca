import {createContext, useContext, useReducer} from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext(null)
export const useCartContext = () => useContext(CartContext);

const initialState = {
    count: 0,
    cartList: [],
    isInCart: false
}

export const CartContextProvider = ({children}) => {    
    const [state,dispatch] = useReducer(CartReducer, initialState)

    function addToCart(item, count){
        const updatedCart = [...state.cartList]

        //BUSCA SI EL ITEM YA SE ENCUENTRA EN EL CARRITO
        const updatedItemIndex = updatedCart.findIndex(
            element => element.id === item.id
        );

        //si no esta
        if (updatedItemIndex < 0) {
            const newItem = { ...item, cantidad: count }
            updatedCart.push(newItem);

        } 
        else {
            const updatedItem = {
                ...state.cartList[updatedItemIndex], cantidad:count
            };
            updatedCart.splice(updatedItemIndex, 1, updatedItem);

        }
        dispatch({
            type: "ADD_ITEM",
            payload: {updatedCart,count},
        });
    }


    function removeItem(itemId){
        const updatedCart = [...state.cartList];
        const updatedItemIndex = updatedCart.findIndex(item => item.id === itemId);

        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };

        let updateCantidad = state.count - updatedItem.cantidad 
        updatedCart.splice(updatedItemIndex, 1);

        dispatch({
            type: "REMOVE_ITEM",
            payload: { updatedCart , updateCantidad },
        });
    }

    function clear(){
        const updatedCart = [];
        let cantidad = 0;
        
        dispatch({
            type: "CLEAR_CART",
            payload: { updatedCart , cantidad },
        });
    }

    function isInCart(itemId){
        let esta = false;
        const updatedCart = [...state.cartList]

        //BUSCA SI EL ITEM YA SE ENCUENTRA EN EL CARRITO
        const updatedItemIndex = updatedCart.findIndex(
            element => element.id === itemId
        );

        //si no esta
        if (updatedItemIndex >= 0) {
            esta = true;
        } 
        
        dispatch({
            type: "IS_IN_CART",
            payload: { esta },
        });
    }

    return (
        
        <CartContext.Provider value={{ 
            cartList: state.cartList, 
            count: state.count,
            addToCart, 
            clear,
            isInCart,
            removeItem}}>
            {children}
        </CartContext.Provider>
    )
}