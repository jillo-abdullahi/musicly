import React, { Component } from 'react';

import Header from './Header';

class Landing extends Component {
  render(){
    return (
      <div className="landing">
        <div className="container intro-text">
            <h2>Discover music you'll love.</h2>
            <p>Find the latest and greatest here.</p>
            <div className="button_landing"><a href="#browse">find music</a></div>
            <h5>Featured new music</h5>
            <div className="featured">
              <div className="row">
                <div className="col s12 m4">
                  <iframe src="https://open.spotify.com/embed/track/1c0hsvHLELX6y8qymnpLKL" width="250" height="330" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col s12 m4">
                  <iframe src="https://open.spotify.com/embed/track/5Z01UMMf7V1o0MzF86s6WJ" width="250" height="330" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col s12 m4">
                  <iframe src="https://open.spotify.com/embed/track/0I6rPjtBatbnqWzqvQhvp4" width="250" height="330" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Landing;
