export const GET_ARTISTS_STARTED = 'GET_ARTISTS_STARTED';
export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_ARTISTS_FAILURE = 'GET_ARTISTS_ERROR';

const initialState = {
    artists: [],
    loading: false,
    error: null
}


const artistsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ARTISTS_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_ARTISTS_SUCCESS:
            return {
                ...state,
                loading: false,
                artists: [...state.artists, action.payload]
            };
        case GET_ARTISTS_FAILURE:
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