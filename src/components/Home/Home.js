import React from 'react';
import './Home.css';

import action from '../../assets/action.png';

const Home = () => {

  return (
    <div>
      <div className='poster-container'>    

        <article className='tile'>
          <img
            src={action}
            className='action'
            alt='Popular Series'
            id='1'
          />
          <p className='category-series'>SERIES</p>
        </article>

        <article className='tile'>
          <img
            src={action}
            className='action'
            alt='Popular Movies'
            id='2'
          />
          <p className='category-movies'>MOVIES</p>
        </article>

      </div>
    </div>
  )  
}

export default Home;