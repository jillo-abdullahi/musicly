import { db } from '../../config/firebaseConfig';
import {
    GET_ALBUMS_STARTED,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILURE
} from '../reducers/albumReducer';


export const getAlbums = () => {
    return (dispatch) => {

        dispatch(getAlbumsStarted());
        let albumsRef = db.collection('albums');
        albumsRef.get()
        .then(snapshot => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push(doc.data())
            });
            dispatch(getAlbumsSuccess(documents));
        })
        .catch(err => {

            console.log(err)
            dispatch(getAlbumsFailure(err));
        });


    }
};

const getAlbumsStarted = () => ({
    type: GET_ALBUMS_STARTED
});

const getAlbumsSuccess = (albums) => ({
    type: GET_ALBUMS_SUCCESS,
    payload: albums
})

const getAlbumsFailure = (error) => ({
    type: GET_ALBUMS_FAILURE,
    payload: {
        error
    }
});


export default getAlbums;