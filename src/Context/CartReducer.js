export function CartReducer (state,action){
    switch (action.type){
        case "ADD_ITEM":
            return {
                ...state,
                cartList: action.payload.updatedCart,
                count: state.count + action.payload.count
            };

        case "REMOVE_ITEM":
            return {
                ...state,
                cartList: action.payload.updatedCart,
                count: action.payload.updateCantidad
            };

        case "CLEAR_CART":
            return {
                ...state,
                cartList: action.payload.updatedCart,
                count: action.payload.cantidad
            };

        case "IS_IN_CART":
            return {
                ...state,
                isInCart: action.payload.esta,
            };

        default:
            return state;
    }
}