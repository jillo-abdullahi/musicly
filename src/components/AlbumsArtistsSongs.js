import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
export default class AlbumsArtistsSongs extends Component {
    render() {

        const songs = [
            {title: 'Takeaway', price: '0.99', url: 'https://open.spotify.com/embed/track/5FNS5Vj69AhRGJWjhrAd01'},
            {title: 'First of the Year', price: '0.99',url: 'https://open.spotify.com/embed/track/1EwZrwFcKH1CKsxgHborBR'},
            {title: 'Let me Love You', price: '0.99',url: 'https://open.spotify.com/embed/track/6wo37KVqFJhtuxPTpLCcfe'},
            {title: 'Let Me', price: '0.99',url: 'https://open.spotify.com/embed/track/6wo37KVqFJhtuxPTpLCcfe'},
            {title: 'Gone', price: '0.99',url: 'https://open.spotify.com/embed/track/6wo37KVqFJhtuxPTpLCcfe'},
            {title: 'Takeaway', price: '0.99',url: 'https://open.spotify.com/embed/track/6wo37KVqFJhtuxPTpLCcfe'},

        ]

        const artists = [
            {name: 'Becky G', url: 'images/artists/becky-g.png'},
            {name: 'The Chainsmokers', url: 'images/artists/the_chainsmokers.png'},
            {name: 'Marshmello', url: 'images/artists/marshmello.png'},
            {name: 'Zayn Malik', url: 'images/artists/zayn.png'},
            {name: 'Robin Schulz', url: 'images/artists/robin-schulz.png'},
        ]

        const albums = [
            {title: 'A Different World', artist: 'Alan Walker', 'url': 'images/albums/different_world.png', price: '9.99'},
            {title: 'Four', artist: 'One Direction', 'url': 'images/albums/four.jpg', price: '7.99'},
            {title: 'Grafitti', artist: 'The Chainsmokers', 'url': 'images/albums/collage.jpg', price: '6.99'},
            {title: 'Heartbreak On A Full Moon', artist: 'Chris Brown', 'url': 'images/albums/HOAFM.jpg', price: '9.99'},
            {title: 'Joytime II', artist: 'Marshmello', 'url': 'images/albums/joytime2.jpg', price: '10.99'},
        ]

        const albumContent = albums.map(album => {
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
                        <button><FontAwesomeIcon icon={ faCartPlus }></FontAwesomeIcon></button>
                    </div>
                </div>
            )
        });

        const artistsContent = artists.map(artist => {
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

        const songsContent = songs.map(song => {
            return (
                <div className="songs-content">
                    <div className="player">
                        <iframe src={song.url} style={{width: '100%'}} height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className="buttons">
                        <button><FontAwesomeIcon icon={ faCartPlus }></FontAwesomeIcon></button>
                    </div>
                    <div className="song-price"><span>$</span>{song.price}</div>
                </div>
            )
        });
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

            </div>
        )
    }
}
