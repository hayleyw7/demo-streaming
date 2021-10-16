import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className='header'>

        <section className='top-bar'>

          <h1>DEMO Streaming</h1>

            <section className='nav-bar'>

              <button
                className='log-in-btn'
                alt='Log in Button'
              >
                Log in
              </button>

              <button
                className='free-trial-btn'
                alt='Free Trial Button'
              >
                Start your free trial
              </button>   

            </section>     

          </section>

          <section className='bottom-bar'>
            <h2>Popular Titles</h2>
          </section>

      </div>
    )
  }
}

export default Header;