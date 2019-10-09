import React from 'react';

const Genres = () => {
  const genres= [
    {title: 'Blues', image: '/images/genres/blues.svg'},
    {title: 'Country', image: '/images/genres/country.svg'},
    {title: 'Gospel', image: '/images/genres/gospel.svg'},
    {title: 'Disco', image: '/images/genres/disco.svg'},
    {title: 'Disco', image: '/images/genres/disco.svg'},
    {title: 'Disco', image: '/images/genres/disco.svg'},
    {title: 'Disco', image: '/images/genres/disco.svg'},
  ]

  const content =  genres.map(genre => {
    return(
      <div className="genre-item">
        <div><p>{genre.title}</p></div>
      </div>
    )
  });
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

export default Genres
