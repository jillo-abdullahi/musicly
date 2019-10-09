export const GET_SONGS_STARTED = 'GET_SONGS_STARTED';
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS';
export const GET_SONGS_FAILURE = 'GET_SONGS_ERROR';

const initialState = {
    songs: [],
    loading: false,
    error: null
}


const songsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_SONGS_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                songs: [...state.songs, action.payload]
            };
        case GET_SONGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default songsReducer;