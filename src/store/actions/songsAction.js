import { db } from '../../config/firebaseConfig';
import {
    GET_SONGS_STARTED,
    GET_SONGS_SUCCESS,
    GET_SONGS_FAILURE
} from '../reducers/songsReducer';


export const getSongs = () => {
    return (dispatch) => {

        dispatch(getSongsStarted());
        let songsRef = db.collection('songs');
        let allSongs = songsRef.get()
        .then(snapshot => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push(doc.data())
            });
            dispatch(getSongsSuccess(documents));
        })
        .catch(err => {
            dispatch(getSongsFailure(err));
        });


    }
};

const getSongsStarted = () => ({
    type: GET_SONGS_STARTED
});

const getSongsSuccess = (songs) => ({
    type: GET_SONGS_SUCCESS,
    payload: songs
})

const getSongsFailure = (error) => ({
    type: GET_SONGS_FAILURE,
    payload: {
        error
    }
});


export default getSongs;