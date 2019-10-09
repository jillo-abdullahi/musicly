import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../config/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { addItemToCart } from '../store/actions/cartAction';

class AlbumsArtistsSongs extends Component {

    addToCart = (itemPrice, itemName) => {
        let data = {
            name: itemName,
            price: itemPrice
        }
        const { addItemToCart } = this.props;
        db.collection('cart').doc(itemName).set(data)
        .then(res => {
            addItemToCart({ name: itemName, price: itemPrice});
            toast.warning('Yay! added to cart', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
        })
        .catch(err =>{
            toast.error('Something went wrong! Try again', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
        });
    }
    render() {

        const { artists, songs, albums } = this.props
        let albumContent, artistsContent, songsContent;

        if(artists.loading || !artists.artists[0] || !songs.songs[0] || !albums.albums[0]){
            return ( <div></div>);
        } else {
            albumContent = albums.albums[0].map(album => {
                return (
                    <div className="album-content">
                        <div className="album-art">
                            <img src={album.url} alt="album-art"/>
                        </div>
                        <div className="album-details">
                            <div className="title">{album.title}</div>
                            <div className="artist">{album.artist}</div>
                            <div className="album-price">$<span>{album.price}</span></div>
                        </div>
                        <div className="album-buttons">
                            <button onClick={() => this.addToCart(album.price, album.title)}><FontAwesomeIcon icon={ faCartPlus }></FontAwesomeIcon></button>
                        </div>
                    </div>
                )
            });

            artistsContent = artists.artists[0].map(artist => {
                return (
                    <div className="artist-content">
                        <div className="artist-image">
                            <img src={artist.url} alt="artist"/>
                        </div>
                        <div className="artist-details">
                            <span>{artist.name}</span>
                        </div>
                    </div>
                )
            });

            songsContent = songs.songs[0].map(song => {
                return (
                    <div className="songs-content">
                        <div className="player">
                            <iframe src={song.url} style={{width: '100%'}} height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="buttons">
                            <button onClick={() => this.addToCart(song.price, song.title)}><FontAwesomeIcon icon={ faCartPlus }></FontAwesomeIcon></button>
                        </div>
                        <div className="song-price"><span>$</span>{song.price}</div>
                    </div>
                )
            });
        }
        return (
            <div className="row" id="browse">
                <h3 className="section-title">Make a purchase</h3>
                <hr className="divider"/>
                <div className="col s12 l4">
                    <div className="main_music songs">
                        { songsContent }
                    </div>
                </div>
                <div className="col s12 l4">
                    <div className="main_music album">
                        { albumContent }
                    </div>
                </div>
                <div className="col s12 l4">
                    <div className="main_music artists">
                        { artistsContent }
                    </div>
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        albums: state.allAlbums,
        songs: state.allSongs,
        artists: state.allArtists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => dispatch(addItemToCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumsArtistsSongs);