import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import action from '../../assets/action.png';

const Home = () => {

  return (
    <div>
      <div className='poster-container'>    

        <article className='tile'>

          <Link
            to={'/series'}
            key='1' 
          >

            <img
              src={action}
              className='action'
              alt='Popular Series'
              id='1'
            />

          </Link>

          <p className='category-series'>SERIES</p>

        </article>

        <article className='tile'>

          <Link
            to={'/movies'}
            key='1' 
          >

            <img
              src={action}
              className='action'
              alt='Popular Movies'
              id='2'           
            />

          </Link>

          <p className='category-movies'>MOVIES</p>
          
        </article>

      </div>
    </div>
  )  
}

export default Home;