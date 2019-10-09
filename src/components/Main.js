import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from '../components/Landing';
import Genres from './genres';
import AlbumsArtistsSongs from './AlbumsArtistsSongs';
import Footer from './footer';
import Cart from './Cart';
import getGenres from '../store/actions/genreActions';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

class Main extends Component {

  componentDidMount(){
    this.getMusic()
  }

  getMusic = () => {
    this.props.getMusic();
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
        getMusic: () => dispatch(getGenres())
    }
}

export default connect(null, mapDispatchToProps)(Main);
