import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from '../components/Landing';
import Genres from './genres';
import AlbumsArtistsSongs from './AlbumsArtistsSongs';
import Footer from './footer';
import Cart from './Cart';
import getGenres from '../store/actions/genreActions';
import getSongs from '../store/actions/songsAction';
import getAlbums from '../store/actions/albumsAction';
import getArtists from '../store/actions/artistsAction';

class Main extends Component {

  componentDidMount(){
    this.getMusic()
  }

  getMusic = () => {
    this.props.getGenres();
    this.props.getSongs();
    this.props.getAlbums();
    this.props.getArtists()
  }
  render(){

    return (
      <main>
        <Landing />
        <Cart />
        <Genres />
        <AlbumsArtistsSongs/ >
        <Footer/>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenres()),
        getAlbums: () => dispatch(getAlbums()),
        getArtists: () => dispatch(getArtists()),
        getSongs: () => dispatch(getSongs()),
    }
}

export default connect(null, mapDispatchToProps)(Main);
