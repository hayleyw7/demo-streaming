import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import action from '../../assets/action.png';

const Home = () => {
  

  return (
    <div>
      <section className='bottom-bar'>
        <h2>Popular Titles</h2>
      </section>

      <div className='poster-container'>    

        <Link
          to={'/series'}
          key='1' 
        >

          <article className='tile'>
            <img
              src={action}
              className='action'
              alt='Popular Series'
              id='1'
            />
            <p className='category-series'>SERIES</p>
          </article>

          </Link>

          <Link
            to={'/movies'}
            key='1' 
          >

            <article className='tile'>
              <img
                src={action}
                className='action'
                alt='Popular Movies'
                id='2'           
              />
              <p className='category-movies'>MOVIES</p>
            </article>

          </Link>

      </div>
    </div>
  )  
}

export default Home;