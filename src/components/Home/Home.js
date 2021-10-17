import React from 'react';
import './Home.css';

import action from '../../assets/action.png';

const Home = () => {

  return (
    <div>
      <div className='home-container'>    

        <img
          src={action}
          className='placeholder'
          alt='Popular Series'
          id='1'
        />

        <img
          src={action}
          className='placeholder'
          alt='Popular Movies'
          id='2'
        />

      </div>
    </div>
  )  
}

export default Home;