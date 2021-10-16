import React from 'react';
import Card from '../Card/Card';
import './Posters.css';

const Posters = ({ data }) => {

  const posterCards = data.entries.map(poster => {
    return (
      <Card
        title={poster.title}
        description={poster.description}
        programType={poster.programType}
        image={poster.images['Poster Art'].url}   
        releaseYear={poster.releaseYear}                
        id={poster.title}
        key={poster.title} 
      />
    )
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