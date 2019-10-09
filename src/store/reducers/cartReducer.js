export const GET_CART_STARTED = 'GET_CART_STARTED';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';

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
                cart: [...state.cart, action.payload]
            };
        case GET_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default artistsReducer;