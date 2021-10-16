import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <div className='header'>

      <section className='top-bar'>

        <h1>DEMO Streaming</h1>

        <button
          className='log-in-btn'
          alt='Log in Button'
          onClick={event => this.handleClick(event)}
        >
          Log in
        </button>

        </section>

        <section className='bottom-bar'>
          <h2>Popular Titles</h2>
        </section>

    </div>
  )
}

export default Header;