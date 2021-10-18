import React from 'react';
import Card from '../Card/Card';

const Series = ({ data }) => {

  // eslint-disable-next-line
  const posterCards = data.sort(function (posterA, posterB) {
    if (posterB.title > posterA.title) {
        return -1;
    }
    if (posterA.title > posterB.title) {
        return 1;
    }
    return 0;
  })
  
  // eslint-disable-next-line
  .map(poster => {

    if (poster.programType === 'series') {
      
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
  }).slice(0, 47)

  return (
    <div>
      <section className='bottom-bar'>
        <h2>Popular Series</h2>
      </section>

      <div className='poster-container'>    
        {posterCards}
      </div>
    </div>
  )  
}

export default Series;