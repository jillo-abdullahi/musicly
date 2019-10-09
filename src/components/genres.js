import React from 'react';
import { connect } from 'react-redux';

const Genres = (props) => {

  const { genres } = props;
  let content;

  if(genres.loading || !genres.genres[0]){
    return ( <div></div>);
  } else {
    content = genres.genres[0].map(genre => {
      return(
        <div className="genre-item">
          <div><p>{genre.title}</p></div>
        </div>
      )
    });
  }

  return (
    <div>
      <h3 className="section-title">Genres</h3>
      <hr className="divider"/>
      <div className="container genres">
         { content }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      genres: state.genres
  }
}

export default connect(mapStateToProps)(Genres);
