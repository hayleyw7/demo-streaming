import React from 'react';
import './Card.css';

const Card = ({ title, description, programType, image, releaseYear, id, key}) => {
  
  return (
    <div className='card' alt='card'>

      <img
        src={image}
        className='icon'
        alt={`${title} Movie Poster`}
        id={id}
      />

      <h3 className='title'>{title}</h3>
      <p className='description'>{description}</p>
      <p className='programType'>{programType}</p>
      <p className='releaseYear'>{releaseYear}</p>
      
    </div>
  )
}

export default Card;