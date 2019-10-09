import { debug } from "util";

export const GET_CART_STARTED = 'GET_CART_STARTED';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART = 'ADD_TO_CART';



const initialState = {
    cart: [],
    loading: false,
    error: null
}


const artistsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_CART_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload
            };
        case GET_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.name !== action.payload.name)
            }
        case ADD_TO_CART:
                return {
                    ...state,
                    cart: [ ...state.cart, action.payload]
                }
        default:
            return state;
    }
}

export default artistsReducer;