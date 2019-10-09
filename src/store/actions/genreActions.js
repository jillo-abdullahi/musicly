import { db } from '../../config/firebaseConfig';
import {
    GET_GENRES_STARTED,
    GET_GENRES_SUCCESS,
    GET_GENRES_FAILURE
} from '../reducers/genreReducer';


export const getGenres = () => {
    return (dispatch) => {

        dispatch(getGenresStarted());
        let genresRef = db.collection('genres');
        let allGenres = genresRef.get()
        .then(snapshot => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push(doc.data())
            });
            dispatch(getGenresSuccess(documents));
        })
        .catch(err => {
            dispatch(getGenresFailure(err));
        });


    }
};

const getGenresStarted = () => ({
    type: GET_GENRES_STARTED
});

const getGenresSuccess = (genres) => ({
    type: GET_GENRES_SUCCESS,
    payload: genres
})

const getGenresFailure = (error) => ({
    type: GET_GENRES_FAILURE,
    payload: {
        error
    }
});


export default getGenres;