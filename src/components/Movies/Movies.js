import React from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Posters = ({ data }) => {

  // eslint-disable-next-line
  const posterCards = data.entries.map(poster => {

    if (poster.programType === 'movie') {
      
      return (
        <Card
          title={poster.title}
          description={poster.description}
          image={poster.images['Poster Art'].url}   
          releaseYear={poster.releaseYear}                
          id={poster.title}
          key={poster.title} 
        />
      )
    }
  })

  return (
    <div>
      <div className='poster-container'>    
        {posterCards}
      </div>
    </div>
  )  
}

export default Posters;