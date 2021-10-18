import React from 'react';
import Card from '../Card/Card';
import './Series.css';

const Series = ({ data }) => {

  // eslint-disable-next-line
  const posterCards = data.sort((posterA, posterB) =>
    posterA.title - posterB.title
  )
  
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
  })

  // const first21Cards = () => {
  //   if (posterCards.length > 21) {
  //     const subThis = posterCards.length - 21;
  //     return posterCards.slice(-subThis);
  //   } else {
  //     return posterCards;
  //   }
  // }  

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