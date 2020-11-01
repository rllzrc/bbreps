/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Pet = ({ name, animal, breed, media, location, id }) => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed)
  // ]);

  let hero = 'http://placecorgi.com/300/300';
  if(media.length) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}

export default Pet;