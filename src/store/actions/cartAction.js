import {
    db
} from '../../config/firebaseConfig';
import {
    GET_CART_STARTED,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    REMOVE_FROM_CART,
    ADD_TO_CART
} from '../reducers/cartReducer';


export const getCart = () => {
    return (dispatch) => {

        dispatch(getCartStarted());
        let cartRef = db.collection('cart');
        cartRef.get()
            .then(snapshot => {
                let documents = [];
                snapshot.forEach(doc => {
                    documents.push(doc.data())
                });
                dispatch(getCartSuccess(documents));
            })
            .catch(err => {
                dispatch(getCartFailure(err));
            });


    }
};

export const removeItemFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload
})

export const addItemToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

const getCartStarted = () => ({
    type: GET_CART_STARTED
});

const getCartSuccess = (cart_items) => ({
    type: GET_CART_SUCCESS,
    payload: cart_items
})

const getCartFailure = (error) => ({
    type: GET_CART_FAILURE,
    payload: {
        error
    }
});


export default getCart;