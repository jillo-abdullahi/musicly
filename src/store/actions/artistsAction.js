import { db } from '../../config/firebaseConfig';
import {
    GET_ARTISTS_STARTED,
    GET_ARTISTS_SUCCESS,
    GET_ARTISTS_FAILURE
} from '../reducers/artistsReducer';


export const getArtists = () => {
    return (dispatch) => {

        dispatch(getArtistsStarted());
        let artistsRef = db.collection('artists');
        artistsRef.get()
        .then(snapshot => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push(doc.data())
            });
            dispatch(getArtistsSuccess(documents));
        })
        .catch(err => {
            dispatch(getArtistsFailure(err));
        });


    }
};

const getArtistsStarted = () => ({
    type: GET_ARTISTS_STARTED
});

const getArtistsSuccess = (artists) => ({
    type: GET_ARTISTS_SUCCESS,
    payload: artists
})

const getArtistsFailure = (error) => ({
    type: GET_ARTISTS_FAILURE,
    payload: {
        error
    }
});


export default getArtists;