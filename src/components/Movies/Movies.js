import React from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Movies = ({ data }) => {

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

    if (poster.programType === 'movie' && poster.releaseYear > 2010) {
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

  // const first21Cards = () => {
  //   for (let i = 0; i < 21; i++) { 
  //     return posterCards[i]
  //   }
  // }

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
        <h2>Popular Movies</h2>
      </section>

      <div className='poster-container'>
        {posterCards}
      </div>
    </div>
  )  
}

export default Movies;