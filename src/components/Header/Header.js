import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  handleLoginClick = (event) => {
    alert('replace with log in click code')
  }

  handleTrialClick = (event) => {
    alert('replace with trial click code')
  }  

  render() {
    return (
      <div className='header'>

        <section className='top-bar'>

          <h1>DEMO Streaming</h1>

          <button
            className='log-in-btn'
            alt='Log in Button'
            onClick={event => this.handleLoginClick(event)}
          >
            Log in
          </button>

          <button
            className='free-trial-btn'
            alt='Free Trial Button'
            onClick={event => this.handleTrialClick(event)}
          >
            Start your free trial
          </button>        

          </section>

          <section className='bottom-bar'>
            <h2>Popular Titles</h2>
          </section>

      </div>
    )
  }
}

export default Header;