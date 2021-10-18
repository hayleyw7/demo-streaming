import React from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Movies = ({ data }) => {

  // eslint-disable-next-line
  const posterCards = data.map(poster => {

    if (poster.programType === 'movie') {

      if (poster.releaseYear > 2010) {
      
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
    }
  })

  return (
    <div>
      <section className='bottom-bar'>
        <h2>Popular Movies</h2>
      </section>

      <div className='poster-container'>    
        {posterCards}
      </div>
    </div>
  )  
}

export default Movies;