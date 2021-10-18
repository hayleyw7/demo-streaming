import React from 'react';
import './Card.css';

const Card = ({ title, description, programType, image, releaseYear, id}) => {
  
  return (
    <div className='card' alt='card'>

      <img
        src={image}
        className='icon'
        alt={`${title} Movie Poster`}
        id={id}
      />

      <h3 className='title'>{title}</h3>
      
    </div>
  )
}

export default Card;