export const GET_ALBUMS_STARTED = 'GET_ALBUMS_STARTED';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE';

const initialState = {
    albums: [],
    loading: false,
    error: null
}


const albumReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ALBUMS_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: [...state.albums, action.payload]
            };
        case GET_ALBUMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default albumReducer;