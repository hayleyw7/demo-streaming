import React from 'react';
import Card from '../Card/Card';
import './Series.css';

const Series = ({ data }) => {

  // eslint-disable-next-line
  const posterCards = data.entries.map(poster => {

    if (poster.programType === 'series') {
      
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

export default Series;