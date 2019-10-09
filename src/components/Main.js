import React, { Component } from 'react';
import Landing from '../components/Landing';
import Genres from './genres';
import AlbumsArtistsSongs from './AlbumsArtistsSongs';
import Footer from './footer';

class Main extends Component {
  render(){
    return (
      <main>
        <Landing />
        <Genres />
        <AlbumsArtistsSongs/ >
        <Footer/>
      </main>
    )
  }
}

export default Main;
