export const GET_GENRES_STARTED = 'GET_GENRE_STARTED';
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';
export const GET_GENRES_FAILURE = 'GET_GENRES_ERROR';

const initialState = {
    genres: [],
    loading: false,
    error: null
}


const genreReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_GENRES_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                genres: [...state.genres, action.payload]
            };
        case GET_GENRES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default genreReducer;